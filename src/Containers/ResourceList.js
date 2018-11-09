import React, { Component } from 'react';
import ResourceCards from '../Components/ResourceCards'

class ResourceList extends Component {

  /*getResources(){
    console.log("in function", this.props.resources)
    if(this.props.resources.length){ /* this.props.currentUser.categories.length
      return this.props.currentUser.categories.map( category =>
        category.resources.map( resource => {
          return <div key={resource.id} onClick={ e => this.props.handleResourceClick(resource)}>
              <ResourceCards id={resource.id} name={resource.name} categories={resource.categories}/>
            </div>
          })
      )
    } else {
      return this.props.resources.map( resource => {
        return <div key={resource.id} onClick={ e => this.props.handleResourceClick(resource)}>
          <ResourceCards id={resource.id} name={resource.name} categories={resource.categories}/>
        </div>
      })
    }
  } */

  getResources(){
    return this.props.resources.map( resource => {
      return <div key={resource.id} onClick={ e => this.props.handleResourceClick(resource)}>
          <ResourceCards id={resource.id} name={resource.name} categories={resource.categories}/>
        </div>

    })
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
