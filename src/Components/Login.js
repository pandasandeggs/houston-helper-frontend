import React, { Component } from 'react';
import '../App.css';
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
      <div className="wrapper style1">
        <div id="banner">
          <section className="container">
        <h1>Houston Helper</h1>
          <div id="form">

          <div className="tab-content">
            <div id="signuplogin">
              <h2>Welcome Back!</h2>

              <form onSubmit={this.handleSubmit}>
                <div>
                <label><h4>
                  Username
                </h4></label>
                <input type="text" value={username} onChange={this.handleUsernameChange}/>
              </div>

              <div>
                <label><h4>
                  Password
                </h4></label>
                <input type="password" value={password} onChange={this.handlePasswordChange}/>
              </div><br/><br/>

              <button className="button">Log In</button>
              </form>
              <br/><br/><br/>

              <button id="switch" className="button" onClick={ () => this.props.getSignUp() }>New Here? Signup.</button>

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
