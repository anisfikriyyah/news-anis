import axios from 'axios'
import {
GET_WEATHER_REQUEST,
GET_WEATHER_DONE,
GET_WEATHER_ERROR
} from '../Types/WeatherType'

export const getWeather = () => {
    let key = 'ee19ffc30d8e43a0ac3dd50d425431c4';
  return dispatch => {
    dispatch({
      type: GET_WEATHER_REQUEST
    })
    axios({
      method: 'GET',
      url: 'http://api.weatherbit.io/v2.0/current?city=jakarta&key='+key,
      headers: {
        'Access-Control-Allow-Origin': true
      } 
    })
      .then((response) => {
        dispatch({
          type: GET_WEATHER_DONE,
          payload: {
            weather: response.data.data[0]
          }
        })
      })
      .catch(err => {
        dispatch({
          type: GET_WEATHER_ERROR
        })
      })
  }
}