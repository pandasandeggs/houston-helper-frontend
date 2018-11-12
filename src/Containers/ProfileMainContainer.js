import React, { Component } from 'react';
import '../Stylesheets/Profile.css';
import ProfileResourceList from './ProfileResourceList'
import ProfileDisplay from '../Components/ProfileDisplay'
import ProfileEditForm from '../Components/ProfileEditForm'

class ProfileMainContainer extends Component {

  state ={
    chosenResource: null,
    showEditForm: false
    }

  handleResourceClick = resource => {
    this.setState({
      chosenResource: resource
      /* This function needs to make the document modal pop up */
    })
  }

  handleEditFormClick = () => {
    this.setState({
      showEditForm: true
    })
  }
  /* Also need another function to delete resource from user resources*/

  hideEditForm = () => {
    this.setState({
      showEditForm: false
    })
  }

  render(){
    return(
      <div className="profile-main-container">
        <div className="profile-display">
          {this.state.showEditForm ?
            <div><h1>Edit Profile</h1>
            <ProfileEditForm currentUser={this.props.currentUser} categories={this.props.categories}
            resources={this.props.resources}
            questions={this.props.questions}
            answers={this.props.answers}
            saveUserCategory={this.props.saveUserCategory} editUserProfile={this.props.editUserProfile} getHome={this.props.getHome} hideEditForm={this.hideEditForm}/></div>
            : <div><h1>My Profile</h1>
            <ProfileDisplay currentUser={this.props.currentUser} categories={this.props.categories} handleEditFormClick={this.handleEditFormClick} /></div>
          }
        </div>
        <div className="profile-list">
          <h1>My Resources</h1>
          <ProfileResourceList currentUser={this.props.currentUser} categories={this.props.categories}
          resources={this.props.resources} deleteUserResourceFromCard={this.props.deleteUserResourceFromCard}
          />
        </div>
      </div>
    )
  }

}

export default ProfileMainContainer;
