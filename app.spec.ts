import app from './src/app';
import { calculateDiscount } from './src/utils';
import { describe } from 'node:test';
import request from 'supertest';

describe('App', () => {
  it('should calculate discounted price', () => {
    const result = calculateDiscount(100, 20);
    expect(result).toBe(20);
  });

  it('should return 200 status code', async () => {
    const respone = await request(app).get('/').send();
    expect(respone.statusCode).toBe(200);
  });
});
