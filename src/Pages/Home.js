import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getWeather } from '../Store/Action/WeatherAction'
import CardWeather from '../Component/CardWeather'
import {getNews} from '../Store/Action/NewsAction'
import CardNews from '../Component/CardNews'
import Loading from '../Component/Loading'

class Home extends Component {
  componentDidMount(){
    this.props.WeatherAction()
    this.props.NewsAction('Indonesia')
  }
  render() {
    return (
      <div className="row">
        <div className="col-8">
          {
            this.props.news.news.length > 0 ? (
              this.props.news.news.map((list, i)=>(
                  <CardNews key={i} berita={list} />
              ))
            ) : (<Loading />)
          }
        </div>
        <div className="col-4">
          <CardWeather cuaca={this.props.weather}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (Store) => {
    return {
        weather: Store.weather,
        news: Store.news
    }
}

const mapDispatchToProps = dispatch => {
  return {
    WeatherAction: () => {
      dispatch(getWeather())
    },

    NewsAction: (data) => {
      dispatch(getNews(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
