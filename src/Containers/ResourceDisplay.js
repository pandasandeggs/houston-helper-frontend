import React, { Component } from 'react';

class ResourceDisplay extends Component {

  render(){
    return(
      <div>
        <header className="major"><h1>{this.props.name}</h1></header>
        <img src={this.props.image} alt={this.props.name}  width="50%" height="auto" background-size="contain"/>
        <br/>
        <p>{this.props.description}</p>
        <p>Phone: {this.props.phone}</p>
        <p>Email: {this.props.email}</p>
        <a href={this.props.website} target="_blank">Visit the website!</a>
        <br/><br/>
        <div>
          <button className="button"
          id={this.props.id}
          onClick={ e => this.props.saveUserResource(this.props)}
          >{this.props.saveButtonText}</button><br/><br/><br/>
        </div>
      </div>
    )
  }

}

export default ResourceDisplay;
