import React, { Component } from 'react';
import ResourceCards from '../Components/ResourceCards'

class ResourceList extends Component {

  getResources(){
    return this.props.resources.map( resource =>
      <div>
        <ResourceCards name={resource.name} />
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
