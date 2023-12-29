const request = require('supertest');
const express = require('express');
const app = express();
const expect = require('chai').expect; // Ajoutez cette ligne

// ...

describe('Health Check Endpoint', () => {
  it('returns status OK', async () => {
    const response = await request(app).get('/health');

    expect(response.statusCode).to.be.equal(200); // Utilisez to.be.equal au lieu de toBe
    expect(response.body).to.be.deep.equal({ status: 'OK' }); // Utilisez to.be.deep.equal au lieu de toEqual
  });
});
