import React, { Component } from 'react'

class Quiz extends Component {

  constructor(){
    super();
    this.state = {
      categories: []
    }
  }

  handleClick = e => { debugger }
/* disable the other buttons too on click */
/* this.setState({ categories: [...this.state.categories, e.target.value]})*/

  handleSubmit = e => {
    e.preventDefault();
    this.props.saveUserCategory()
  }

  getQuestions(){
    console.log("Questions?", this.props.questions)
    return this.props.questions.map( question => {
      return <div><fieldset>
          <legend>{question.content}</legend><br/>
          {this.getAnswers(question)}
        </fieldset></div>
    })
  }

  getAnswers = question => {
    return this.props.answers.map( answer => {
      if(answer.question_id === question.id){
        return <div>
          <input type="radio" id={answer.id} value={answer.content} name={answer.content} onClick={e => this.handleClick(e)}/>
          <label>{answer.content}</label>
        </div>
      }
    })
  }

  render(){
    return(
      <div>
        <form>
          <div>{this.getQuestions()}</div>
          <button onSubmit={ e => this.handleSubmit(e)} type="submit">Finished</button>
        </form>
      </div>
    )
  }

}

export default Quiz;
