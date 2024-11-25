import { HOSTNAME, PORT } from "./config/environment";
import http from "http";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import { ErrorResponse } from "./middlewares/errorhandler";
import Logger from "./utils/logger.util";

import apiRouter from "./api/routes";


const app = express();
const server = http.createServer(app);
app.use(cors());
app.use(helmet());

app.use(express.urlencoded({ extended: false }));

// Add api routes
app.use("/api", apiRouter);

app.use("*", (req, res) => {
    let message = `Can't ${req.method} ${req.originalUrl}`;

    Logger.error(message);
    throw new ErrorResponse(404, message);
});

server.listen(PORT, () =>  Logger.success(`Server running on http://${HOSTNAME}:${PORT}`));