import {createStore,combineReducers, applyMiddleware} from 'redux'
import ReducerWeb from './Reducer/ReducerWeb'
import NewsReducer from './Reducer/NewsReducer'
import WeatherReducer from './Reducer/WeatherReducer'
import thunk from 'redux-thunk';

const combine = combineReducers({
    web:ReducerWeb,
    news:NewsReducer,
    weather:WeatherReducer
})

const Store = createStore(combine,applyMiddleware(thunk))

export default Store