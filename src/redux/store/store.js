import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { shoppingCartReduer } from "../reducers/shoppingCartReducer";

const appStore = createStore(shoppingCartReduer, applyMiddleware(thunk));

export default appStore