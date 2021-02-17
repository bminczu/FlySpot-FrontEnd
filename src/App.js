import React from 'react'
import {withRouter} from 'react-router-dom'
import {BrowserRouter } from 'react-router-dom';
import {Route, Switch} from 'react-router-dom'
import PostContainer from './components/PostContainer.js'
import NavBar from './components/NavBar'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Feed from './components/Feed'
import NewPostForm from './components/NewPostForm'
import EditPostForm from './components/EditPostForm'
import showPublicPost from './components/showPublicPost'
import ReviewPublicPost from './components/ReviewPublicPost'
import EditReviewForm from './components/EditReviewForm'
import {connect} from 'react-redux'
import {currentUser} from './actions/signinUser'
import './App.css';
import MapContainer from './components/MapContainer'


class App extends React.Component { 

  componentDidMount(){

    const token = localStorage.getItem('jwt_token')
    if (!token) {
        this.props.history.push('/signin')
    } else {

        const reqObj = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        fetch("http://localhost:3000/api/v1/current_user", reqObj)
        .then(response => response.json())
        .then(data => {
            this.props.currentUser(data.user)
            
        })
    }
  }


  render(){
    return(
   

      <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path="/your-posts" component={PostContainer} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/feed" component={Feed} />
          <Route exact path="/home/new-post" component={NewPostForm} />
          <Route exact path="/edit-your-post/:id" component={EditPostForm} />
          <Route exact path="/show-post/:id" component={showPublicPost} />
          <Route exact path="/review-post/:id" component={ReviewPublicPost} />
          <Route exact path="/edit-review/:id" component={EditReviewForm} />
          <Route exact path="/map" component={MapContainer} />
        </Switch> 
      </div>
 
   )
  }
}

const mapDispatchToProps = {
  currentUser: currentUser
}

export default connect(null, mapDispatchToProps)(withRouter(App));
