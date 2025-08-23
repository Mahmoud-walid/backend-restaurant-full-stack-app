import express from 'express';
import serverless from 'serverless-http';
import router from '../../src/routes/routes';

const app = express();

app.use(express.json());
app.use(router);

export const handler = serverless(app);
