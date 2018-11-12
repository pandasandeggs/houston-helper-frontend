import React, { Component } from 'react';
import '../Stylesheets/DocumentModal.css'

class DocumentModal extends Component {

  getDocument = () => {
    console.log("Am I working?")
    if(this.props.resource.documents.length){
      this.props.resource.documents.map( document => {
        return <input type="checkbox" id="myCheck" name={document.name} value={document.name}/>
      })
    } else {
      return <p>No documents are needed to apply for this resource. Please contact {this.props.resource.name} for more information about how to acquire their services.</p>
    }
  }

  render(){
    return(
      <div className="w3-container">
        <div id="id01" >
          <div className="w3-modal-content w3-animate-zoom w3-card-4">
            <header className="w3-container w3-green">
              <h3>Documents to apply for {this.props.resource.name}:</h3>
            </header>
            <div className="w3-container">
              {this.getDocument()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DocumentModal;
