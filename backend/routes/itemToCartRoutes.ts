import express, {Request, Response, NextFunction} from "express";
import itemToCartLogic from "../logic/itemToCartLogic";
import { ItemToCartModel } from "../models/itemToCartModel";

const router_itemToCart = express.Router();

//get all items by cart
router_itemToCart.get("/all",  async (request: Request, response: Response, next: NextFunction) => {
    try{
        const items = await itemToCartLogic.getItemsByCart();
        response.json(items);
    }
    catch(err:any){
        next(err);
    }
});

//delete item
router_itemToCart.get("/:_id",  async (request: Request, response: Response, next: NextFunction) => {
    try{
        const _id = request.params._id;
        await itemToCartLogic.deleteItem(_id);
        response.sendStatus(204);
    }
    catch(err:any){
        next(err);
    }
});

//add item to cart
router_itemToCart.post("/new",  async (request: Request, response: Response, next: NextFunction) => {
    try{
        const item = new ItemToCartModel(request.body);
        const addItem = await itemToCartLogic.addItem(item);
        response.json(addItem);
    }
    catch(err:any){
        next(err);
    }
});
//update item to cart
router_itemToCart.put("/:_id",  async (request: Request, response: Response, next: NextFunction) => {
    try{
        request.body._id = request.params._id;
        const updateItem = await itemToCartLogic.updateItem(request.body);
        response.json(updateItem);
    }
    catch(err:any){
        next(err);
    }
});


export default router_itemToCart;