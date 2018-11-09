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
      showModal: true
    })
  }

  deleteUserResource = (resource) => {
    const token = localStorage.token;
    if(!this.state.currentUser.resources.find( saved => saved.id === resource.id)){
      return fetch(`http://localhost:3000/user_resources/${resource.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      }).then(resp => resp.json())
        .then(this.props.deleteUserResourceFromCard(resource.id))
    }

  }

  render(){
    return(
      <div key={this.props.resource.id}>
        <h3>{this.props.resource.name}</h3>
        <button className="document-show-button" onClick={ e => this.getDocumentModal(e) }>See Documents</button>
        <button className="document-delete-button" id={this.props.resource.id} onClick={ e => console.log(e.target)}>Delete Resource</button>
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
