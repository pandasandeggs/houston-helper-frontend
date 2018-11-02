import React, { Component } from 'react';
import '../App.css';
import '../Stylesheets/Header.css';

class Header extends Component {

  logout = () => {
    localStorage.clear()
    return fetch('http://localhost:3000/api/v1/logout',{
      method: "DELETE",
      redirect: "follow",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(this.props.logout())
  }

  render() {
    return (
      <div className="App" className="App-header">
          <h1>
            Houston Helper
          </h1>
          <button className="logout-button" onClick={ () => this.logout()}>Logout</button>
      </div>
    );
  }

}

export default Header;
