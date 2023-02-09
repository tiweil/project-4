import express, {Request, Response, NextFunction} from "express";
import clientLogic from "../logic/clientLogic";
import { ClientModel } from "../models/clientModel";

const router_client = express.Router();

//get all clients
router_client.get("/all",  async (request: Request, response: Response, next: NextFunction) => {
    try{
        const client = await clientLogic.getAllClients();
        response.json(client);
    }
    catch(err:any){
        next(err);
    }
});

//get one client
router_client.get("/:_id",  async (request: Request, response: Response, next: NextFunction) => {
    try{
        const _id = request.params._id;
        const client = await clientLogic.getOneClient(_id);
        response.json(client);
    }
    catch(err:any){
        next(err);
    }
});
//add new client
router_client.post("/new",  async (request: Request, response: Response, next: NextFunction) => {
    try{
        // request.body.image = request.files?.image;
        const client = new ClientModel(request.body);
        const addProduct = await clientLogic.addClient(client);
        response.json(addProduct);
    }
    catch(err:any){
        next(err);
    }
});
//update client
router_client.put("/:_id",  async (request: Request, response: Response, next: NextFunction) => {
    try{
        request.body._id = request.params._id;
         // request.body.image = request.files?.image;
        const updateClient = await clientLogic.updateClient(request.body);
        response.json(updateClient);
    }
    catch(err:any){
        next(err);
    }
});

//delete client
router_client.delete("/:_id",  async (request: Request, response: Response, next: NextFunction) => {
    try{
        const _id = request.params._id;
        await clientLogic.deleteClient(_id);
        response.sendStatus(204);
    }
    catch(err:any){
        next(err);
    }
});

export default router_client;