const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const incrementCount = () => ({
    type: INCREMENT
})

const decrementCount = () => ({
    type: DECREMENT
})

export {
    INCREMENT,
    DECREMENT,
    incrementCount,
    decrementCount
}