<?php
namespace App\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\KernelBrowser;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class ProductControllerTest extends WebTestCase
{
    private KernelBrowser $client;

    protected function setUp(): void
    {
        parent::setUp();
        $this->client = static::createClient();
    }

    public function testShowAllProduct()
    {
        $this->client->request('GET', '/api/products');
        $response = $this->client->getResponse();
        
        $this->assertEquals(200, $response->getStatusCode());
    }

    public function testSpecificProductFound()
    {
        $this->client->request('GET', '/api/products/7');
        $response = $this->client->getResponse();
        
        $this->assertEquals(200, $response->getStatusCode());
    }

    public function testSpecificProductNotFound()
    {
        $this->client->request('GET', '/api/products/999');
        $response = $this->client->getResponse();
        
        $this->assertEquals(404, $response->getStatusCode());
    }

    public function testCreateProductSuccess()
    {
        $productName = 'Test Product' . uniqid();
        $this->client->request('POST', '/api/products', [], [], ['CONTENT_TYPE' => 'application/json'], json_encode([
            'name' => $productName,
            'price' => 100,
            'description' => 'Test Description'
        ]));
        
        $response = $this->client->getResponse();
        $this->assertEquals(200, $response->getStatusCode());
    }

    public function testCreateProductExists()
    {
        $this->client->request('POST', '/api/products', [], [], ['CONTENT_TYPE' => 'application/json'], json_encode([
            'name' => 'Test Product',
            'price' => 100,
            'description' => 'Test Description'
        ]));
        
        $response = $this->client->getResponse();
        $this->assertEquals(400, $response->getStatusCode());
    }

    public function testUpdateProductSuccess()
    {
        $this->client->request('PUT', '/api/products/1', [], [], ['CONTENT_TYPE' => 'application/json'], json_encode([
            'name' => 'Updated Product',
            'price' => 200,
            'description' => 'Updated Description'
        ]));
        
        $response = $this->client->getResponse();
        $this->assertEquals(200, $response->getStatusCode());
    }

    public function testDeleteProductSuccess()
    {
        $this->client->request('DELETE', '/api/products/1');
        $response = $this->client->getResponse();
        
        $this->assertEquals(200, $response->getStatusCode());
    }
}
