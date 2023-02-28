class AppConfig {
    public productsUrl = "http://localhost:3004/product/all";
    public loginUrl = "http://localhost:3004/client/login";
    public registerUrl = "http://localhost:3004/client/register";
    public deleteProductUrl = "http://localhost:3004/product/del/";
}

export const appConfig = new AppConfig();