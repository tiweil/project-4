import {Document, model, Schema} from 'mongoose';
import { CartModel } from './cartModel';
import { ClientModel } from './clientModel';

//1. Interface
export interface IOrderCart extends Document {
    clientId: Schema.Types.ObjectId;
    cartId: Schema.Types.ObjectId;
    sum: number;
    city: string;
    address: string;
    arrival_date: Date;
    order_date: Date;
    last_fourCC: number;
}

//2. schema
const OrderSchema = new Schema<IOrderCart>({
    clientId: {
        type:Schema.Types.ObjectId,
        required: [true, "Missing Client"],
    },
    cartId: {
        type:Number,
        required: [true, "Missing Cart Number"],
    },
    sum: {
        type:Number,
    },
    city: {
        type: String,
        required: [true, "Missing city"],
        minlength: [5, "First name is too short"],
        maxlength: [40, "First name is too long"],
        trim: true
    },
    address: {
        type: String,
        required: [true, "Missing address"],
        minlength: [5, "Last name is too short"],
        maxlength: [40, "Last name is too long"],
        trim: true
    },
    arrival_date: {
        type: Date,
    },
    order_date: {
        type: Date,
    },
    last_fourCC: {
        type: Number,
        required: [true, "Missing credit card 4 last numbers"],
        minlength: [4, "please enter 4 numbers of your credit card"],
        maxlength: [40, "please enter only the last 4 numbers of your credit card"],
        trim: true
    },
    },{
        versionKey:false,
        toJSON:{virtuals:true} //when converting db to json -allow to bring virtual fields...
    });

//join product id
OrderSchema.virtual("product", {
    ref: ClientModel,
    localField: "clientId",
    foreignField: "_id",
})
//join product id
OrderSchema.virtual("cart", {
    ref: CartModel,
    localField: "cardId",
    foreignField: "_id",
})
//3. model
export const OrderModel=model<IOrderCart>("OrderModel", OrderSchema, "orders");
