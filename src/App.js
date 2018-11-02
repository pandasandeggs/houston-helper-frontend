import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Signup from "./Components/Signup"
import Login from "./Components/Login"
import Header from "./Containers/Header"
import QuizOptionPage from "./Components/QuizOptionPage"
import ResourceMainContainer from "./Containers/ResourceMainContainer"

// import { BrowserRouter, Route, Link, NavLink, Switch, Redirect } from "react-router-dom";

class App extends Component {

  constructor(){
    super();
    this.state = {
      currentUser: null,
      signupDisplayed: true,
      loginDisplayed: false,
      resourceMainDisplayed: false,
      questionPageDisplayed: false,
      resources: [],
      categories: []
    }
  }

  componentDidMount(){
    const token = localStorage.token
    if(token) {
      fetch('http://localhost:3000/api/v1/profile',{
        method: "GET",
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then(resp => resp.json())
        .then(data => {
          if(!data.error){
            this.setState({
              currentUser: data,
              signupDisplayed: false,
              loginDisplayed: false
            })
          }
        }).then ( () => {
          const token = localStorage.token
          fetch('http://localhost:3000/resources', {
            headers:{
              'Authorization': `Bearer ${token}`
            }
          }).then(resp => resp.json())
            .then(data => {this.setState({resources: data})
          })
        })
    }
  }

  signup = (username, email, password, confirmation) => {
    localStorage.clear()
    fetch('http://localhost:3000/api/v1/users', {
      method: "POST",
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
        password_confirmation: confirmation
      }),
      headers: {
        "Content-type": "application/json"
      }
    }).then(resp => resp.json())
      .then(data => {
        if(!data.error){
          localStorage.token = data.token;
          this.setState({
            currentUser: data.user,
            signupDisplayed: false,
            questionPageDisplayed: true
          })
        } else {
          console.log("User was not successfully created.")
        }
      })
  }

  login = (username, password) => {
    localStorage.clear()
    fetch('http://localhost:3000/api/v1/login', {
      method: "POST",
      body: JSON.stringify({
        username:username,
        password: password
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(resp => resp.json())
      .then(data => {
        if(!data.error){
          localStorage.token = data.jwt;
          this.setState({
            currentUser: data.user,
            loginDisplayed: false
          })
        } else {
          this.setState({
            loginError: data.error
          })
        }
      }).then ( () => {
        const token = localStorage.token
        fetch('http://localhost:3000/resources', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }).then(resp => resp.json())
          .then(data => {
            this.setState({
            resources: data,
            resourceMainDisplayed: true
          }, console.log(data))
        })
      })
  }

  logout = () => {
    this.setState({
      signupDisplayed: true,
      resourceMainDisplayed: false
    })
  }

  getLogin = () => {
    this.setState({
      signupDisplayed: false,
      loginDisplayed: true,
      questionPageDisplayed: false,
      resourceMainDisplayed: false
    })
  }

  getUserCategories = category => {
    this.setState({
      categories:[...this.state.categories, category]
    })
  }

  filterUserResources = resources => {
    console.log("Need to connect and filter resources")
    /* somehow connect the users categories to the resource categories and then render the associated resources */
  }

  saveUserResource = resource => {
    if(!this.state.currentUser.resources.find( saved => saved.id === resource.id)){
      this.setState({
        currentUser: {...this.state.currentUser,
          resources: [...this.state.currentUser.resources, resource]
        }
      })
      console.log(this.state.currentUser.resources)
      return fetch(`http://localhost:3000/users/${this.state.currentUser.id}/resources/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user_id: this.state.currentUser.id,
          resource_id: resource.id
        })
      }).then(console.log)
    } else {
      alert("This resource is already saved.")
    }
  }

  render() {
    const { currentUser, signupDisplayed, loginDisplayed, resourceMainDisplayed, questionPageDisplayed, showQuestionPrompt, resources, categories } = this.state;
    return (
      <div className="App">
        <Header currentUser={currentUser} logout={this.logout}/>
        { signupDisplayed ? <Signup signup={this.signup} getLogin={this.getLogin}/> : null}
        { questionPageDisplayed ?
        <QuizOptionPage currentUser={currentUser} resources={resources} categories={categories} getUserCategories={this.getUserCategories} getLogin={this.getLogin} />
          : null }
        { resourceMainDisplayed ? <ResourceMainContainer currentUser={currentUser} resources={resources} categories={categories} saveUserResource={this.saveUserResource}/> : null}
        { loginDisplayed ?
          <Login login={this.login}/>
          : null }

      </div>
    );
  }
}

export default App;
