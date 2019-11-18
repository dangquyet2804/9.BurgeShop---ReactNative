import * as types from '../constants/ActionTypes';
export const addToCart = (product, quantity) => {
    return {
        type: types.ADD_TO_CART,
        product,
        quantity
    }
}
export const increaseProduct = (product) => {
    return {
        type: types.INCREASE_PRODUCT,
        product
    }
}
export const decreaseProduct = (product) => {
    return {
        type: types.DECREASE_PRODUCT,
        product
    }
}
export const deleteProduct = (product) => {
    return {
        type: types.DELETE_PRODUCT,
        product
    }
}