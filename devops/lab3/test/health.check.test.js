const request = require('supertest');
const express = require('express');
const app = express(); // Créez une instance d'Express pour votre test
const userController = require('../src/controllers/user');
const db = require('../src/dbClient'); // Ajustez le chemin en fonction de la structure de votre projet

// ...

describe('Health Check Endpoint', () => {
  it('returns status OK', async () => {
    const response = await request(app).get('/health');

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ status: 'OK' });
  });
});
