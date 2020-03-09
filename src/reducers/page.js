import {
  GET_PHOTOS_REQUEST,
  GET_PHOTOS_SUCCESS,
  GET_PHOTOS_FAIL
} from '../actions/PageActions'

const initialState = {
  year: 2018,
  photos: [],
  isFetching: false,
  userId: 0 // изначально статус загрузки - ложь
  // так как он станет true, когда запрос начнет выполнение
}

export function pageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PHOTOS_REQUEST:
      return {
        ...state, year: action.payload, isFetching: true
      }

      case GET_PHOTOS_SUCCESS:
        return {
          ...state, photos: action.payload, isFetching: false
        }

        case GET_PHOTOS_FAIL:
          return {
            ...state, isFetching: false, error: action.payload.message
          }

          default:
            return state
  }
}