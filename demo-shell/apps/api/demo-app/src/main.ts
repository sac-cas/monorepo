import express from 'express';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.get('/version', (req, res) => {
  res.send({ version: '0.0.1' });
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
