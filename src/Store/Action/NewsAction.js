import axios from 'axios'
import {
  GET_NEWS_REQUEST,
  GET_NEWS_DONE,
  GET_NEWS_ERROR
} from '../Types/NewsType'
import { key,URL_News } from '../secret'
export const getNews = (keyword) => {
  return dispatch => {
    dispatch({
      type: GET_NEWS_REQUEST
    })
    axios({
      method: 'GET',
      url: URL_News + `everything?q=${keyword}&from=2019-02-07&sortBy=publishedAt&apiKey=${key}`
    })
      .then((response) => {
        dispatch({
          type: GET_NEWS_DONE,
          payload: {
            news: response.data.articles
          }
        })
      })
      .catch(err => {
        dispatch({
          type: GET_NEWS_ERROR
        })
      })
  }
}