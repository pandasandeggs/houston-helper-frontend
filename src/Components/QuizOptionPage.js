import React, { Component } from 'react'
import Quiz from './Quiz'
import ResourceMainContainer from '../Containers/ResourceMainContainer'
import '../Stylesheets/Quiz.css'

class QuizOptionPage extends Component {

  state = {
    takeQuiz: false,
    showQuestionPrompt: true,
    showResources: false
  }

  handleQuizClick = e => {
    this.setState({takeQuiz: true, showQuestionPrompt: false, showResources: false})
  }

  handleResourceClick = e => {
    this.props.getHome()
    this.setState({takeQuiz: false, showQuestionPrompt: false, showResources: true})
  }

  currentRenderedPage = () => {
    const { takeQuiz, showQuestionPrompt, showResources } = this.state;

    if(showQuestionPrompt === true){
      return <section id="team" className="container">
      <header className="major"><h2>Hello {this.props.currentUser.username}!</h2></header>
      <p className="byline">Welcome to Houston Helper! This app was created to help you and/or your loved ones find resources in your time of need. In order to better assist you with that search, we would like you to answer a few questions to help identify which resources may directly impact your life. You may fill out the form for yourself or on another persons behalf. If you skip the questions now, you will still have an opportunity to answer them later. Would you like to take the questionnaire? </p><br/>
      <button className="quiz-button" onClick={this.handleQuizClick}>Answer questions!</button>
      <br/><br/>
      <button id="switch" className="quiz-button" onClick={this.handleResourceClick}>View resources!</button>
      </section>
    } else if(takeQuiz === true){
      return <Quiz categories={this.props.categories} getUserCategories={this.props.getUserCategories} resources={this.props.resources} questions={this.props.questions} answers={this.props.answers} saveUserCategory={this.props.saveUserCategory} getHome={this.props.getHome}/>
    } else if(showResources === true){
      return <ResourceMainContainer currentUser={this.props.currentUser} resources={this.props.resources} categories={this.props.categories}/>
    }

  }

  render(){
    return(
      <div className="wrapper style5">
        { this.currentRenderedPage() }
      </div>
    )
  }
}

export default QuizOptionPage;
