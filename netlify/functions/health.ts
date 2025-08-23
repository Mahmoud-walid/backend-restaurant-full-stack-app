import { Handler } from '@netlify/functions';

const handler: Handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      status: 'success',
      message: 'Server is running',
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  };
};

export { handler };
