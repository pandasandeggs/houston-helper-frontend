import React, { Component } from 'react';
import '../Stylesheets/Resource.css';
import ResourceList from './ResourceList'
import ResourceDisplay from './ResourceDisplay'

class ResourceMainContainer extends Component {

  state ={
    chosenResource: null
    }

  handleResourceClick = resource => {
    this.setState({
      chosenResource: resource
    })
  }

  render(){
    return(
      <div className="resource-main-container">
        <div className="resource-list">
          <h1>Resources</h1>
          <ResourceList currentUser={this.props.currentUser} resources={this.props.resources} handleResourceClick={this.handleResourceClick}/>
        </div>
        <div className="resource-display">
          { this.state.chosenResource ?
            <ResourceDisplay
            handleResourceClick={this.handleResourceClick}
            id={this.state.chosenResource.id}
            name={this.state.chosenResource.name}
            image={this.state.chosenResource.image}
            description={this.state.chosenResource.description}
            phone={this.state.chosenResource.phone}
            email={this.state.chosenResource.email}
            website={this.state.chosenResource.website}
            currentUser={this.props.currentUser}
            saveUserResource={this.props.saveUserResource}
            saveButtonText={ this.props.currentUser.resources.find( resource => resource.id === this.state.chosenResource.id ) ? 'Saved' : 'Save Resource'}
            />
            : null}
        </div>
      </div>
    )
  }

}

export default ResourceMainContainer;
