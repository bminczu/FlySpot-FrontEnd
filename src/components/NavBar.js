import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'


class NavBar extends React.Component{ 

    handleSignOut = () => {
      this.props.SignOutUser()
      this.props.history.push("/signin")
      
    }
    handleCreateTask = () => {
      this.props.history.push('/home/new')
    }
    
    render(){
    
    
      return (
        
      <div className="NavButtons">
        <nav className="navbar navbar-light bg-light">
          {this.props.currentUser ? 
          <div>
          <button  type="button" className="btn btn-info" onClick={this.handleCreateTask} >Create Task</button>
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
    
    export default connect(mapStateToProps)(withRouter(NavBar))