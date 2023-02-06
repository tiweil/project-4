import {Document, model, Schema} from 'mongoose';
import { CategoryModel } from './categoryModel';

export interface IProductModel extends Document{
    name:string;
    categoryId:Schema.Types.ObjectId;
    price:number;
    image:string;
    
}

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
    justOne:true, //categoty is a single object and not array
    
})
//the brackets is for the schema??
export const ProductModel=model<IProductModel>("ProductModel", ProductSchema, "products");
