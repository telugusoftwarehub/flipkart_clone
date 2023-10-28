const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

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

export {
    INCREMENT,
    DECREMENT,
    incrementCount,
    decrementCount,
    shoppingCartCountIncrement
}