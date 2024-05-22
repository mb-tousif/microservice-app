/* eslint-disable no-console */
import { SetOptions, createClient } from "redis";
import Config from "../Config";

const redisClient = createClient({
  url: Config.redis.url,
});

const redisPubClient = createClient({
  url: Config.redis.url,
});

const redisSubClient = createClient({
  url: Config.redis.url,
});

const connect = async (): Promise<void> => {
  await redisClient.connect();
  await redisPubClient.connect();
  await redisSubClient.connect();
};

redisClient.on("error", (error) => console.log(error));
redisClient.on("connect", () => console.log("🤖 Redis connected"));

const set = async (
  key: string,
  value: string,
  options?: SetOptions
): Promise<void> => {
  await redisClient.set(key, value, options);
};

const get = async (key: string): Promise<string | null> => {
  return await redisClient.get(key);
};

const del = async (key: string): Promise<void> => {
  await redisClient.del(key);
};

const setAccessToken = async (userId: string, token: string): Promise<void> => {
  const key = `access-token: ${userId}`;
  await redisClient.set(key, token, { EX: Number(Config.redis.expires_in) });
};

const getAccessToken = async (userId: string): Promise<string | null> => {
  const key = `access-token: ${userId}`;
  return await redisClient.get(key);
};

const delAccessToken = async (userId: string): Promise<void> => {
  const key = `access-token: ${userId}`;
  await redisClient.del(key);
};

export const RedisClient = {
  connect,
  set,
  get,
  del,
  setAccessToken,
  getAccessToken,
  delAccessToken,
  publish: redisPubClient.publish.bind(redisPubClient),
  subscribe: redisSubClient.subscribe.bind(redisSubClient),
};
