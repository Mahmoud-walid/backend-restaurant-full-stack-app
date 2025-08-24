import { configDotenv } from 'dotenv';
configDotenv();

type NodeENV = 'development' | 'production';

export const ENV = {
  ['PORT']: process.env['PORT']!,
  ['DATABASE_URL']: process.env['DATABASE_URL']!,
  ['NODE_ENV']: process.env['NODE_ENV']! as NodeENV,
  ['EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY']:
    process.env['EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY']!,
  ['API_URL']: process.env['API_URL']!,
};

// Validate required environment variables
if (!ENV.DATABASE_URL) {
  console.error('Missing required environment variable: DATABASE_URL');
  // In production, we might want to throw an error here
  // if (ENV.NODE_ENV === 'production') throw new Error('DATABASE_URL is required');
}
