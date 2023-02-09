import {Document, model, Schema} from 'mongoose';
import { CategoryModel } from './categoryModel';
//1. Interface describing the model
export interface IProductModel extends Document{
    name:string;
    categoryId:Schema.Types.ObjectId;
    price:number;
    image:string;
    
}
//2.Schema build from interface containing regarding the model
const ProductSchema=new Schema<IProductModel>({
    name: {
        type:String,
        required: [true, "Missing name"],
        minlength: [2, "Name is too short"],
        maxlength: [40, "Name is too long"],
        trim: true,
        unique: true
    },
    price:{
        type:Number,
        required: [true, "Missing price"],
        min: [0, "Price can't be negative"],
        max: [1000, "Price seems too expensive"],
    },
    image:{
        type:String,
        required: [true, "Missing image"],
        // minlength: [5, "Email is too short"],
        // maxlength: [40, "Email is too long"],
        // trim: true,
    },
    categoryId:{
        type:Schema.Types.ObjectId,
    }
},{
    versionKey:false,
    toJSON:{virtuals:true} //when converting db to json -allow to bring virtual fields...
});

ProductSchema.virtual("categories",{
    ref:CategoryModel, //which model you are describing and connect
    localField:"categoryId", //which filed in our model is it
    foreignField:"_id", //which filed in category model is it
    justOne:true, //category is a single object and not array
    
})
//3.Model from the above interface and schema 
//send "model name"(type string), schema name, db collection name"
export const ProductModel=model<IProductModel>("ProductModel", ProductSchema, "products");

//For specifying types in functions we use the interface
//for preforming operations with the model we use the model class