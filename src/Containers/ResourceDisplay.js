import React, { Component } from 'react';

class ResourceDisplay extends Component {

  render(){
    return(
      <div>
        <h1>{this.props.name}</h1>
        <img src={this.props.image} alt="" height="100" width="300"/>
        <p>{this.props.description}</p>
        <br/>
        <p>Phone: {this.props.phone}</p>
        <p>Email: {this.props.email}</p>
        <a href={this.props.website}>Visit the website!</a>
      </div>
    )
  }

}

export default ResourceDisplay;
