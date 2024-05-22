import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import config from "./Config";

const App: Application = express();

App.use(cors());

//parser
App.use(express.json());
App.use(express.urlencoded({ extended: true }));

// App.use("/api/v1");

App.get("/", (req, res) => {
  res.send(
    `<h1 style='text-align: center; padding: 20px; color:green'>${config.app_name} App Server is Running!</h1>`
  );
});

//global error handler

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
