import cors from "cors";
import express from "express";
import config from "./utils/config";
import dal from "./utils/dal";
import product_router from './routers/product.routes';
import category_router from './routers/category.routes';
import item_router from './routers/item.routes';
import client_router from './routers/client.routes';
import cart_router from './routers/cart.routes';

const server = express();

server.use(cors());
server.use(express.json());

//routes
server.use("/product", product_router);
server.use("/category", category_router);
server.use("/items", item_router);
server.use("/client", client_router);
server.use("/cart", cart_router);

const currentPort = config.port;
server.listen(currentPort, async () => {
    //connect to mongo than show he is in the air=listening
    await dal.connect();
    console.log(`listening on http://localhost:${currentPort}`);
});