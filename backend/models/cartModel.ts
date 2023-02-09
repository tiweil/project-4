import {Document, model, Schema} from 'mongoose';
import { ClientModel } from './clientModel';

export interface ICartModel extends Document{
    client_id:Schema.Types.ObjectId;
    created:Date;
}

const CartSchema=new Schema<ICartModel>({
    created: {
        type:Date,
        required: [true, "Missing date"],
        toDateString: [true]
    },
    
    client_id:{
        type:Schema.Types.ObjectId,
    }
},{
    versionKey:false,
    toJSON:{virtuals:true} //when converting db to json -allow to bring virtual fields...
});

CartSchema.virtual("clients",{
    ref:ClientModel, //which model you are describing and connect
    localField:"client_id", //which filed in our model is it
    foreignField:"id_num", //which filed in category model is it
    justOne:true, //categoty is a single object and not array
    
})
//the brackets is for the schema??
export const CartModel=model<ICartModel>("CartModel", CartSchema, "carts");