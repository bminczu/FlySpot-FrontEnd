import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import { logOutUser } from '../actions/logOutUser';


class NavBar extends React.Component{ 

    handleLogOut = () => {
      this.props.logOutUser()
      this.props.history.push("/signin")
      
    }
    handleCreatePost = () => {
      this.props.history.push('/home/new-post')
    }
    
    handleShowYourPosts = () => {
      this.props.history.push('/your-posts')
    }

    handleDirectToFeed = () => {
      this.props.history.push('/feed')
    }
    render(){
    
    
      return (
       
        // <div class="container-fluid">
        <div className="nav-div">
        <nav className="navbar navbar-light bg-light">
          {this.props.currentUser ? 
          <div>
          <button  type="button" className="btn btn-secondary" onClick={this.handleCreatePost} >Create Post</button>
          <button  type="button" className="btn btn-secondary" onClick={this.handleDirectToFeed} >Feed</button>
          <button  type="button" className="btn btn-secondary" onClick={this.handleShowYourPosts} >View Your Posts</button>
          <button type="button" className="btn btn-light" onClick={this.handleLogOut}>Sign Out</button>
          </div>
          :
          null
        } 
        </nav>
      </div>
      // </div> 
       
       
       );
      };
    }
    
    const mapDispatchToProps = {
      logOutUser: logOutUser
    }
    
    const mapStateToProps = (state) => {
      return{
      currentUser: state.currentUser
      }
    }
    
    export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBar))