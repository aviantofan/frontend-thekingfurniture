import http from "../../helpers/http"
import qs from 'qs'

export const addToCart = async (dispatch, token, dataCart) => {
    // return async (dispatch) => {
        console.log(dataCart)
        try {
            dispatch({type: 'TOGGLE_LOADING'})
            console.log(dataCart)
            const { data } = await http(token).post('/transaction', qs.stringify(dataCart))
            console.log(data)
            dispatch({type: 'ADD_CART', payload: data.result})
            dispatch({type: 'TOGGLE_LOADING'})
        } catch (e){
            console.log(e)
        }
    // }
}

export const getCart = async (dispatch) => {
    try {
        dispatch({type: 'TOGGLE_LOADING'})
        const token = window.localStorage.getItem('token')
        const {data} = await http(token).get('/transaction/cart')
        dispatch({type: 'GET_CART', payload: data.result})
        dispatch({type: 'TOGGLE_LOADING'})
    } catch (e){
        console.log(e)
    }
}

export const deleteCart = async(dispatch, id) => {
    try {
        dispatch({type: 'TOGGLE_LOADING'})
        const token = window.localStorage.getItem('token')
        const {data} = await http(token).patch(`/transaction/delete/${id}`)
        dispatch({type: 'REMOVE_CART', payload: data.result})
        dispatch({type: 'TOGGLE_LOADING'})
    }
    catch (e) {
        console.log(e)
    }
}

export const checkoutCart = async(dispatch, id, dataCart) => {
    try {
        dispatch({type: 'TOGGLE_LOADING'})
        const token = window.localStorage.getItem('token')
        const { data } = await http(token).patch(`/transaction/${id}`, qs.stringify(dataCart))
        dispatch({type: 'CHECKOUT_CART', payload: data.result})
        dispatch({type: 'TOGGLE_LOADING'})
    } catch (e) {
        console.log(e)
    }
}