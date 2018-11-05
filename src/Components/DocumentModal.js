import React, { Component } from 'react';
import '../Stylesheets/DocumentModal.css'

class DocumentModal extends Component {

  getDocument = () => {
    if(this.props.resource.documents.length){
      this.props.resource.documents.map( document => {
        return <input type="checkbox" id="myCheck" name={document.name} value={document.name}/>
      })
    } else {
      return <p>No documents are needed to apply for this resource. Please contact {this.props.resource.name} for more information on how to acquire their services.</p>
    }
  }

  render(){
    return(
      <div id="id01" class="w3-modal">
        <div class="w3-container">
          <div class="w3-modal-content w3-animate-zoom w3-card-4">
            <header class="w3-container w3-green"><h3>Documents to apply for {this.props.resource.name}:</h3></header>
            <div class="w3-container">
              {this.getDocument()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DocumentModal;
