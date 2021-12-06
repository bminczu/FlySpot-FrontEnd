import React from 'react'
import {connect} from 'react-redux'
import {signUpUser} from '../actions/signUpUser'
import {Form, Button} from 'react-bootstrap'

class SignUp extends React.Component{

    state = {
        username: "",
        password: "",
        error: " "
        
    }

handleInputChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

handleSubmit = (e) => {
    e.preventDefault()

    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            username: this.state.username,
            password: this.state.password,
          
        })
    })
    .then(response => response.json())
    .then(newUserObj => {
        if (newUserObj.error){
            this.setState({
                error: newUserObj.error
            })
        } else {
           this.props.signUpUser(newUserObj)
           this.props.history.push("/feed")
        } 
    })
}



    render(){
        return(
        
            <div className="signin-container">

            <div className="welcome-container">
              
                <h1 className="welcome-banner"> Welcome to FlySpot! </h1>
                <h5 className="welcome-message">Share your favorite flying spots with the community!</h5>
               
            </div>

            <br></br>
            {this.state.error ? <h5 style={{color: "red"}}>{this.state.error}</h5> : null}
            <Form className="login-form" onSubmit={this.handleSubmit}>

                <h2>Please Create an Account</h2>
                
                    <Form.Control  name={"username"}  onChange={this.handleInputChange} value={this.state.username} placeholder="Enter unique username"/> <br></br> <br></br>
                    <Form.Control  type="password" name={'password'}  onChange={this.handleInputChange} value={this.state.password} placeholder="Enter your password"/> <br></br> <br></br>
                 
                 <Button type="submit" className=" btn-secondary btn-lg" style={{width: 12 + "em"}} >Create New User</Button>
      
    
            </Form>
        </div>
        )
    }

}



const mapDispatchToProps = {
    signUpUser: signUpUser
}
 export default connect(null, mapDispatchToProps)(SignUp)