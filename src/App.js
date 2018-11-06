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
      signupDisplayed: true,
      loginDisplayed: false,
      resourceMainDisplayed: false,
      questionPageDisplayed: false,
      profilePageDisplayed: false,
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
          }, console.log(data))
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
          this.setState({questions: data}, console.log("questions", data))
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
        this.setState({answers: data}, console.log("answers", data))
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

  getProfile = () => {
    this.setState({
      resourceMainDisplayed: false,
      profilePageDisplayed: true
    })
  }

  getHome = () => {
    this.setState({
      resourceMainDisplayed: true,
      profilePageDisplayed: false
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
      }).then(console.log)
    } else {
      alert("This resource is already saved.")
    }
  }

  saveUserCategory = state => {
    console.log("Female category object", this.state.categories)
    debugger
    /* When the form is submitted, hit a switch statement and don't break. Set State for each categories to be a copy of the current categories plus the category it equals. */


  }

  render() {
    const { currentUser, signupDisplayed, loginDisplayed, resourceMainDisplayed, questionPageDisplayed, profilePageDisplayed, showQuestionPrompt, resources, categories, questions, answers } = this.state;
    return (
      <div className="App">
        <Header currentUser={currentUser} logout={this.logout} getProfile={this.getProfile} getHome={this.getHome}/>
        { signupDisplayed ? <Signup signup={this.signup} getLogin={this.getLogin}/> : null}
        { questionPageDisplayed ?
        <QuizOptionPage currentUser={currentUser} resources={resources} categories={categories} getUserCategories={this.getUserCategories} getLogin={this.getLogin} saveUserCategory={this.saveUserCategory} questions={questions} answers={answers}/>
          : null }
        { resourceMainDisplayed ? <ResourceMainContainer currentUser={currentUser} resources={resources} categories={categories} saveUserResource={this.saveUserResource}/> : null}
        { loginDisplayed ?
          <Login login={this.login}/>
          : null }
        { profilePageDisplayed ? <ProfileMainContainer currentUser={currentUser} resources={resources} categories={categories} /> : null}
      </div>
    );
  }
}

export default App;
