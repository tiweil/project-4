import express, { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import CartModel from "../models/cartModel";
import ItemModel from "../models/itemModel";

//add cart
const addCart = async(request: Request, response: Response, next: NextFunction) => {
    const cart = request.body;
    const newCart = new CartModel({
        _id:new mongoose.Types.ObjectId(),
        ...cart,
    });
    return newCart
    .save()
    .then((cart)=> response.status(201).json(cart))
    .catch((err)=> next(err));
}

//get all items by cart
const getItemsByCart = async (request: Request, response: Response, next: NextFunction) => {
    const cart_id = request.params.cart; 
    return ItemModel.findOne({cart_id:"_id"})
    .populate(['productId','cartId'])
    .then((items) => {
        items ? response.status(200).json(items):response.status(200).json({message:"not found"})
    })
    .catch((err)=> next(err));
}
//add item
const addItem= async (request: Request, response: Response, next: NextFunction) => {
    const item =request.body;
    const newItem = new ItemModel({
        _id:new mongoose.Types.ObjectId(),
        ...item,
    });
    return newItem
    .save()
    .then((item)=> response.status(201).json(item))
    .catch((err)=> next(err));
}


// update item
const updateItem=async (request: Request, response: Response, next: NextFunction) => {
    const id = request.params.id;
    return ItemModel.findById(id)
    .then((item)=>{
    if(item){
        item.set(request.body);
        return item
        .save()
        .then((item)=> response.status(201).json(item))
        .catch((err)=> next(err));
    }else{
        response.status(404).json({message: "not found"})
    }
})
    .catch((err)=> next(err));
}

// delete item 
const deleteItem= async (request: Request, response: Response, next: NextFunction) => {
    const id = request.params.id;
    return ItemModel.findByIdAndDelete(id)
    .then((item)=>
    (item?response.status(201).json({message:"deleted"}):response.status(404).json({message:`${item} not found`})))
    .catch((err)=> next(err));
}

export default{
    addCart,
    getItemsByCart,
    addItem, 
    updateItem,
    deleteItem
}