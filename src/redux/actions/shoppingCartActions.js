const INCREMENT = "INCREMENT";
const QTYINCREMENT = "QTYINCREMENT";
const DECREMENT = "DECREMENT";
const QTYDECREMENT = "QTYDECREMENT";
const ADDTOCART = "ADDTOCART";

const incrementCount = () => ({
    type: INCREMENT
})

const decrementCount = () => ({
    type: DECREMENT
})

const qtyIncrementCount = (product) => ({
    type: QTYINCREMENT,
    product
})

const qtyDecrementCount = (product) => ({
    type: QTYDECREMENT,
    product
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
    QTYINCREMENT,
    QTYDECREMENT,
    incrementCount,
    decrementCount,
    shoppingCartCountIncrement,
    addToCartItem,
    qtyIncrementCount,
    qtyDecrementCount
}