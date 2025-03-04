<?php
namespace App\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\KernelBrowser;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class GoogleAuthControllerTest extends WebTestCase
{
    private KernelBrowser $client;

    protected function setUp(): void
    {
        parent::setUp();
        $this->client = static::createClient();
    }

    public function testGoogleLogin()
    {
        $this->client->request('GET', '/google/login');
        $response = $this->client->getResponse();
        
        $this->assertEquals(200, $response->getStatusCode());
        
        $responseData = json_decode($response->getContent(), true);
        $this->assertArrayHasKey('url', $responseData);
        $this->assertNotEmpty($responseData['url']);
    }

    public function testGoogleCallbackWithoutCode()
    {
        $this->client->request('GET', '/google/callback');
        $response = $this->client->getResponse();
        
        $this->assertEquals(401, $response->getStatusCode());
        
        $responseData = json_decode($response->getContent(), true);
        $this->assertEquals('Authorization failed', $responseData['message']);
    }

    public function testGoogleCallbackWithInvalidCode()
    {
        $this->client->request('GET', '/google/callback', ['code' => 'invalid_code']);
        $response = $this->client->getResponse();
        
        $this->assertEquals(400, $response->getStatusCode());
    }
}
