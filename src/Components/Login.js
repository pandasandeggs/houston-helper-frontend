import React, { Component } from 'react';
import '../Stylesheets/SignupLogin.css';

class Login extends Component {

  constructor(){
    super();
    this.state = {
      username: '',
      password: ''
    }
  }

  handleUsernameChange = e => this.setState({username: e.target.value})

  handlePasswordChange = e => this.setState({password: e.target.value})

  handleSubmit = e => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password)
  }

  render(){
    const { username, password } = this.state;

    return (
      <div className="login-page">
        <h1 className="title">Houston Helper</h1>
        <div className="form">

        <div className="tab-content">
          <div id="login">
            <h1>Welcome Back!</h1>

            <form onSubmit={this.handleSubmit}>
              <div className="field-wrap">
              <label>
                Username
              </label>
              <input type="text" value={username} onChange={this.handleUsernameChange}/>
            </div>

            <div className="field-wrap">
              <label>
                Password
              </label>
              <input type="password" value={password} onChange={this.handlePasswordChange}/>
            </div>

            <button className="button button-block">Log In</button>
            </form>

            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Login;
