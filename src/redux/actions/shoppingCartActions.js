const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADDTOCART = "ADDTOCART";

const incrementCount = () => ({
    type: INCREMENT
})

const decrementCount = () => ({
    type: DECREMENT
})

const shoppingCartCountIncrement = () => {
    return {
        type: INCREMENT
    }
}

const addToCartItem = (product) => {
    return {
        type: ADDTOCART,
        cartItems: product
    }
}

export {
    INCREMENT,
    DECREMENT,
    ADDTOCART,
    incrementCount,
    decrementCount,
    shoppingCartCountIncrement,
    addToCartItem
}