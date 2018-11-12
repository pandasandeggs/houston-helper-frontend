import React, { Component } from 'react';
import ResourceCards from '../Components/ResourceCards'

class ResourceList extends Component {

  getResources(){
    console.log("Inside getResources", this.props.currentUser)
    if(this.props.currentUser && this.props.currentUser.categories.length){
      return this.props.currentUser.suggested_resources.map( resource => {
          return <div key={resource.id} onClick={ e => this.props.handleResourceClick(resource)}>
              <ResourceCards id={resource.id} name={resource.name} categories={resource.categories}/>
            </div>
        })
    } else if(this.props.resources){
      return this.props.resources.map( resource => {
        return <div key={resource.id} onClick={ e => this.props.handleResourceClick(resource)}>
          <ResourceCards id={resource.id} name={resource.name} categories={resource.categories}/>
        </div>
      })
    }
  }

  render(){
    console.log("Inside Render", this.props.currentUser)
    return(
      <div>
        {this.getResources()}
      </div>
    )
  }

}

export default ResourceList;
