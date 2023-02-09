import express, {Request, Response, NextFunction} from "express";
import productLogic from "../logic/productLogic";
import { IProductModel, ProductModel } from "../models/productModel"

const router_product = express.Router();

//get all category
router_product.get("/cat",  async (request: Request, response: Response, next: NextFunction) => {
    try{
        const categories = await productLogic.getAllcategory();
        response.json(categories);
    }
    catch(err:any){
        next(err);
    }
});

//delete category
router_product.get("/cat/:_id",  async (request: Request, response: Response, next: NextFunction) => {
    try{
        const _id = request.params._id;
        await productLogic.deleteCategory(_id);
        response.sendStatus(204);
    }
    catch(err:any){
        next(err);
    }
});
//get all products
router_product.get("/all",  async (request: Request, response: Response, next: NextFunction) => {
    try{
        const products = await productLogic.getAllProducts();
        response.json(products);
    }
    catch(err:any){
        next(err);
    }
});

//get one product
router_product.get("/:_id",  async (request: Request, response: Response, next: NextFunction) => {
    try{
        const _id = request.params._id;
        const products = await productLogic.getOneProduct(_id);
        response.json(products);
    }
    catch(err:any){
        next(err);
    }
});
//add new product
router_product.post("/new",  async (request: Request, response: Response, next: NextFunction) => {
    try{
        // request.body.image = request.files?.image;
        const product = new ProductModel(request.body);
        const addProduct = await productLogic.addProduct(product);
        response.json(addProduct);
    }
    catch(err:any){
        next(err);
    }
});
//update product
router_product.put("/:_id",  async (request: Request, response: Response, next: NextFunction) => {
    try{
        request.body._id = request.params._id;
         // request.body.image = request.files?.image;
        const updateProduct = await productLogic.updateProduct(request.body);
        response.json(updateProduct);
    }
    catch(err:any){
        next(err);
    }
});

export default router_product;