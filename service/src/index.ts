import { app } from './app';
const PORT = 4000;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
