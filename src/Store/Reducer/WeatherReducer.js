import { GET_WEATHER_DONE,GET_WEATHER_ERROR,GET_WEATHER_REQUEST} from '../Types/WeatherType'

const initialState = {
  weather: [],
  isLoaded: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER_REQUEST:
      return {
        ...state,
        isLoaded: true
      }
    case GET_WEATHER_DONE:
      return {
        ...state,
        weather: action.payload.weather,
        isLoaded: false
      }
    case GET_WEATHER_ERROR:
      return {
        ...state
      }
    default:
      return state
  }
}