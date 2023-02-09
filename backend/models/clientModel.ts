import {Document, model, Schema} from 'mongoose';

export interface IClientModel extends Document{
    first_name: string;
    last_name: string;
    email: string;
    id_num: number;
    password: string;
    city: string;
    address: string;
}

const ClientSchema=new Schema<IClientModel>({
    first_name: {
        type:String,
        required: [true, "Missing first name"],
        minlength: [2, "First name is too short"],
        maxlength: [40, "First name is too long"],
        trim: true
    },
    last_name:{
        type:String,
        required: [true, "Missing last name"],
        minlength: [2, "Last name is too short"],
        maxlength: [40, "Last name is too long"],
        trim: true
    },
    email:{
        type: String,
        required: [true, "Missing email"],
        minlength: [5, "Email is too short"],
        maxlength: [40, "Email is too long"],
        trim: true,
        unique: true
    },
    id_num: {
        type: Number,
        required: [true, "Missing id"],
        minlength: [6, "Id is too short"],
        maxlength: [10, "Id  is too long"],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "Missing password"],
        minlength: [8, "Password is too short, should contain at lest 8 chars"],
        maxlength: [25, "Password  is too long"],
        trim: true,
        // lowercase: [true,"PAssword should contains lowercase"],
        // uppercase:[true,""],
        //unique: true
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
    }
});

export const ClientModel=model<IClientModel>("ClientModel", ClientSchema, "clients");
