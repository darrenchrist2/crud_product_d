<?php

namespace App\Controller;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Firebase\JWT\JWT;
use League\OAuth2\Client\Provider\Google;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class GoogleAuthController extends AbstractController
{
    private string $jwtSecret;
    private string $clientId;
    private string $clientSecret;
    private string $redirectUri;

    public function __construct()
    {
        // Mengambil variabel dari .env menggunakan getenv() atau $_ENV
        $this->jwtSecret = getenv('JWT_SECRET_KEY') ?: $_ENV['JWT_SECRET_KEY'] ?? 'default_secret';
        $this->clientId = getenv('GOOGLE_CLIENT_ID') ?: $_ENV['GOOGLE_CLIENT_ID'] ?? '';
        $this->clientSecret = getenv('GOOGLE_CLIENT_SECRET') ?: $_ENV['GOOGLE_CLIENT_SECRET'] ?? '';
        $this->redirectUri = getenv('GOOGLE_REDIRECT_URI') ?: $_ENV['GOOGLE_REDIRECT_URI'] ?? '';
    }

    #[Route('/google/login', name: 'google_login', methods: ['GET'])]
    public function googleLogin(): JsonResponse
    {
        $google = new Google([
            'clientId'     => $this->clientId,
            'clientSecret' => $this->clientSecret,
            'redirectUri'  => $this->redirectUri,
        ]);

        $authUrl = $google->getAuthorizationUrl();
        return new JsonResponse(['url' => $authUrl]);
    }

    #[Route('/google/callback', name: 'google_callback', methods: ['GET'])]
    public function googleCallback(Request $request, EntityManagerInterface $entityManager): Response
    {
        $google = new Google([
            'clientId'     => $this->clientId,
            'clientSecret' => $this->clientSecret,
            'redirectUri'  => $this->redirectUri,
        ]);

        if (!$request->query->get('code')) {
            return new JsonResponse(['message' => 'Authorization failed'], 401);
        }

        $token = $google->getAccessToken('authorization_code', [
            'code' => $request->query->get('code'),
        ]);

        $googleUser = $google->getResourceOwner($token);
        $userData = $googleUser->toArray();

        $username = $userData['name'] ?? 'Unknown User';
        $email = $userData['email'] ?? null;

        if (!$email) {
            return new JsonResponse(['message' => 'Email not provided by Google'], 400);
        }

        $userRepository = $entityManager->getRepository(User::class);
        $user = $userRepository->findOneBy(['email' => $email]);

        if (!$user) {
            $user = new User();
            $user->setUsername($username);
            $user->setEmail($email);
            $user->setPassword("");
            $user->setRole("user");

            $entityManager->persist($user);
            $entityManager->flush();
        }

        $payload = [
            'id' => $user->getId(),
            'username' => $user->getUsername(),
            'role' => $user->getRole(),
            'exp' => time() + 3600,
        ];

        $jwtToken = JWT::encode($payload, $this->jwtSecret, 'HS256');

        return new RedirectResponse('http://localhost:5173/google/callback?token=' . $jwtToken);
    }
}
