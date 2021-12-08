import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import { logOutUser } from '../actions/logOutUser';
import Logo from '../images/Logo.jpeg'
import { Container, Nav, Navbar } from 'react-bootstrap';


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
       

         
        
        <>
          {this.props.currentUser ? 
            <Nav className="nav-style" fill >
              
                <Navbar.Brand><img className="logo" src={Logo}/> </Navbar.Brand>
              <Nav.Item> <h1 className="nav-button" onClick={this.handleCreatePost}>  Create Post </h1> </Nav.Item>
              <Nav.Item> <h1 className="nav-button" onClick={this.handleShowYourPosts}>Your Posts</h1></Nav.Item>
              <Nav.Item> <h1 className="nav-button" onClick={this.handleDirectToFeed}> Feed </h1></Nav.Item>
              <Nav.Item> <h1 className="nav-button" onClick={this.handleLogOut}>Sign Out </h1> </Nav.Item>
            </Nav>
          :
          null
          }
          </>
    

        // <>

        //   {this.props.currentUser ? 
        //     >
        //       <img className="logo" src={Logo}/> 
        //       className="nav-button"  type="button" className="btn btn-secondary" onClick={this.handleCreatePost} >Create Post</button>
        //        type="button" className="btn btn-secondary" onClick={this.handleDirectToFeed} >Feed</button>
        //        type="button" className="btn btn-secondary" onClick={this.handleShowYourPosts} >View Your Posts</button>
        //       className="nav-button" type="button" className="btn btn-light" onClick={this.handleLogOut}>Sign Out </button>
        //     </div>
        //     :
        //     null
        //   } 
        //   </>
          
          
        
     
  
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