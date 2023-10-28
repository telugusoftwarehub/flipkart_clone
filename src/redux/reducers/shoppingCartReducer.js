import { INCREMENT, DECREMENT } from "../actions/shoppingCartActions";

const initialState = {
    shoppingCartCount: 0
}

const shoppingCartReduer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...initialState,
                shoppingCartCount: state.shoppingCartCount + 1
            }
        default:
            return state
    }
}

export { shoppingCartReduer }