import express from 'express';
import {VersionModel} from "@demo-shell/model/demo";

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.get('/version', (req, res) => {
  const version: VersionModel = { version: '0.0.1' };
  res.send(version);
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
