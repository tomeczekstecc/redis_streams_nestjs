import Redis from 'ioredis';

export const redisUrl = 'redis://default:KKKemot7901$@192.168.1.110:6379/1';

export const redis = new Redis(redisUrl, { lazyConnect: false });
