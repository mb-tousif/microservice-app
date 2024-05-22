import { Server } from "http";
import config from "./Config";
import mongoose from "mongoose";
import { RedisClient } from "./utils/redis";

let server: Server;

const BootstrapApp = async () => {
  try {
    await RedisClient.connect();
    await mongoose.connect(config.database_url as string);
    console.info(`🗂️ MongoDB Server connected`);
  } catch (error) {
    console.warn(error);
  }
  const exitHandler = () => {
    if (server) {
      server.close(() => {
        console.warn("Server closed");
      });
    }
    process.exit(1);
  };

  const unexpectedErrorHandler = (error: unknown) => {
    console.warn(error);
    exitHandler();
  };

  process.on("uncaughtException", unexpectedErrorHandler);
  process.on("unhandledRejection", unexpectedErrorHandler);

  process.on("SIGTERM", () => {
    console.info("SIGTERM signal received 🛑");
    if (server) {
      server.close();
    }
  });
};

export default BootstrapApp;