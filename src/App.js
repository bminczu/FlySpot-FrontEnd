import React from 'react'
import {BrowserRouter } from 'react-router-dom';
import {Route, Switch} from 'react-router-dom'
import PostContainer from './components/PostContainer.js'
import NavBar from './components/NavBar'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

import './App.css';

class App extends React.Component { 


  render(){
    return(
   
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path="/home" component={PostContainer} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          {/* <Route exact path="/home/new" component={TaskForm} />
          <Route exact path="/home/:id" component={ShowCard} />
          <Route exact path="/home/edit/:id" component={UpdateTaskForm} /> */}
        </Switch> 
      </div>
 </BrowserRouter>
   )
  }
}


export default App;
