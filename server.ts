import cors from "cors";
import express from "express";
import config from "./utils/config";

const mongoose = require('mongoose');
const server = express();

//method connect to DB
mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@project4.2mo5cer.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
// //check if we connected to mongo
mongoose.connection.on('connected', ()=>{
    console.log('MongoDB Connected!');
})
server.use(cors());
server.use(express.json());

const currentPort = config.port;
server.listen(currentPort, () => {
    console.log(`listening on http://localhost:${currentPort}`);
});