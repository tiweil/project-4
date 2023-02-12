import { CategoryModel, ICategoryModel } from "../models/categoryModel";
import { ResourceNotFoundError } from "../models/client-errors";
import { ItemToCartModel, I_ItemToCart } from "../models/itemToCartModel";

//Get all products
function getItemsByCart(): Promise<I_ItemToCart[]>{
//find describing the action needed, exec returning promise with virtual fields
return ItemToCartModel.find().populate("product").populate("cart").exec();
}

//deleteCategory
async function deleteItem(_id: string): Promise<void>{
    const deleteItem = await ItemToCartModel.findByIdAndDelete(_id).exec();
    if(!deleteItem) throw new ResourceNotFoundError(_id);
    }

//Add new item to cart
function addItem(item: I_ItemToCart): Promise<I_ItemToCart>{
    return item.save();
    }

//Update item
  const updateItem= async(item: I_ItemToCart): Promise<I_ItemToCart>=>{
    const updateItem = await ItemToCartModel.findByIdAndUpdate(item._id, item, 
        //returnOriginal= will return database object and not argument object
        {returnOriginal: false }).exec();
        //if not fount
        if(!updateItem) throw new ResourceNotFoundError(item._id);
    return updateItem;
    }


    export default {
        getItemsByCart,
        addItem,
        updateItem,
        deleteItem,
    }