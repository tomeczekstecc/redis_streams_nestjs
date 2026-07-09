import Redis from 'ioredis';

const url = 'redis://localhost:6380';

export const redis = new Redis(url, { lazyConnect: false });
