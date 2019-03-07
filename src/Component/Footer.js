import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
        <div className="bg-dark" style={{position:"fixed",bottom:"0px", width:"100%", paddingTop:"10px"}}>
            <p className="text-center text-white font-italic">&copy; by Anis Fikriyyah</p>
        </div>
    )
  }
}

export default Footer;
