import { configDotenv } from 'dotenv';
configDotenv();

export const ENV = {
  ['PORT']: process.env['PORT']!,
  ['DATABASE_URL']: process.env['DATABASE_URL']!,
  ['NODE_ENV']: process.env['NODE_ENV']!,
  ['EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY']:
    process.env['EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY']!,
};
