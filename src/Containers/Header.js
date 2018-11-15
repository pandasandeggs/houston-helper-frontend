import React, { Component } from 'react';
import '../App.css';
import '../Stylesheets/Header.css';

class Header extends Component {

  state = {
    searchTerm: ""
  }

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

  handleSearchChange = e => {
    this.setState({ searchTerm: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSearch(this.state.searchTerm)
  }

  render() {
    return (
      <div className="wrapper style1">
        <div id="header">
          <div className="container">
              <h1 id="logo">Houston Helper</h1>
                <nav id="nav">
                  <ul>
                    <li className="active" onClick={ () => this.props.getHome()}><a>Home</a></li>
                    <li onClick={ () => this.props.getProfile()}><a>My Profile</a></li>
                    <li onClick={ () => this.logout()}><a>Logout</a></li>
                    <li>
                      <form className="form" onSubmit={e => this.handleSubmit(e)}>
                      <input className="input" onChange={e => this.handleSearchChange(e)} type="search" placeholder="Search by resource name"/>
                      <i className="fa fa-search"></i>
                      </form>
                    </li>
                  </ul>
                </nav>
          </div>
        </div>
      </div>
    );
  }

}

export default Header;
