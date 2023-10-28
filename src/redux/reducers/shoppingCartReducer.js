import { INCREMENT, DECREMENT, ADDTOCART } from "../actions/shoppingCartActions";

const initialState = {
    shoppingCartCount: 0,
    cartItems: []
}

const shoppingCartReduer = (state = initialState, action) => {
    console.log('action: ', action)
    switch (action.type) {
        case INCREMENT:
            console.log('99: ', state);

            return {
                ...state,
                shoppingCartCount: state.shoppingCartCount + 1
            }
        case ADDTOCART:
            const cartItemsList = state.cartItems
            cartItemsList.push(action.cartItems);
            
            return {
                ...state,
                cartItems: cartItemsList
            }
        default:
            return state
    }
}

export { shoppingCartReduer }