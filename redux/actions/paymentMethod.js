import http from "../../helpers/http"

export const getPaymentMethod = async (dispatch) => {
    try {
        dispatch({type: 'TOGGLE_LOADING'})
        const {data} = await http().get('/payment-method')
        dispatch({type: 'GET_PAYMENT_METHOD', payload: data.result})
        dispatch({type: 'TOGGLE_LOADING'})
    } catch (e){
        // console.log(e)
    }
}