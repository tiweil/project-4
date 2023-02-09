import { ResourceNotFoundError } from "../models/client-errors";
import { ClientModel, IClientModel } from "../models/clientModel";

//Get all clients
function getAllClients(): Promise<IClientModel[]>{
//find describing the action needed, exec returning promise 
return ClientModel.find().exec();
}

//Get one client
async function getOneClient(_id: string): Promise<IClientModel>{
    const client = await ClientModel.findById(_id).exec();
    if(!client) throw new ResourceNotFoundError(_id);
    return client;
    }

//Add new client
function addClient(client: IClientModel): Promise<IClientModel>{
    return client.save();
    }

//Update client
async function updateClient(client: IClientModel): Promise<IClientModel>{
    const updateClient = await ClientModel.findByIdAndUpdate(client._id, client, 
        //returnOriginal= will return database object and not argument object
        {returnOriginal: false }).exec();
        //if not fount
        if(!updateClient) throw new ResourceNotFoundError(client._id);
    return updateClient;
    }

//delete client
async function deleteClient(_id: string): Promise<void>{
    const deleteClient = await ClientModel.findByIdAndDelete(_id).exec();
    if(!deleteClient) throw new ResourceNotFoundError(_id);
    }

    export default {
        getAllClients,
        getOneClient,
        addClient,
        updateClient,
        deleteClient
    }