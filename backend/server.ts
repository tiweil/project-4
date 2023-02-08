import cors from "cors";
import express from "express";
import config from "./utils/config";
import dal from "./utils/dal";

const server = express();


server.use(cors());
server.use(express.json());

const currentPort = config.port;
server.listen(currentPort, async () => {
    //connect to mongo than show he is in the air=listening
    await dal.connect();
    console.log(`listening on http://localhost:${currentPort}`);
});