import React from 'react'
import {BrowserRouter } from 'react-router-dom';
import {Route, Switch} from 'react-router-dom'
import PostContainer from './components/PostContainer.js'
import NavBar from './components/NavBar'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Feed from './components/Feed'
import NewPostForm from './components/NewPostForm'
import EditPostForm from './components/EditPostForm'

import './App.css';

class App extends React.Component { 


  render(){
    return(
   
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path="/your-posts" component={PostContainer} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/feed" component={Feed} />
          <Route exact path="/home/new-post" component={NewPostForm} />
          <Route exact path="/edit-your-post/:id" component={EditPostForm} />
        
        </Switch> 
      </div>
 </BrowserRouter>
   )
  }
}


export default App;
