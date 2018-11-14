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
      <li key={this.props.id}>
        <a>{this.props.name}</a>
      </li>
    )
  }

}

/*<h4>Categories:</h4> {this.getCategories()}*/

export default ResourceCards;
