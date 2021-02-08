import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'


class NavBar extends React.Component{ 

    handleSignOut = () => {
      this.props.SignOutUser()
      this.props.history.push("/signin")
      
    }
    handleCreatePost = () => {
      this.props.history.push('/home/new-post')
    }
    
    handleShowYourPosts = () => {
      this.props.history.push('/your-posts')
      
    }
    render(){
    
    
      return (
        
      <div className="NavButtons">
        <nav className="navbar navbar-light bg-light">
          {this.props.currentUser ? 
          <div>
          <button  type="button" className="btn btn-info" onClick={this.handleCreatePost} >Create Post</button>
          <button  type="button" className="btn btn-info" onClick={this.handleShowYourPosts} >View Your Posts</button>
          <button type="button" className="btn btn-light" onClick= {this.handleSignOut}>Sign Out</button>
          </div>
          :
          null
        } 
        </nav>
      </div>
       
       
       );
      };
    }
    
    
    
    const mapStateToProps = (state) => {
      return{
      currentUser: state.currentUser
      }
    }
    
    export default connect(mapStateToProps, null)(withRouter(NavBar))