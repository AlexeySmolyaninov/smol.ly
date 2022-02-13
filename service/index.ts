import express from 'express';

const app = express();
const PORT = 4000;

app.get("/", (_req, res) => res.redirect("/api/health"))
app.get('/api/health', (_req, res) => res.send({ status: 'UP' }));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
