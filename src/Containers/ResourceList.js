import React, { Component } from 'react';
import ResourceCards from '../Components/ResourceCards'

class ResourceList extends Component {

  getResources = () => {
    if(this.props.searchedResources.length > 0){
      return this.props.searchedResources.map( resource => {
        return <div key={resource.id} onClick={ e => this.props.handleResourceClick(resource)}>
          <ResourceCards id={resource.id} name={resource.name} categories={resource.categories}/>
        </div>
      })
    } else if(this.props.currentUser && this.props.currentUser.categories.length){
      return this.props.currentUser.suggested_resources.map( resource => {
        return <div key={resource.id} onClick={ e => this.props.handleResourceClick(resource)}>
            <ResourceCards id={resource.id} name={resource.name} categories={resource.categories}/>
          </div>
      })
    } else if(this.props.resources && this.props.resources.length){
      return this.props.resources.map( resource => {
        return <div key={resource.id} onClick={ e => this.props.handleResourceClick(resource)}>
          <ResourceCards id={resource.id} name={resource.name} categories={resource.categories}/>
        </div>
      })
    }
  }

  render(){
    return(
      <ul className="default">
        {this.getResources()}
      </ul>
    )
  }

}

export default ResourceList;
