import React, { Component } from 'react';
import '../Stylesheets/Profile.css';
import ProfileResourceList from './ProfileResourceList'
import ProfileDisplay from '../Components/ProfileDisplay'

class ProfileMainContainer extends Component {

  state ={
    chosenResource: null
    }

  handleResourceClick = resource => {
    this.setState({
      chosenResource: resource
      /* This function needs to make the document modal pop up */
    })
  }

  /* Also need another function to delete resource from user resources*/

  render(){
    return(
      <div className="profile-main-container">
        <div className="profile-display">
          <h1>My Profile</h1>
          <ProfileDisplay currentUser={this.props.currentUser} categories={this.props.categories} />
        </div>
        <div className="profile-list">
          <h1>My Resources</h1>
          <ProfileResourceList currentUser={this.props.currentUser} categories={this.props.categories}
          resources={this.props.resources} /*handleResourceClick={this.handleResourceClick}*//>
        </div>
      </div>
    )
  }

}

export default ProfileMainContainer;
