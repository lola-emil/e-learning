import { PORT } from "./config/environment";
import http from "http";
import express from "express";
import helmet from "helmet";
import cors from "cors";


const app = express();
const server = http.createServer(app);
app.use(cors());
app.use(helmet());

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to the API"
    });
});

server.listen(PORT, () => console.log(`Server is now running on http://localhost:${PORT}`));