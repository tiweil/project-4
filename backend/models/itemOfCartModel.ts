import {Document, model, Schema} from 'mongoose';
import { CartModel } from './cartModel';
import { ProductModel } from './productModel';

//1. Interface
export interface I_ItemToCart extends Document {
    productId: Schema.Types.ObjectId;
    qty: number;
    total_Price: number;
    cardId: Schema.Types.ObjectId;
}

//2. schema
const ItemSchema = new Schema<I_ItemToCart>({
    productId: {
        type:Schema.Types.ObjectId,
        required: [true, "Missing Name"],
    },
    qty: {
        type:Number,
        required: [true, "Missing quantity"],
        min: [0, "quantity can't be negative"],
        max: [1000, "quantity is limited"],
    },
    total_Price: {
        type:Number,
    },
    cardId: {
        type:Schema.Types.ObjectId,
    }
    },{
        versionKey:false,
        toJSON:{virtuals:true} //when converting db to json -allow to bring virtual fields...
    });

//join product id
ItemSchema.virtual("product", {
    ref: ProductModel,
    localField: "productId",
    foreignField: "_id",
})
//join product id
ItemSchema.virtual("cart", {
    ref: CartModel,
    localField: "cardId",
    foreignField: "_id",
})
//3. model
export const ItemToCartModel=model<I_ItemToCart>("ItemToCartModel", ItemSchema, "items");
