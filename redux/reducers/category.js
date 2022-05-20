const dataCategory = {
    data: [],
}

const category = (state = dataCategory, action) => {
    switch (action.type) {        
        case 'GET_CATEGORY': {
            const data = action.payload
            state.data = data
            if(!Array.isArray(data)){
                state.data = [data]
            }
            return {...state }
        }
        case 'GET_CATEGORY_TOTAL': {
            const data = action.payload
            state.data = data
            if(!Array.isArray(data)){
                state.data = [data]
            }
            return {...state }
        }
        default: {
            return {...state }
        }
    }
}

export default category