<?php
namespace App\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\KernelBrowser;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class AuthControllerTest extends WebTestCase
{
    private KernelBrowser $client;

    protected function setUp(): void
    {
        parent::setUp();
        $this->client = static::createClient();
    }

    public function testRegisterSuccess()
    {
        $testUsername = 'Testuser' . uniqid();
        $testEmail = 'test' . uniqid() . '@example.com';
        $this->client->request('POST', '/register', [], [], ['CONTENT_TYPE' => 'application/json'], json_encode([
            'username' => $testUsername,
            'email' => $testEmail,
            'password' => 'password123'
        ]));

        $response = $this->client->getResponse();
        $this->assertEquals(201, $response->getStatusCode());
    }

    public function testRegisterUsernameAndEmailExists()
    {
        $this->client->request('POST', '/register', [], [], ['CONTENT_TYPE' => 'application/json'], json_encode([
            'username' => 'testuser',
            'email' => 'test@example.com',
            'password' => 'password123'
        ]));

        $response = $this->client->getResponse();
        $this->assertEquals(400, $response->getStatusCode());
    }

    public function testLoginSuccess()
    {
        $this->client->request('POST', '/login', [], [], ['CONTENT_TYPE' => 'application/json'], json_encode([
            'username' => 'testuser',
            'password' => 'password123'
        ]));

        $response = $this->client->getResponse();
        $this->assertEquals(200, $response->getStatusCode());

        $responseData = json_decode($response->getContent(), true);
        $this->assertArrayHasKey('token', $responseData);
        $this->assertNotEmpty($responseData['token']);
    }

    public function testLoginInvalidCredentials()
    {
        $this->client->request('POST', '/login', [], [], ['CONTENT_TYPE' => 'application/json'], json_encode([
            'username' => 'testuser',
            'password' => 'wrongpassword'
        ]));

        $response = $this->client->getResponse();
        $this->assertEquals(401, $response->getStatusCode());
    }
}
