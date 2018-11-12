import React, { Component } from 'react';

class ResourceCards extends Component {

  state = {
    id: this.props.id,
    name: this.props.name,
    image: this.props.image,
    description: this.props.description,
    phone: this.props.phone,
    email: this.props.email,
    website: this.props.website
  }

  getCategories = () => {
    if(!this.props.categories.length){
      return <p>None</p>
    } else {
      return this.props.categories.map( category => <p key={category.id}>{category.name}</p> )
    }
  }

  render(){
    return(
      <div className="resource-card" key={this.props.id}>
        <h2>{this.props.name}</h2>
        <p>Related to:</p> {this.getCategories()}
      </div>
    )
  }

}

export default ResourceCards;
