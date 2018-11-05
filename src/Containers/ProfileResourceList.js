import React, { Component } from 'react';
import '../Stylesheets/Profile.css';
import ProfileResourceCards from '../Components/ProfileResourceCards'

class ProfileResourceList extends Component {

  getUserResources = () => {
    if(this.props.currentUser.resources.length){
      return this.props.currentUser.resources.map( resource =>
        <div key={resource.id}>
          <ProfileResourceCards resource={resource}/>
        </div>
      )
    } else {
      console.log("User has no saved resources.")
      return <h2>No saved resources</h2>
    }
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
