import {Document, model, Schema} from 'mongoose';
//interface
export interface ICategoryModel extends Document{
    name:string;
}
//schema
const CategorySchema=new Schema<ICategoryModel>({
    name: {
        type:String,
        required: [true, "Missing Category"],
        minlength: [2, "Category name is too short"],
        maxlength: [40, "Category name is too long"],
        trim: true,
        unique: true
    }
},{
        versionKey:false //don't create _v filed for versioning
    
    
});
//model
export const CategoryModel = model<ICategoryModel>("CategoryModel", CategorySchema, "categories");
