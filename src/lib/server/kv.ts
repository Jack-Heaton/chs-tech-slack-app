import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_URL,
  token: process.env.UPSTASH_REDIS_TOKEN,
})

export async function createKV(key: string, value: string | number | boolean | Record<string, unknown>) {
  await redis.set(key, value);
}

export async function getKV(key: string) {
  return await redis.get(key);
}
