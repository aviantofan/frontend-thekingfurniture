const initialState = {
    data: [],
  }
  
  const paymentMethod = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_PAYMENT_METHOD': {
        const data = action.payload
        state.data = data
        return { ...state }
      }
      default: {
        return { ...state }
      }
    }
  }
  
  export default paymentMethod