import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Signup from "./Components/Signup"
import Login from "./Components/Login"
import Header from "./Containers/Header"
import QuizOptionPage from "./Components/QuizOptionPage"
import ResourceMainContainer from "./Containers/ResourceMainContainer"
import ProfileMainContainer from "./Containers/ProfileMainContainer"

// import { BrowserRouter, Route, Link, NavLink, Switch, Redirect } from "react-router-dom";

class App extends Component {

  constructor(){
    super();
    this.state = {
      currentUser: null,
      signupDisplayed: localStorage.token ? false : true,
      loginDisplayed: false,
      resourceMainDisplayed: localStorage.token ? true : false,
      questionPageDisplayed: false,
      profilePageDisplayed: false,
      quizDisplayed: false,
      resources: [],
      categories: [],
      questions: [],
      answers:[]
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
              currentUser: data.user,
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
        }).then ( () => {
          const token = localStorage.token
          fetch('http://localhost:3000/categories', {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          }).then(resp => resp.json())
            .then(data => {
              this.setState({categories: data})
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
          localStorage.setItem('token', data.jwt);
          this.setState({
            currentUser: data.user,
            signupDisplayed: false,
            questionPageDisplayed: true,
            resourceMainDisplayed: false
          })
        } else {
          console.log("User was not successfully created.")
        }
      }).then(() => this.getQuestions(localStorage.token))
        .then(() => this.getAnswers(localStorage.token))
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
          localStorage.setItem('token', data.jwt);
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
          })
        })
      }).then ( () => {
        const token = localStorage.token
        fetch('http://localhost:3000/categories', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }).then(resp => resp.json())
          .then(data => {
            this.setState({
            categories: data,
            resourceMainDisplayed: true
          })
        })
      }).then(() => this.getQuestions(localStorage.token))
        .then(() => this.getAnswers(localStorage.token))
  }

  getQuestions = token => {
      fetch('http://localhost:3000/questions/index', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      }).then(resp => resp.json())
        .then(data => {
          this.setState({questions: data})
      })
  }

  getAnswers = token => {
    fetch('http://localhost:3000/answers/index', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }).then(resp => resp.json())
      .then(data => {
        this.setState({answers: data})
    })
  }

  logout = () => {
    this.setState({
      signupDisplayed: true,
      resourceMainDisplayed: false,
      profilePageDisplayed: false,
      questionPageDisplayed: false
    })
  }

  getLogin = () => {
    this.setState({
      signupDisplayed: false,
      loginDisplayed: true,
      questionPageDisplayed: false,
      resourceMainDisplayed: false,
      profilePageDisplayed: false
    })
  }

  getProfile = () => {
    this.setState({
      resourceMainDisplayed: false,
      profilePageDisplayed: true,
      questionPageDisplayed: false
    })
  }

  getHome = () => {
    this.setState({
      resourceMainDisplayed: true,
      profilePageDisplayed: false,
      questionPageDisplayed: false,
      quizDisplayed: false
    })
  }

  saveUserResource = resource => {
    const token = localStorage.token;
    if(!this.state.currentUser.resources.find( saved => saved.id === resource.id)){
      this.setState({
        currentUser: {...this.state.currentUser,
          resources: [...this.state.currentUser.resources, resource]
        }
      })
      return fetch(`http://localhost:3000/user_resources`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
          user_id: this.state.currentUser.id,
          resource_id: resource.id
        })
      }).then(resp => resp.json())
    } else {
      alert("This resource is already saved.")
    }
  }

  deleteUserResourceFromCard = id => {
    const selectedResource = this.state.currentUser.resources.findIndex( resource => resource.id === id)
    this.state.currentUser.resources.splice(selectedResource, 1)
    this.setState({
      currentUser: {...this.state.currentUser,
        resources: [...this.state.currentUser.resources]
      }
    })
  }

  saveUserCategory = categoryIds => {
    const token = localStorage.token;
    fetch(`http://localhost:3000/api/v1/users/${this.state.currentUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        user_id: this.state.currentUser.id,
        category_ids: categoryIds
        })
      })
      .then(resp => resp.json())
      .then( data => this.setState({ currentUser: data.user}))
  }

  editUserProfile = (username, email, password, confirmation) => {
    const token = localStorage.token;
    fetch(`http://localhost:3000/api/v1/users/${this.state.currentUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
        password_confirmation: confirmation
      })
    })
    .then(resp => resp.json())
    .then(data => this.setState({
      currentUser: data.user
    }))
  }

  currentRenderedPage = () => {

    const { currentUser, signupDisplayed, loginDisplayed, resourceMainDisplayed, questionPageDisplayed, profilePageDisplayed, resources, categories, questions, answers } = this.state;

    if(signupDisplayed === true){
      return <Signup signup={this.signup} getLogin={this.getLogin}/>
    } else if(loginDisplayed === true ){
      return <Login login={this.login}/>
    } else if(resourceMainDisplayed === true ){
      return <div><Header currentUser={this.state.currentUser} logout={this.logout} getProfile={this.getProfile} getHome={this.getHome}/>
      <ResourceMainContainer currentUser={currentUser} resources={resources} categories={categories} saveUserResource={this.saveUserResource}/></div>
    } else if(questionPageDisplayed === true ){
      return <div><Header currentUser={this.state.currentUser} logout={this.logout} getProfile={this.getProfile} getHome={this.getHome}/>
      <QuizOptionPage currentUser={currentUser} resources={resources} categories={categories}  getLogin={this.getLogin} saveUserCategory={this.saveUserCategory} questions={questions} answers={answers} getHome={this.getHome}/></div>
    } else if(profilePageDisplayed === true ){
      return <div><Header currentUser={this.state.currentUser} logout={this.logout} getProfile={this.getProfile} getHome={this.getHome}/>
      <ProfileMainContainer currentUser={currentUser} resources={resources} categories={categories} saveUserCategory={this.saveUserCategory}
      questions={questions}
      answers={answers} editUserProfile={this.editUserProfile} getHome={this.getHome} getProfile={this.getProfile} deleteUserResourceFromCard={this.deleteUserResourceFromCard}/></div>
    }

  }

  render() {
    return (
      <div className="App">
        { this.currentRenderedPage() }
      </div>
    );
  }
}

export default App;
