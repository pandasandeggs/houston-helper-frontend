import React, { Component } from 'react';
import '../Stylesheets/Profile.css';

class ProfileEditForm extends Component {

  state = {
    username: this.props.currentUser.username,
    email: this.props.currentUser.email,
    password: this.props.currentUser.password
  }

  handleUsernameChange = e => {this.setState({username: e.target.value})}

  handleEmailChange = e => {this.setState({email: e.target.value})}

  handlePasswordChange = e => {this.setState({password: e.target.value})}

  handleSubmit = e => {
    e.preventDefault();
    this.props.editUserProfile(this.state.username, this.state.email, this.state.password)
  }

  render(){
    const { username, email, password } = this.state;
    return(
      <div>
        <form>
          <div>
            <input type="text" value={username} name="Username" onChange={this.handleUsernameChange}/>
          </div>
              <br/>
          <div>
            <input type="text" value={email} name="Email" onChange={this.handleEmailChange}/>
          </div>
              <br/>
          <div>
            <input type="password" value={password} name="New Password" onChange={this.handlePasswordChange}/>
          </div>
              <br/>
          <div>
            <button type="submit">Save Profile</button>
          </div>
        </form>
        <div>
          <button>Retake Questionnaire?</button>
        </div>
      </div>
    )
  }

}

export default ProfileEditForm;
