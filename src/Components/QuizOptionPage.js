import React, { Component } from 'react'
import Quiz from './Quiz'

class QuizOptionPage extends Component {

  state = {
    takeQuiz: null
  }

  handleQuizClick = e => this.setState({takeQuiz: true})

  handleResourceClick = e => this.setState({takeQuiz: false})

  render(){
    return(
      <div>
        <h1>Hello {this.props.currentUser.username}!</h1>
        <p>Welcome to Houston Helper! This app was created to help you and/or your loved ones find resources in your time of need. In order to better assist you with that search, we would like you to answer a few questions to help identify which resources may directly impact your life. If you skip it now, you will still have an opportunity to take it later. Would you like to take the questionnaire? </p>

        <button onClick={this.handleQuizClick}>Yes, I will answer a few questions!</button>
        <br/>
        <button onClick={this.handleResourceClick}>No thanks. Take me directly to the resources.</button>
        {this.state.takeQuiz ? <Quiz /> : ''}

      </div>
    )
  }
}

export default QuizOptionPage;
