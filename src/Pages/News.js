import React, { Component } from 'react';
import {connect} from 'react-redux'
import CardNews from '../Component/CardNews'
import {getNews } from '../Store/Action/NewsAction'
import Loading from '../Component/Loading'

class About extends Component {
  componentDidMount(){
    this.props.NewsAction('technology')
  }

  render() {
    return (
      <div className="row">
        {
          this.props.news.news.length > 0 ? (
            this.props.news.news.map((list, i)=>(
              <div className="col-md-6">
              <CardNews key={i} berita={list} />
              </div>
            ))
          ) : (<Loading />)
        }
      </div>
    )
  }
}

const mapStateToProps = (Store) => {
    return {
        news:Store.news
    }
}

const mapDispatchToProps = dispatch => {
  return {
    NewsAction: (data) => {
      dispatch(getNews(data))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(About);
