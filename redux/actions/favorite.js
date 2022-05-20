import http from "../../helpers/http"
import qs from 'qs'

export const addToFavorite = async (dispatch, dataFav) => {
  // return async (dispatch) => {
  try {
    dispatch({ type: 'TOGGLE_LOADING' })
    const token = window.localStorage.getItem('token')
    const { data } = await http(token).post('/favorite', qs.stringify(dataFav))
    console.log(data)
    dispatch({ type: 'ADD_FAVORITE', payload: data.result })
    dispatch({ type: 'TOGGLE_LOADING' })
  } catch (e) {
    console.log(e)
  }
  // }
}

export const getFavorite = (token) => {
  return async (dispatch) => {
    try {
      dispatch({ type: 'TOGGLE_LOADING' })
      const token = window.localStorage.getItem('token')
      const { data } = await http(token).get(`/favorite/user`)
      dispatch({ type: 'GET_FAVORITE', payload: data.result })
      dispatch({ type: 'TOGGLE_LOADING' })
    } catch (e) {
      console.log(e)
    }
  }
}

export const removeFavorite = async (dispatch, id) => {
  try {
    dispatch({ type: 'TOGGLE_LOADING' })
    const token = window.localStorage.getItem('token')
    const { data } = await http(token).delete(`/favorite/${id}`)
    dispatch({ type: 'REMOVE_FAVORITE', payload: data.result })
    dispatch({ type: 'TOGGLE_LOADING' })
  } catch (e) {
    console.log(e)
  }
}

export const checkFavorite = async (dispatch, id) => {
  try {
    dispatch({ type: 'TOGGLE_LOADING' })
    const token = window.localStorage.getItem('token')
    const { data } = await http(token).get(`/favorite/user-and-product/${id}`)
    dispatch({ type: 'CHECK_FAVORITE', payload: data.result })
    dispatch({ type: 'TOGGLE_LOADING' })
  } catch (e) {
    console.log(e)
  }
}