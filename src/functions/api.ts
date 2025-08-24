import express from 'express';
import serverless from 'serverless-http';
import router from '../routes/routes';
import {
  Handler,
  HandlerContext,
  HandlerEvent,
  HandlerResponse,
} from '@netlify/functions';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/test', (_req, res) => {
  res.json({ message: 'Test route is working' });
});

app.use('/', router);

const serverlessHandler = serverless(app);

const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
): Promise<HandlerResponse> => {
  const result: any = await serverlessHandler(event, context);

  return {
    statusCode: result.statusCode || 200,
    body: result.body || JSON.stringify({ message: 'Unknown error' }),
    headers: result.headers || { 'Content-Type': 'application/json' },
  };
};

export { handler };
