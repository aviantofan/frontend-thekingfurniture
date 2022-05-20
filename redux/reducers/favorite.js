const initialState = {
  data: [],
}

const favorite = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE': {
      const data = action.payload
      state.data = data
      return { ...state }
    }
    case 'REMOVE_FAVORITE': {
      const data = action.payload
      state.data = data
      return { ...state }
    }
    case 'CHECK_FAVORITE': {
      const data = action.payload
      state.data = data
      return { ...state }
    }
    case 'GET_FAVORITE': {
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

export default favorite