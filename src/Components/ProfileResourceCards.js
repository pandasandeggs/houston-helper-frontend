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

  deleteUserResource = (user, resource) => {
    console.log("Clicked")
    const user_id = user
    const resource_id = resource
    const token = localStorage.token;
    /*if(this.state.currentUser && this.state.currentUser.resources.find( saved => saved.resource_id === resource_id)){*/
      return fetch(`http://localhost:3000/api/v1/users/${user_id}/resources/${resource_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
          user_id: user_id,
          resource_id: resource_id
        })
      }).then(this.props.deleteUserResourceFromCard(resource_id))
    /*}*/

  }

  render(){
    return(
      <div key={this.props.resource.id}>
        <h3>{this.props.resource.name}</h3>
        <button className="document-show-button" onClick={ e => this.getDocumentModal(e) }>{this.props.showDocumentButton}</button>
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
