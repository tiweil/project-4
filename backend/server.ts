import cors from "cors";
import express from "express";
import router_product from "./routes/productRoutes";
import config from "./utils/config";
import dal from "./utils/dal";

const server = express();


server.use(cors());
server.use(express.json());
server.use("/products", router_product);
const currentPort = config.port;
server.listen(currentPort, async () => {
    //connect to mongo than show he is in the air=listening
    await dal.connect();
    console.log(`listening on http://localhost:${currentPort}`);
});