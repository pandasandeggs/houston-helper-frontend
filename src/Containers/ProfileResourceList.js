import React, { Component } from 'react';
import '../Stylesheets/Profile.css';
import ProfileResourceCards from '../Components/ProfileResourceCards'

class ProfileResourceList extends Component {

  getUserResources(){
    return this.props.currentUser.resources.map(resource =>
      <div key={resource.id}>
        <ProfileResourceCards resource={resource} deleteUserResourceFromCard={this.props.deleteUserResourceFromCard}/>
      </div>
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
