import express, { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import clientModel from "../models/clientModel";

// get all client 
const getAllClients = async (request: Request, response: Response, next: NextFunction) => {
    return clientModel.find()
    .then((clients)=>response.status(200).json(clients))
    .catch((err)=> next(err));
}
//add client
const addClient = async (request: Request, response: Response, next: NextFunction) => {
    const client = request.body;
    const newClient = new clientModel({
        _id:new mongoose.Types.ObjectId(),
        ...client,
    });
    return newClient
    .save()
    .then((client)=> response.status(201).json(client))
    .catch((err)=> next(err));
}
//get client by id num
const getClientById_num = async (request: Request, response: Response, next: NextFunction) => {
    const id = request.params.id;
    console.log(id);
    return clientModel.findOne({id:'id_num'})
    .then((client)=>{ console.log(client);
        client?response.status(200).json(client):response.status(200).json({message:"not found"})
    })
    .catch((err)=> next(err));
}
// get client by name
const getClientByName=async (request: Request, response: Response, next: NextFunction) => {
    const name = request.params.name;
    return clientModel.findOne({name:"first_name"})
    .then((client)=>{
        client?response.status(200).json(client):response.status(200).json({message:"not found"})
    })
    .catch((err)=> next(err));
}

const updateClient = async (request: Request, response: Response, next: NextFunction) => {
    const id = request.params._id;
    return clientModel.findById(id)
    .then((client) => {
        if(client){
            client.set(request.body);
            return client
            .save()
            .then((client) => response.status(201).json(client))
            .catch((err) => next(err))
        }
        else
        {
            response.status(404).json({message:"not found"});
        }
    })
    .catch((err) => next(err));
}

const deleteClient = async (request: Request, response: Response, next: NextFunction) => {
        const id = request.params.id;
        return clientModel.findByIdAndDelete(id)
        .then((client)=>
        (client?response.status(201).json({message:"deleted"}):response.status(404).json({message:"not found"})))
        .catch((err)=> next(err));
}


export default {
    getAllClients,
    addClient, 
    getClientById_num,
    getClientByName, 
    updateClient, 
    deleteClient
}