import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Signup from "./Components/Signup"
import Login from "./Components/Login"
import Header from "./Containers/Header"
import QuizOptionPage from "./Components/QuizOptionPage"
// import { BrowserRouter, Route, Link, NavLink, Switch, Redirect } from "react-router-dom";

class App extends Component {

  constructor(){
    super();
    this.state = {
      currentUser: null,
      signupDisplayed: true,
      loginDisplayed: false,
      resourceMainDisplayed: false,
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
            signupDisplayed: false
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
          .then(data => {this.setState({resources: data})
        })
      })
  }

  getUserCategories = category => {
    this.setState({
      categories:[...this.state.categories, category]
    })
  }

  filterUserResources = resources => {
    /* somehow connect the users categories to the resource categories and then render the associated resources */
  }

  showResources = resources => {
    if ({/*filterUserResources.length*/}){
      /* set state for resourceMainDisplayed to true and give me the resources pertaining to that user */
    } else {
      /* set state for resourceMainDisplayed to true and give me all the resources */
    }
  }

  render() {
    const { currentUser, signupDisplayed, loginDisplayed, resources, categories } = this.state;
    return (
      <div className="App">
        <Header />
        { signupDisplayed ?
          <Signup signup={this.signup}/>
          : <QuizOptionPage currentUser={currentUser} categories={categories} getUserCategories={this.getUserCategories}/>}

        { loginDisplayed ?
          <Login login={this.login}/>
          : ''}

      </div>
    );
  }
}

export default App;
