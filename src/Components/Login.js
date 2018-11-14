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
      <div class="wrapper style1">
        <div id="banner">
          <section class="container">
        <h1>Houston Helper</h1>
        <div className="form">

        <div className="tab-content">
          <div id="signuplogin">
            <h1>Welcome Back!</h1>

            <form onSubmit={this.handleSubmit}>
              <div className="field-wrap">
              <label>
                Username
              </label>
              <input className="slinput" type="text" value={username} onChange={this.handleUsernameChange}/>
            </div>

            <div className="field-wrap">
              <label>
                Password
              </label>
              <input className="slinput" type="password" value={password} onChange={this.handlePasswordChange}/>
            </div>

            <button className="button">Log In</button>
            </form>
            <br/><br/><br/>

            <button className="button" onClick={ () => this.props.getSignUp() }>New Here? Signup.</button>

            </div>
          </div>
        </div>
        </section>
      </div>
      </div>
    )
  }

}

export default Login;
