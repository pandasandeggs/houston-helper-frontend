import React, { Component } from 'react';
import '../Stylesheets/Profile.css';
import Quiz from './Quiz'

class ProfileEditForm extends Component {

  state = {
    username: this.props.currentUser.username,
    email: this.props.currentUser.email,
    password: this.props.currentUser.password,
    password_confirmation: this.props.currentUser.password,
    renderQuiz: false
  }

  handleUsernameChange = e => {this.setState({username: e.target.value})}

  handleEmailChange = e => {this.setState({email: e.target.value})}

  handlePasswordChange = e => {this.setState({password: e.target.value})}

  handlePasswordConfirmationChange = e => {this.setState({password_confirmation: e.target.value})}

  handleSubmit = e => {
    e.preventDefault();
    this.props.editUserProfile(this.state.username, this.state.email, this.state.password, this.state.password_confirmation)
    this.props.hideEditForm()
  }

  handleQuestionClick = () => {
    this.setState({
      renderQuiz: !this.state.renderQuiz
    })
  }

  render(){
    const { username, email, password, password_confirmation } = this.state;
    return(
      <div id="profile-edit">
        <form onSubmit={ e => this.handleSubmit(e)}>
          <div>
            <input type="text" value={username} name="Username" onChange={this.handleUsernameChange}/>
          </div>
              <br/>
          <div>
            <input type="text" value={email} name="Email" onChange={this.handleEmailChange}/>
          </div>
              <br/>
          <div>
            <input type="password" value={password} placeholder="New Password" onChange={this.handlePasswordChange}/>
          </div>
              <br/>
          <div>
            <input type="password" value={password_confirmation} placeholder="Password Confirmation" onChange={this.handlePasswordConfirmationChange}/>
          </div>
            <br/>
          <div>
            <button className="profile-button" type="submit">Save Profile</button>
          </div>
        </form>
        <br/>
        <div>
          <button className="profile-button" onClick={() => this.handleQuestionClick()}>Retake Questionnaire?</button>
          { this.state.renderQuiz ? <Quiz categories={this.props.categories} getUserCategories={this.props.getUserCategories} resources={this.props.resources} questions={this.props.questions} answers={this.props.answers} saveUserCategory={this.props.saveUserCategory} getHome={this.props.getHome} />
          : null }
        </div>
      </div>
    )
  }

}

export default ProfileEditForm;
