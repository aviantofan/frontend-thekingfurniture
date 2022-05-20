import http from '../../helpers/http'

export const getTransactionUser = (token) => {
    return async (dispatch) => {
        try {
            dispatch({type: 'TOGGLE_LOADING'})
            const {data} = await http(token).get('/transaction/user')
            dispatch({type: 'GET_TRANSACTION_USER', payload: data.result})
            dispatch({type: 'TOGGLE_LOADING'})
        } catch (e){
            console.log(e)
        }
    }
}