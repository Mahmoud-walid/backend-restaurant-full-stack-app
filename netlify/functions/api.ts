import express from 'express';
import serverless from 'serverless-http';
import router from '../../src/routes/routes';

const app = express();

app.use(express.json());

app.get('/test', (_req, res) => {
  res.json({ message: 'Test route is working' });
});

app.use('/api', router);

export const handler = serverless(app);
