const initialState = {
  data: [],
}

const wishlist = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_WISHLIST': {
      const data = action.payload
      state.data = data
      return { ...state }
    }
    case 'REMOVE_WISHLIST': {
      const data = action.payload
      state.data = data
      return { ...state }
    }
    case 'CHECK_WISHLIST': {
      const data = action.payload
      state.data = data
      return { ...state }
    }
    case 'GET_WISHLIST': {
      const data = action.payload
      state.data = data
      if (!Array.isArray(data)) {
        state.data = [data]
      }
      return { ...state }
    }
    default: {
      return { ...state }
    }
  }
}

export default wishlist