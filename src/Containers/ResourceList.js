import React, { Component } from 'react';
import ResourceCards from '../Components/ResourceCards'

class ResourceList extends Component {

  getResources(){
    return this.props.resources.map( resource =>
      <div onClick={ e => this.props.handleResourceClick(resource)}>
        <ResourceCards id={resource.id} name={resource.name} />
      </div>
    )
  }

  render(){
    return(
      <div>
        {this.getResources()}
      </div>
    )
  }

}

export default ResourceList;
