import React, { Component } from 'react';

class ResourceCards extends Component {

  render(){
    return(
      <div>
        <h2>{this.props.name}</h2>
        <p>Type: </p>
      </div>
    )
  }

}

export default ResourceCards;
