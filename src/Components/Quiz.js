import React, { Component } from 'react'

class Quiz extends Component {

  constructor(){
    super();
    this.state = {
      category_ids: {}
    }
  }

  handleClick = (question_id, category_id) => {
    if(!Object.values(this.state.category_ids).includes(category_id)){
      this.setState({ category_ids: { ...this.state.category_ids, [question_id]: category_id } })
    }
  }
  /* disable the other buttons too on click */

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.saveUserCategory(Object.values(this.state.category_ids))
    this.props.getHome()
  }

  getQuestions(){
    return this.props.questions.map( question => {
      return <div key={question.id}><fieldset>
          <legend>{question.content}</legend><br/>
          {this.getAnswers(question)}
        </fieldset></div>
    })
  }

  getAnswers = question => {
    let answers = this.props.answers.filter( answer => answer.question_id === question.id)
    return answers.map( answer => {
      return (
        <div key={answer.id}>
          <input type="radio" id={answer.id} value={answer.category_id} name={question.id} onClick={e => this.handleClick(question.id, answer.category_id)}/>
          <label>{answer.content}</label>
        </div>
      )
    })
  }

  render(){
    return(
      <div>
        <form onSubmit={ e => this.handleSubmit(e)}>
          <div>{this.getQuestions()}</div>
          <button type="submit">Finished</button>
        </form>
      </div>
    )
  }

}

export default Quiz;
