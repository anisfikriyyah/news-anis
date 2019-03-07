import React, { Component } from 'react';
import {NavLink, Link} from 'react-router-dom';
import {getNews } from '../Store/Action/NewsAction'
import {connect} from 'react-redux'

class Header extends Component {
  state = {
    search: ''
  }

  handleSearch = (event) => {
    this.setState({search: event.target.value})
    this.props.NewsAction(this.state.search)
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
      <Link to="/" className="navbar-brand"> AnisNews</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/news" className="nav-link">News</NavLink>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" onChange={(e) => this.handleSearch(e)} type="search" placeholder="Search" aria-label="Search" />
        </form>
      </div>
    </nav>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    NewsAction: (data) => {
      dispatch(getNews(data))
    }
  }
}

export default connect(null,mapDispatchToProps)(Header);
