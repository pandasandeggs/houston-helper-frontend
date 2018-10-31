import React, { Component } from 'react';
import ResourceList from './ResourceList'
import ResourceDisplay from './ResourceDisplay'

class ResourceMainContainer extends Component {

  render(){
    return(
      <div>
        <div>
          <ResourceList />
        </div>
        <div>
          <ResourceDisplay />
        </div>
      </div>
    )
  }

}

export default ResourceMainContainer;
