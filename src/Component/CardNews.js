import React, { Component } from 'react';

class CardNews extends Component {
  render() {
    return (
        <div className="card mb-3">
          <img className="card-img-top" src={this.props.berita.urlToImage !== null ? this.props.berita.urlToImage : 'https://www.freeiconspng.com/uploads/no-image-icon-6.png'} alt={this.props.berita.title}/>
          <div className="card-body">
              <h5 className="card-title">{this.props.berita.title}</h5>
              <p className="card-text">{this.props.berita.description}</p>
              <a href={this.props.berita.url} className="btn btn-primary">Read More</a>
          </div>
        </div>
    );
  }
}

export default CardNews;
