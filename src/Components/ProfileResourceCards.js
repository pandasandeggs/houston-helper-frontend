import React, { Component } from 'react';
import '../Stylesheets/Profile.css';
import '../Stylesheets/DocumentModal.css'
import DocumentModal from './DocumentModal'

class ProfileResourceCards extends Component {

  state = {
    showModal: false
  }

  getDocumentModal = e => {
    console.log("Modal click successful")
    this.setState({
      showModal: !this.state.showModal,
    })
    this.props.clickShowDocument()
  }

  deleteUserResource = (userId, resourceId) => {
    const user_id = userId
    const resource_id = resourceId
    const token = localStorage.token;
    return fetch(`http://localhost:3000/api/v1/users/${user_id}/resources/${resource_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    }).then(this.props.deleteUserResourceFromCard(resource_id))
  }

  render(){
    return(
      <div key={this.props.resource.id}>
        <h3>{this.props.resource.name}</h3>
        <button className="document-show-button" id={this.props.resource.id} onClick={ e => this.getDocumentModal() }>{this.props.showDocumentButton}</button>
        <button className="document-delete-button" id={this.props.resource.id} onClick={ e => this.deleteUserResource(this.props.currentUser.id, e.target.id)}>Delete Resource</button>

        { this.state.showModal ?
        <div>
          <DocumentModal resource={this.props.resource}/>
        </div>
        : null }
      </div>
    )
  }

}

export default ProfileResourceCards;
