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
      <div id="main" class="wrapper style4">
        <div class="container">
    			<div class="row">
            <div id="sidebar" className="4u">
              <section>
                <header className="major"><h1>Resources</h1></header>
                <ul className="default">
                  <ResourceList currentUser={this.props.currentUser} resources={this.props.resources}
                  handleResourceClick={this.handleResourceClick} searchedResources={this.props.searchedResources}
                  renderSearch={this.props.renderSearch}/>
                </ul>
              </section>
            </div>
            <div id="content" className="8u skel-cell-important">
              <section>
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
              </section>
            </div>
              <div className="wrapper style5">
                Developed By: Chantal Wallace
              </div>
          </div>
        </div>
      </div>
    )
  }

}

export default ResourceMainContainer;
