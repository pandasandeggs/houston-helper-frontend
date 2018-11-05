import React, { Component } from 'react';
import '../Stylesheets/Profile.css';
import DocumentModal from './DocumentModal'

class ProfileResourceCards extends Component {

  getDocumentModal = e => {
    console.log("Clicked Document Modal")
    return <div>
      <DocumentModal resource={this.props.resource}/>
    </div>
  }

  render(){
    return(
      <div>
        <h3>{this.props.resource.name}</h3>
        <button className="document-show-button" onClick={ e => this.getDocumentModal(e.target) }>See Documents</button>
        <button className="document-delete-button">Delete Resource</button>
      </div>
    )
  }

}

export default ProfileResourceCards;
