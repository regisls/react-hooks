import { LoginReducer } from "./LoginReducer"
import { NumberReducer } from "./NumberReducer"

export function reducer(state, action) {
    let modifiedState = NumberReducer(state, action);
    return LoginReducer(modifiedState, action);
};