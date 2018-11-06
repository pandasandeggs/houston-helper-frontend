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

  render(){
    return(
      <div>
        <h3>{this.props.resource.name}</h3>
        <button className="document-show-button" onClick={ e => this.getDocumentModal(e) }>See Documents</button>
        <button className="document-delete-button">Delete Resource</button>
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
