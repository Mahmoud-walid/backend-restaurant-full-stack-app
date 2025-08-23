import express from 'express';
import { ENV } from './config/env';
import router from './routes/routes';

const app = express();
const port = ENV.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/health', (_req, res) => {
  res.status(200).json({ status: 'success', message: 'Server is running' });
});

app.use('/api', router);

app.listen(port, () => {
  console.log(`✅ Server is running now on port ${port}`);
});
