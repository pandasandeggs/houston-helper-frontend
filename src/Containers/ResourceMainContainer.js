import React, { Component } from 'react';
import '../Stylesheets/Resource.css';
import ResourceList from './ResourceList'
import ResourceDisplay from './ResourceDisplay'

class ResourceMainContainer extends Component {

  render(){
    return(
      <div>
        <div className="resource-list">
          <ResourceList resources={this.props.resources}/>
        </div>
        <div className="resource-display">
          <ResourceDisplay />
        </div>
      </div>
    )
  }

}

export default ResourceMainContainer;
