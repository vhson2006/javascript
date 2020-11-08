import Redis from 'ioredis';
import path from 'path';
import {
  RateLimiterRedis,
} from 'rate-limiter-flexible';
import dotenv from 'dotenv';
import createError from 'http-errors';

if (process.env.TYPE === 'development') {
  dotenv.config({ path: path.join(__dirname, '../../../.env/server.development.env') });
} else {
  dotenv.config({ path: path.join(__dirname, '../.env/server.build.env') });
}
const redisClient = new Redis({
  port: process.env.REDIS_PORT,
  host: process.env.REDIS_HOST,
  enableOfflineQueue: false,
});
const rateLimiterRedis = new RateLimiterRedis({
  storeClient: redisClient,
  points: process.env.RATE_LIMIT,
  duration: process.env.RATE_DURATION,
});
const shieldService = (req, res, next) => {
  rateLimiterRedis.consume(req.ip)
    .then(() => {
      next();
    })
    .catch((_) => {
      const err = new createError.TooManyRequests();
      res.status(err.status).send(err.message);
    });
};

export default shieldService;
