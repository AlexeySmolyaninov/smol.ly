import express from 'express';

export const app = express();

app.get('/', (_req, res) => res.redirect('/api/health'));
app.get('/api/health', (_req, res) => res.send({ status: 'UP' }));
