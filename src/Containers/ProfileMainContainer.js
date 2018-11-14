import React, { Component } from 'react';
import '../Stylesheets/Profile.css';
import ProfileResourceList from './ProfileResourceList'
import ProfileDisplay from '../Components/ProfileDisplay'
import ProfileEditForm from '../Components/ProfileEditForm'

class ProfileMainContainer extends Component {

  state ={
    chosenResource: null,
    showEditForm: false
    }

  handleResourceClick = resource => {
    this.setState({
      chosenResource: resource
      /* This function needs to make the document modal pop up */
    })
  }

  handleEditFormClick = () => {
    this.setState({
      showEditForm: true
    })
  }
  /* Also need another function to delete resource from user resources*/

  hideEditForm = () => {
    this.setState({
      showEditForm: false
    })
  }

  render(){
    return(
      <div id="main" class="wrapper style4">
  			<div class="container">
    			<div class="row">
            <div id="sidebar" className="8u skel-cell-important">
              <section>
                {this.state.showEditForm ?
                  <div><header className="major"><h1>Edit Profile</h1></header>
                  <ProfileEditForm currentUser={this.props.currentUser} categories={this.props.categories}
                  resources={this.props.resources}
                  questions={this.props.questions}
                  answers={this.props.answers}
                  saveUserCategory={this.props.saveUserCategory} editUserProfile={this.props.editUserProfile} getHome={this.props.getHome} hideEditForm={this.hideEditForm}/></div>
                  : <div><header className="major"><h1>My Profile</h1></header>
                  <ProfileDisplay currentUser={this.props.currentUser} categories={this.props.categories} handleEditFormClick={this.handleEditFormClick} /></div>
                }
              </section>
            </div>
            <div id="content" className="4u">
              <section>
                <header class="major"><h1>My Resources</h1></header><br/>
                <ul><ProfileResourceList currentUser={this.props.currentUser} categories={this.props.categories}
                resources={this.props.resources} deleteUserResourceFromCard={this.props.deleteUserResourceFromCard}
                />
                </ul>
              </section>
            </div>
              <div className="wrapper style5">
                Developed By: Chantal Wallace
              </div>
          </div>
        </div>
      </div>
    )
  }

}

export default ProfileMainContainer;
