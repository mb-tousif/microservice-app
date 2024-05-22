import { Server } from "http";
import config from "./Config";
import App from "./App";

async function Bootstrap() {
  const server: Server = App.listen(config.port, () => {
    console.info(`Server running 🚀 on port ${config.port}`);
  });

  const exitHandler = () => {
    if (server) {
      server.close(() => {
        console.log("Server closed successfully 💥")
      });
    }
    process.exit(1);
  };

  const unexpectedErrorHandler = (error: unknown) => {
    console.error(error);
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
}

Bootstrap();
