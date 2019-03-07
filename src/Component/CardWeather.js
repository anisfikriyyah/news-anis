import React, { Component } from 'react';

class CardWeather extends Component {
  render() {
    return (
        <div className="card" style={{width:'300px'}}>
          <img className="card-img-top" 
            src={
                this.props.cuaca.weather.weather !== undefined 
                ? 'https://www.weatherbit.io/static/img/icons/'+this.props.cuaca.weather.weather.icon+'.png'
                : 'https://www.weatherbit.io/static/img/icons/t01n.png'
            } />
          <div className="card-body">
              <h5 className="card-title">{this.props.cuaca.weather.city_name}</h5>
              <h5 className="card-title">{this.props.cuaca.weather.temp}`C</h5>
              <p className="card-text">{this.props.cuaca.weather.weather !== undefined ? this.props.cuaca.weather.weather.description : null} </p>
          </div>
        </div>
    );
  }
}

export default CardWeather;
