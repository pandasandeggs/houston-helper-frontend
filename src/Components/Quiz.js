import React, { Component } from 'react'

class Quiz extends Component {

  constructor(){
    super();
    this.state = {
      category_ids: []
    }
  }

  handleClick = e => {
    this.setState({ category_ids: [...this.state.category_ids, e.target.value]})
  }
  /* disable the other buttons too on click */


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.saveUserCategory(this.state.category_ids)
    this.props.getHome()
  }

  getQuestions(){
    console.log("Questions?", this.props.questions)
    return this.props.questions.map( question => {
      return <div key={question.id}><fieldset>
          <legend>{question.content}</legend><br/>
          {this.getAnswers(question)}
        </fieldset></div>
    })
  }

  getAnswers = question => {
    return this.props.answers.map( answer => {
      if(answer.question_id === question.id){
        return <div key={answer.id}>
          <input type="radio" id={answer.id} value={answer.category_id} name={answer.content} onClick={e => this.handleClick(e)}/>
          <label>{answer.content}</label>
        </div>
      }
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
