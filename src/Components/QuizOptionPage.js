import React, { Component } from 'react'
import Quiz from './Quiz'
import ResourceMainContainer from '../Containers/ResourceMainContainer'

class QuizOptionPage extends Component {

  state = {
    takeQuiz: null,
    showQuestionPrompt: true
  }

  handleQuizClick = e => {
    this.setState({takeQuiz: true, showQuestionPrompt: false})
  }

  handleResourceClick = e => {
    this.setState({takeQuiz: false, showQuestionPrompt: false})
  }

  render(){
    return(
      <div>
        { this.state.showQuestionPrompt ?
          <div>
          <h1>Hello {this.props.currentUser.username}!</h1>
          <p>Welcome to Houston Helper! This app was created to help you and/or your loved ones find resources in your time of need. In order to better assist you with that search, we would like you to answer a few questions to help identify which resources may directly impact your life. If you skip the questions now, you will still have an opportunity to answer them later. Would you like to take the questionnaire? </p>

          <button onClick={this.handleQuizClick}>Yes, I will answer a few questions!</button>
          <br/>
          <button onClick={this.handleResourceClick}>No thanks. Take me directly to the resources.</button>
        </div>
        : null }
        { this.state.takeQuiz ?
          <Quiz categories={this.props.categories} getUserCategories={this.props.getUserCategories} resources={this.props.resources} saveUserCategory={this.props.saveUserCategory}/>
          : <ResourceMainContainer currentUser={this.props.currentUser} resources={this.props.resources} categories={this.props.categories}/>}
      </div>
    )
  }
}

export default QuizOptionPage;
