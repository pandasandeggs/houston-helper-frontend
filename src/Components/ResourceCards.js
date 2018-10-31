import React, { Component } from 'react';

class ResourceCards extends Component {

  render(){
    return(
      <div>
        <h2>{this.props.resource.name}</h2>
        <p>Type: {this.props.resource.category}</p>
      </div>
    )
  }

}

export default ResourceCards;
