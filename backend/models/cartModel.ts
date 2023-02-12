import {Document, model, Schema} from 'mongoose';
import { ClientModel } from './clientModel';

export interface ICartModel extends Document{
    clientId:Schema.Types.ObjectId;
    created:Date;
}

const CartSchema=new Schema<ICartModel>({
    created: {
        type:Date,
        required: [true, "Missing date"],
        toDateString: [true]
    },
    
    clientId:{
        type:Schema.Types.ObjectId,
    }
},{
    versionKey:false,
    toJSON:{virtuals:true} //when converting db to json -allow to bring virtual fields...
});

CartSchema.virtual("client",{
    ref:ClientModel, //which model you are describing and connect
    localField:"clientId", //which filed in our model is it
    foreignField:"id_num", //which filed in category model is it
    justOne:true, //categoty is a single object and not array
    
})

export const CartModel=model<ICartModel>("CartModel", CartSchema, "carts");