import * as types from '../constants/ActionTypes';
const InitialState = []
const tasks = (state = InitialState, action) => {
    const {product} = action;
    switch (action.type) {
        case types.ADD_TO_CART:
            console.log(action)
            let index = -1;
            index = findIndex(state, product)
            console.log(index)
            if (index === -1) {
                state.push(action)
            }
            else {
                state[index].quantity += 1
            }
            return [...state]
        case types.INCREASE_PRODUCT:
            console.log(action)
            state.forEach(element => {
                if (element.product.id === action.product.id) {
                    element.quantity += 1;
                    return state
                }
            });
            return [...state]
        case types.DECREASE_PRODUCT:
            // console.log(action)
            state.forEach(element => {
                if (element.product.id === action.product.id) {
                    element.quantity -= 1;
                    return state
                }
            });
            return [...state]
        case types.DELETE_PRODUCT:
            // console.log(action)
            let newState = state.filter(element => element.product.id !== action.product.id);
            state = newState
            return state
        default:
            return state
    }
}
let findIndex = (state, product) => {
    let index = -1
    for (let i = 0; i < state.length; i++) {
        if (state[i].product.id === product.id) {
            return  index = i;
        }
    }
    return index;
}
export default tasks;