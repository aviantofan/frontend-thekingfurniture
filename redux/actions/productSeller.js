import http from '../../helpers/http'

export const getProductSeller = (seller_id) => {
    return async (dispatch) => {
        try {
            dispatch({type: 'TOGGLE_LOADING'})
            const {data} = await http().get(`/product/seller/${seller_id}`)
            dispatch({type: 'GET_PRODUCT_SELLER', payload: data.result})
            dispatch({type: 'TOGGLE_LOADING'})
        } catch (e){
            console.log(e)
        }
    }
}

export const deleteProductSeller = async (dispatch, id) => {
    // return async (dispatch) => {
        try {
            const token = window.localStorage.getItem('token')
            dispatch({type: 'TOGGLE_LOADING'})
            const {data} = await http(token).patch(`/product/delete/${id}`)
            dispatch({type: 'DELETE_PRODUCT_SELLER', payload: data.result})
            dispatch({type: 'TOGGLE_LOADING'})
        } catch (e){
            console.log(e)
        }
    // }
}

export const createProductSeller = (data) => {
    return async (dispatch) => {
      try {
        dispatch({type: 'TOGGLE_LOADING'})
        const token = window.localStorage.getItem('token')
        const params = new FormData()
        params.append('name', data.name)
        params.append('description', data.description)
        params.append('stock', data.stock)
        params.append('price', data.price)
        params.append('condition', data.condition)
        params.append('id_seller', data.id_seller)
        params.append('id_category', data.id_category)
        params.append('image', data.image)      
        const { data: datas } = await http(token, true).post('/product', params)
        dispatch({
            type: 'ADD_PRODUCT_SELLER',
            payload: datas.result
        })
        dispatch({type: 'TOGGLE_LOADING'})
        } catch (e) {
            dispatch({
                type: 'AUTH_ERR',
                payload: e.response.data.message
            })
        }
      }
}