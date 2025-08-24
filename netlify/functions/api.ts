import { HandlerContext, HandlerEvent } from '@netlify/functions';
import express from 'express';
import serverless from 'serverless-http';
import router from '../../src/routes/routes';
export async function handler(event: HandlerEvent, context: HandlerContext) {
  const app = express();
  app.use('/api/', router);
  return serverless(app)(event, context);
}
