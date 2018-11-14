import React, { Component } from 'react'
import Quiz from './Quiz'
import ResourceMainContainer from '../Containers/ResourceMainContainer'
import '../Stylesheets/Quiz.css'

class QuizOptionPage extends Component {

  state = {
    takeQuiz: false,
    showQuestionPrompt: true
  }

  handleQuizClick = e => {
    this.setState({takeQuiz: true, showQuestionPrompt: false})
  }

  handleResourceClick = e => {
    this.props.getHome()
    this.setState({takeQuiz: false, showQuestionPrompt: false})
  }

  render(){
    return(
      <div>
        { this.state.showQuestionPrompt ?
          <div className="quiz-prompt">
          <h1>Hello {this.props.currentUser.username}!</h1>
          <h4>Welcome to Houston Helper! This app was created to help you and/or your loved ones find resources in your time of need. In order to better assist you with that search, we would like you to answer a few questions to help identify which resources may directly impact your life. You may fill out the form for yourself or on another persons behalf. If you skip the questions now, you will still have an opportunity to answer them later. Would you like to take the questionnaire? </h4>

          <button className="button" onClick={this.handleQuizClick}>Answer questions!</button>
          <br/>
          <button className="button" onClick={this.handleResourceClick}>View resources!</button>
        </div>
        : null }
        { this.state.takeQuiz ?
          <Quiz categories={this.props.categories} getUserCategories={this.props.getUserCategories} resources={this.props.resources} questions={this.props.questions} answers={this.props.answers} saveUserCategory={this.props.saveUserCategory} getHome={this.props.getHome}/>
          : <ResourceMainContainer currentUser={this.props.currentUser} resources={this.props.resources} categories={this.props.categories}/>}
      </div>
    )
  }
}

export default QuizOptionPage;
