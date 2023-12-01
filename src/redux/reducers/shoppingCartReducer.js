import { INCREMENT, DECREMENT, ADDTOCART, QTYINCREMENT, QTYDECREMENT } from "../actions/shoppingCartActions";

const initialState = {
    shoppingCartCount: 0,
    cartItems: []
}

const shoppingCartReduer = (state = initialState, action) => {
    console.log('action: ', action)
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                shoppingCartCount: state.shoppingCartCount + 1
            }
        case ADDTOCART:
            const cartItemsList = [...state.cartItems];
            const existingItemIndex = cartItemsList.findIndex(item => item.id === action.cartItems.id);

            if (existingItemIndex !== -1) {
                cartItemsList[existingItemIndex] = {
                    ...cartItemsList[existingItemIndex],
                    qty: cartItemsList[existingItemIndex].qty + 1
                }
            } else {
                //Item doesn't exist
                action.cartItems.qty = 1;
                cartItemsList.push(action.cartItems);
            }

            return {
                ...state,
                cartItems: cartItemsList
            }
        case QTYINCREMENT:
            const cartItems = [...state.cartItems];
            const existItemIndex = cartItems.findIndex(item => item.id === action.product.id);

            if (existItemIndex !== -1) {
                cartItems[existItemIndex] = {
                    ...cartItems[existItemIndex],
                    qty: cartItems[existItemIndex].qty + 1
                }
            }

            return {
                ...state,
                cartItems
            }
        case QTYDECREMENT:
            const decCartItems = [...state.cartItems];
            const decExistItemIndex = decCartItems.findIndex(item => item.id === action.product.id);

            if (decExistItemIndex !== -1) {
                decCartItems[decExistItemIndex] = {
                    ...decCartItems[decExistItemIndex],
                    qty: decCartItems[decExistItemIndex].qty - 1
                }
            }

            return {
                ...state,
                cartItems: decCartItems
            }
        default:
            return state
    }
}

export { shoppingCartReduer }