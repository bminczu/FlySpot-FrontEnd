import React from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
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
       

        <div className="nav-div">
        <nav className="navbar navbar-light bg-light">
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
        </nav>
      </div>









        // <div className="nav-div">
        //   {this.props.currentUser ? 
        // <Container fluid>
        // <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">

        //   <Col className="text-center" lg={3}>
        //   <button  type="button" className="btn btn-secondary" onClick={this.handleCreatePost} >Create Post</button>
        //   </Col>

        //   <Col className="text-center" lg={3}>
        //   <button  type="button" className="btn btn-secondary" onClick={this.handleDirectToFeed} >Feed</button>
        //   </Col>

        //   <Col className="text-center" lg={3}>
        //   <button  type="button" className="btn btn-secondary" onClick={this.handleShowYourPosts} >View Your Posts</button>
        //   </Col>

        //   <Col className="text-center" lg={3}>
        //   <button type="button" className="btn btn-light" onClick={this.handleLogOut}>Sign Out</button>
        //   </Col>
        //   </Navbar>
        //   </Container>
        //   :
        //   null}
        //   </div>

       
  
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