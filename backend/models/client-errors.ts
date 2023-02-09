// base ClientError class
export class ClientError { 
    public status: number;
    public message: string;

    public constructor(status: number, message: string) {
        this.status = status;
        this.message = message;
    }
}
// "Child" ClientError class
export class RouteNotFoundError extends ClientError {
    
    public constructor(route: string) {
        
        super(404, ` route ${route} not found`);
    
    }
}

export class ResourceNotFoundError extends ClientError {
    public constructor(_id: string) {
        super(404, `_id ${_id} not found`);
    }
}

export class ValidationError extends ClientError {
    public constructor(error: string) {
        super(400, error);
    }
}