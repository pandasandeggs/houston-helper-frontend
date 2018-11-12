import React, { Component } from 'react';
import '../Stylesheets/DocumentModal.css'

class DocumentModal extends Component {

  getDocument = () => {
    console.log("the docs?", this.props.resource.documents)
    if(this.props.resource.documents.length){
      return this.props.resource.documents.map( document => {
        return <div><input className="checkboxes" name={document.name} type="checkbox" id={document.id} value={document.name}/><label>{document.name}</label><br/></div>
      })
    } else {
      return <p>No documents are needed to apply for this resource. Please contact {this.props.resource.name} for more information about how to acquire their services.</p>
    }
  }

  render(){
    return(
      <div className="w3-container">
        <div>
          <div className="w3-modal-content w3-animate-zoom w3-card-4">
            <header className="w3-container w3-green">
              <h3>Documents to apply for {this.props.resource.name}:</h3>
            </header>
            <div className="w3-container w3-modal-content">
              <form>
                {this.getDocument()}
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DocumentModal;
