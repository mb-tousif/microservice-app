import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import config from "./Config";
import router from "./app/routes";
import BootstrapApp from "./Server";
import GlobalErrorHandler from "./Error/globalErrorHandler";

const App: Application = express();

App.use(cors());

//parser
App.use(express.json());
App.use(express.urlencoded({ extended: true }));

BootstrapApp();

App.use("/api/v1", router);

App.get("/", (req, res) => {
  res.send(
    `<h1 style='text-align: center; padding: 20px; color:green'>${config.app_name} App Server is Running!</h1>`
  );
});

App.listen(config.port, () => {
  console.info(`Server running 🚀 on port ${config.port}`);
});

//global error handler
App.use(GlobalErrorHandler);

//handle not found
App.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Not Found",
    errorMessages: [
      {
        path: req.originalUrl,
        message: `🚦 Requested ${req.originalUrl} this Route Not Found 💥`,
      },
    ],
  });
  next();
});

export default App;
