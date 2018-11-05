import React, { Component } from 'react';
import '../Stylesheets/Profile.css';

class ProfileDisplay extends Component {

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
          <p>"Map through categories here..."</p>
        </div>
        <div>
          <button>Edit Profile</button>
        </div>
      </div>
    )
  }

}

export default ProfileDisplay;
