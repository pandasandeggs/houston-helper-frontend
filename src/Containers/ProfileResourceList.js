import React, { Component } from 'react';
import '../Stylesheets/Profile.css';
import ProfileResourceCards from '../Components/ProfileResourceCards'

class ProfileResourceList extends Component {

  state = {
    showDocumentButton: false
  }

  clickShowDocument = () => {
    this.setState({
      showDocumentButton: !this.state.showDocumentButton
    })
  }

  getUserResources(){
    return this.props.currentUser.resources.map(resource =>
      <div key={resource.id}>
        <ProfileResourceCards
        currentUser={this.props.currentUser}
        resource={resource}
        deleteUserResourceFromCard={this.props.deleteUserResourceFromCard} clickShowDocument={this.clickShowDocument} showDocumentButton={ this.state.showDocumentButton ? "Hide Documents" : "See Documents" }
        />
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
