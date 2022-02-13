import request from 'supertest';
import { app } from '../src/app';

describe('Testing Paths', () => {
  test('/ should redirect to /api/health', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(302);
  });

  test('/api/health status code', async () => {
    const data = { status: 'UP' };
    const response = await request(app).get('/api/health');
    expect(response.statusCode).toBe(200);
    console.log(response.body);
    expect(response.body).toEqual(data);
  });
});
