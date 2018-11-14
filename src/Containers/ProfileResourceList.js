import React, { Component } from 'react';
import '../Stylesheets/Profile.css';
import ProfileResourceCards from '../Components/ProfileResourceCards'

class ProfileResourceList extends Component {

  getUserResources(){
    return this.props.currentUser.resources.map(resource =>
      <li key={resource.id}>
        <ProfileResourceCards
        currentUser={this.props.currentUser}
        resource={resource}
        deleteUserResourceFromCard={this.props.deleteUserResourceFromCard}
        />
      </li>
    )
  }

  render(){
    return(
      <div>
      {this.getUserResources()}
      </div>
    )
  }

}

export default ProfileResourceList;
