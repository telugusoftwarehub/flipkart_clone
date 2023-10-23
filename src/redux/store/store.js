import { createStore } from "redux";
import { shoppingCartReduer } from "../reducers/shoppingCartReducer";

const appStore = createStore(shoppingCartReduer);

export default appStore