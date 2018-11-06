import React, { Component } from 'react';
import ResourceCards from '../Components/ResourceCards'

class ResourceList extends Component {

  getResources(){
    console.log("Regular Resources", this.props.resources)
    if(this.props.resources.length){
      return this.props.resources.map( resource =>
        <div key={resource.id} onClick={ e => this.props.handleResourceClick(resource)}>
          <ResourceCards id={resource.id} name={resource.name} categories={resource.categories}/>
        </div>
      )
    } else {
      console.log("User has no resources.")
    }
  }

  render(){
    console.log("currentUser", this.props.currentUser)
    return(
      <div>
        {this.getResources()}
      </div>
    )
  }

}

export default ResourceList;
