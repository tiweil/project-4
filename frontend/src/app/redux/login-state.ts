import jwtDecode from "jwt-decode";
import { createStore } from "redux";
import { ClientModel } from "../models/client.model";

// 1. Global State
export class AuthState {
    public token: string = null;
    public user: ClientModel = null;
}

// 2. Action Type
export enum AuthActionType {
    Register = "Register",
    Login = "Login",
    Logout = "Logout"
}

// 3. Action
export interface AuthAction {
    type: AuthActionType;
    payload?: string; // the string is because we're getting a token, the ? is because logout sends nothing.
}

// 4. Reducer
export function clientReducer(currentState = new AuthState(), action: AuthAction): AuthState {

    const newState = { ...currentState };

    switch (action.type) {

        case AuthActionType.Register: // Here the payload is the token (string)
        case AuthActionType.Login:
            newState.token = action.payload;
            const userContainer = jwtDecode<{ user: ClientModel }>(newState.token);
            newState.user = userContainer.user;
            break;

        case AuthActionType.Logout:
            newState.token = null;
            newState.user = null;
            break;

    }

    return newState;
}

// 5. Store
export const clientStore = createStore(clientReducer);
