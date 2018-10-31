import React, { Component } from 'react';
import '../Stylesheets/SignupLogin.css';

class Signup extends Component {

  constructor(){
    super();
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmation: '',
    }
  }

  handleUsernameChange = e => this.setState({username: e.target.value})

  handleEmailChange = e => this.setState({email: e.target.value})

  handlePasswordChange = e => this.setState({password: e.target.value})

  handleConfirmationChange = e => this.setState({confirmation: e.target.value})

  handleSubmit = e => {
    e.preventDefault();
    this.props.signup(this.state.username, this.state.email, this.state.password, this.state.confirmation)
  }


  render(){
    const { username, email, password, confirmation } = this.state;

    return (
      <div className="form">

      <div className="tab-content">
        <div id="signup">
          <h1>Sign Up Here</h1>

          <form onSubmit={this.handleSubmit} >
            <div className="field-wrap">
              <label>
                Username
              </label>
              <input type="text" value={username} onChange={this.handleUsernameChange}/>
            </div>

            <div className="field-wrap">
              <label>
                Email Address
              </label>
              <input type="email" value={email} onChange={this.handleEmailChange}/>
            </div>

            <div className="field-wrap">
              <label>
                Create Password
              </label>
              <input type="password" value={password} onChange={this.handlePasswordChange}/>
            </div>

            <div className="field-wrap">
              <label>
                Confirm Password
              </label>
              <input type="password" value={confirmation} onChange={this.handleConfirmationChange}/>
            </div>
            <br/>
            <button type="submit" className="button button-block">Sign Up</button>
          </form>
          <br/><br/><br/>
          <div>
            <button onClick={ () => this.props.getLogin() }>Already registered? Login Here.</button>
          </div>

        </div>
      </div>
    </div>

    )
  }

}

export default Signup;
