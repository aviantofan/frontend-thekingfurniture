const dataProductSeller = {
    data: [],
    errorMsg: '',
    errMsg: '',
}

const productSeller = (state = dataProductSeller, action) => {
    switch (action.type) {        
        case 'GET_PRODUCT_SELLER': {
            const data = action.payload
            state.data = data
            if(!Array.isArray(data)){
                state.data = [data]
            }
            return {...state }
        }
        case 'DELETE_PRODUCT_SELLER': {
            const data = action.payload
            state.data = data
            return {...state }
        }
        case 'ADD_PRODUCT_SELLER': {
            const data = action.payload
            state.data = data
            state.error = true
            state.errorMsg = data.error
            state.errMsg = data.message
            return {...state }
        }
        default: {
            return {...state }
        }
    }
}

export default productSeller