class AppConfig {
    //clients
    public loginUrl = "http://localhost:3004/client/login";
    public registerUrl = "http://localhost:3004/client/register";
    //products
    public productsUrl = "http://localhost:3004/product/all";
    public deleteProductUrl = "http://localhost:3004/product/del/";
    //carts
    public addCartUrl = "http://localhost:3004/cart/add";
    //items
    public addItemUrl = "http://localhost:3004/item/add";
    public itemsByCart = "http://localhost:3004/items/all/";
}

export const appConfig = new AppConfig();