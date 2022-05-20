const dataTransactionUser = {
    data: []
}

const transactionUser = (state = dataTransactionUser, action) => {
    switch (action.type) {        
        case 'GET_TRANSACTION_USER': {
            const data = action.payload
            state.data = data
            return {...state }
        }
        case 'DELETE_TRANSACTION_USER': {
            const data = action.payload
            state.data = data
            return {...state }
        }
        default: {
            return {...state }
        }
    }
}

export default transactionUser