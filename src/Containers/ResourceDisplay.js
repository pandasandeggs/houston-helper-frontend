import React, { Component } from 'react';

class ResourceDisplay extends Component {

  render(){
    return(
      <div>
        <div>
          <h1>{this.props.name}</h1>
          <img src={this.props.image} alt={this.props.name}  width="50%" height="auto" background-size="contain"/>
          <p>{this.props.description}</p>
          <br/>
          <p>Phone: {this.props.phone}</p>
          <p>Email: {this.props.email}</p>
          <a href={this.props.website} target="_blank">Visit the website!</a>
        </div><br/><br/>
        <div>
          <button
          id={this.props.id}
          onClick={ e => this.props.saveUserResource(this.props)}
          >{this.props.saveButtonText}</button>
        </div>
      </div>
    )
  }

}

export default ResourceDisplay;
