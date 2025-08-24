import { CronJob } from 'cron';
import https from 'https';
import { ENV } from './env';

const job = new CronJob('*/14 * * * *', () => {
  https
    .get(`${ENV.API_URL}/api/health`, (res) => {
      if (res.statusCode === 200) {
        console.log('API call successful');
      } else {
        console.log(`API call failed with status code ${res.statusCode}`);
      }
    })
    .on('error', (err) => {
      console.error(`API call failed with error: ${err.message}`);
    });
});

export default job;

//! MINUTE, HOUR, DAY OF MONTH, MONTH, DAY OF WEEK

//? EXAMPLE && EXPLANATION:

//* 14 * * * * - This cron expression will run the job every 14 minutes.
//* 0 0 * * 0 - This cron expression will run the job every Sunday at midnight.
//* 30 3 15 * * - This cron expression will run the job at 3:30 AM on the 15th day of every month.
//* 0 0 1 1 * - This cron expression will run the job at midnight on the 1st day of every month.
//* 0 0 1 * 1 - This cron expression will run the job at midnight on every Monday.
//* 0 * * * * - This cron expression will run the job every hour at the beginning of the hour.
//* 0 */2 * * * - This cron expression will run the job every two hours.
//* 0 0-23/2 * * * - This cron expression will run the job every two hours, starting at midnight and ending at 23:00.
