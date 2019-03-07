import React, { Component } from 'react';

class Login extends Component {
    state = {
        username: '',
        password: ''
    }
    Clickdisini = () => {
        alert(this.state.username)
    }
  render() {
    return (
      <div >
        <label> Username </label>
        <input type='text' onChange={(e) => this.setState({username: e.target.value})} placeholder='masukkan email anda' /> 

        <label> Password </label>
        <input type='password' onChange={(e) => this.setState({password: e.target.value})} placeholder='password' /> 

        <input type='submit' value='Login' onClick={this.Clickdisini} />
      </div>
    )
  }
}

export default Login;
