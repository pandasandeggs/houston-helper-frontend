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

  render(){
    return(
      <div className="resource-card">
        <h2>{this.props.name}</h2>
        <p>Type: </p>
      </div>
    )
  }

}

export default ResourceCards;
