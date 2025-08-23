import express from 'express';
import { ENV } from './config/env';

const app = express();
const port = ENV.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/health', (_req, res) => {
  res.status(200).json({ status: 'success', message: 'Server is running' });
});

app.use('/api');

app.listen(port, () => {
  console.log(`✅ Server is running now on port ${port}`);
});
