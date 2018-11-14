import React, { Component } from 'react';
import '../Stylesheets/Profile.css';

class ProfileDisplay extends Component {

  getUserCategories(){
    return this.props.currentUser.categories.map( category => {
      return <p>{category.name}</p>
    })
  }

  render(){
    return(
      <div>
        <div>
          <h3>Username:</h3>
          <p>{this.props.currentUser.username}</p>
        </div>
        <div>
          <h3>Email:</h3>
          <p>{this.props.currentUser.email}</p>
        </div>
        <div>
          <h3>Your Resource Categories:</h3>
          {this.getUserCategories()}
        </div>
        <div>
          <button className="profile-button" onClick={ () => this.props.handleEditFormClick()}>Edit Profile</button>
        </div>
      </div>
    )
  }

}

export default ProfileDisplay;
