import http from '../../helpers/http'
import qs from 'qs'

export const getProduct = async (dispatch, page=1) => {
    try {
        dispatch({type: 'TOGGLE_LOADING'})
        const {data} = await http().get(`/product?page=${page}`)
        dispatch({type: 'GET_PRODUCT', payload: data})
        dispatch({type: 'TOGGLE_LOADING'})
    } catch (e){
        console.log(e)
    }
}

export const deleteProduct = (token, id) => {
    return async (dispatch) => {
        try {
            dispatch({type: 'TOGGLE_LOADING'})
            const {data} = await http(token).patch(`/product/delete/${id}`)
            dispatch({type: 'DELETE_PRODUCT', payload: data.result})
            dispatch({type: 'TOGGLE_LOADING'})
        } catch (e){
            console.log(e)
        }
    }
}

export const getProductSearch = (qs) => {
    return async (dispatch) => {
        try {
            dispatch({type: 'TOGGLE_LOADING'})
            const {data: requestData} = await http().get(`/product?${qs}`)
            dispatch({type: 'GET_PRODUCT', payload: requestData.result})
            dispatch({type: 'TOGGLE_LOADING'})
        } catch (e) {
            console.log(e)
        }
    }
}