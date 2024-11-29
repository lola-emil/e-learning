import { HOSTNAME, PORT } from "./config/environment";
import http from "http";
import express, { ErrorRequestHandler } from "express";
import helmet from "helmet";
import cors from "cors";
import errorHandler, { ErrorResponse } from "./middlewares/errorhandler";
import Logger from "./utils/logger.util";

import apiRouter from "./api/routes";


const app = express();
app.use(cors());
app.use(helmet());

app.use(express.urlencoded({ extended: false }));

// Add api routes
app.use("/api", apiRouter);

// 404 error handler
app.use("*", (req, res) => {
    let message = `Can't ${req.method} ${req.originalUrl}`;

    Logger.error(message);
    throw new ErrorResponse(404, message);
});

// Add error handler
app.use((errorHandler as ErrorRequestHandler))

// Gi export ni siya para magamit sa websocket
export const server = http.createServer(app);
server.listen(PORT, () =>  Logger.success(`Server running on http://${HOSTNAME}:${PORT}`));