import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import { logOutUser } from '../actions/logOutUser';
import Logo from '../images/Logo.jpeg'


class NavBar extends React.Component{ 

    handleLogOut = () => {
      this.props.logOutUser()
      this.props.history.push("/signin")
      
    }
    handleCreatePost = () => {
      this.props.history.push('/home/newpost')
    }
    
    handleShowYourPosts = () => {
      this.props.history.push('/yourposts')
    }

    handleDirectToFeed = () => {
      this.props.history.push('/feed')
    }
    render(){
    
    
      return (
       

        
        <div className="navbar">
          {this.props.currentUser ? 
            <div>
              <img className="logo" src={Logo}/> 
              <button className="nav-button"  type="button" className="btn btn-secondary" onClick={this.handleCreatePost} >Create Post</button>
              <button  type="button" className="btn btn-secondary" onClick={this.handleDirectToFeed} >Feed</button>
              <button  type="button" className="btn btn-secondary" onClick={this.handleShowYourPosts} >View Your Posts</button>
              <button className="nav-button" type="button" className="btn btn-light" onClick={this.handleLogOut}>Sign Out </button>
            </div>
            :
            null
          } 
        </div>
     
  
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