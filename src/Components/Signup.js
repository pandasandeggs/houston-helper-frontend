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
      <div class="wrapper style1">
        <div id="banner">
          <section class="container">
          <h1>Houston Helper</h1>
            <div id="form">

            <div className="tab-content">
              <div id="signuplogin">
                <h1>Sign Up Here</h1>

                <form onSubmit={this.handleSubmit} >
                  <div>
                    <label>
                      Username
                    </label>
                    <input className="slinput" type="text" value={username} onChange={this.handleUsernameChange}/>
                  </div>

                  <div>
                    <label>
                      Email Address
                    </label>
                    <input className="slinput" type="email" value={email} onChange={this.handleEmailChange}/>
                  </div>

                  <div>
                    <label>
                      Create Password
                    </label>
                    <input className="slinput" type="password" value={password} onChange={this.handlePasswordChange}/>
                  </div>

                  <div>
                    <label>
                      Confirm Password
                    </label>
                    <input className="slinput" type="password" value={confirmation} onChange={this.handleConfirmationChange}/>
                  </div>
                  <br/>
                  <button type="submit" className="button">Sign Up</button>
                </form>
                <br/><br/><br/>
                  <button className="button" onClick={ () => this.props.getLogin() }>Already registered? Login Here.</button>

              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    )
  }

}

export default Signup;
