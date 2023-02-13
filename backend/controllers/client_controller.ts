import express, { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import clientModel from "../models/clientModel";

const getAllClients = async (request: Request, response: Response, next: NextFunction) => {
    return clientModel.find()
    .then((clients)=>response.status(200).json(clients))
    .catch((err)=> next(err));
}

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

const getClientByTz = async (request: Request, response: Response, next: NextFunction) => {}

const getClientByName = async (request: Request, response: Response, next: NextFunction) => {}

const updateClient = async (request: Request, response: Response, next: NextFunction) => {}

const deleteClient = async (request: Request, response: Response, next: NextFunction) => {}

export default {
    getAllClients,
    addClient, 
    getClientByTz,
    getClientByName, 
    updateClient, 
    deleteClient
}