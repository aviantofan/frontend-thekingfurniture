const initialState = {
  userData: {},
  token: null,
  isErr: false,
  errorMsg: '',
  errMsg: '',
  successMsg: null,
  updateProfile: false
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_LOGIN': {
      const newState = {
        successMsg: action.payload.message,
        token: action.payload.token
      }
      window.localStorage.setItem('token', newState.token)
      return {
        ...state,
        ...newState
      }
    }
    case 'AUTH_LOGOUT': {
      state.token = null
      state.userData = {}
      window.localStorage.removeItem('token')
      state.successMsg= ''
      return { ...state }
  }
    case 'AUTH_REGISTER': {
      const newState = {
        successMsg: action.payload.message
      }
      return {
        ...state,
        ...newState
      }
    }
    case 'AUTH_FORGOT': {
      const newState = {
        successMsg: action.payload.message
      }
      return {
        ...state,
        ...newState
      }
    }
    case 'AUTH_CHANGE_PASSWORD': {
      const newState = {
        successMsg: action.payload.message
      }
      return {
        ...state,
        ...newState
      }
    }
    case 'GET_PROFILE': {
      const newState = {
        successMsg: action.payload.message
      }
      const newsState = {
        userData: action.payload
      }
      return {
        ...state,
        ...newState,
        ...newsState
      }
    }
    case 'UPDATE_PROFILE': {
      state.updateProfile = true
      return {...state}
    }
    case 'AUTH_ERR': {
      return {
        ...state,
        isErr: true,
        errMsg: action.payload
      }
    }
    case 'AUTH_CLEAR_STATE': {
      return initialState
    }
    default: {
      return { ...state }
    }
  }
}

export default auth