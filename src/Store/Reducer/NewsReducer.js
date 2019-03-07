import { GET_NEWS_REQUEST, GET_NEWS_ERROR, GET_NEWS_DONE } from '../Types/NewsType'

const initialState = {
  news: [],
  isLoaded: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS_REQUEST:
      return {
        ...state,
        isLoaded: true
      }
    case GET_NEWS_DONE:
      return {
        ...state,
        news: action.payload.news,
        isLoaded: false
      }
    case GET_NEWS_ERROR:
      return {
        ...state
      }
    default:
      return state
  }
}