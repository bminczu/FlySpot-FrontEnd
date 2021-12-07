import React from 'react'
import {connect} from 'react-redux'
import {signinUser} from '../actions/signinUser'
import {Form, Button} from 'react-bootstrap'



class SignIn extends React.Component{

    state = {
        username: "",
        password: "",
        error: " "
        
    }

redirectToSignUp = () => {
    this.props.history.push('/signup')
} 

handleInputChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

handleSubmit = (e) => {
    e.preventDefault()

    const reqObj = { 
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(this.state)
    }
    fetch('http://localhost:3000/api/v1/auth', reqObj)
    .then(resp => resp.json())
    .then(userObj => {           
        if (userObj.error){
            this.setState({
                error: userObj.error
        })
    } else { 
        localStorage.setItem("jwt_token", userObj.token)
       this.props.signinUser(userObj.user)
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
            {this.state.error ? <h5 className="login-error">{this.state.error}</h5> : null}
            <Form className="login-form" onSubmit={this.handleSubmit}>

                <h2 className="please-login"> Please Log In</h2>
                
                <Form.Control name={'username'}  onChange={this.handleInputChange} value={this.state.username} placeholder="Enter your username"/> <br></br> <br></br>
                <Form.Control  type="password" name={'password'}  onChange={this.handleInputChange} value={this.state.password} placeholder="Enter your password"/> <br></br> <br></br>
                <Button type="submit" className="btn-secondary btn-lg" style={{width: 5.5 + "em"}}>Log In</Button>
                <Button style={{marginRight: "220px"}} type="submit" onClick={this.redirectToSignUp} className=" btn-secondary btn-lg" style={{width: 5.5 + "em"}}>Sign up</Button>
            </Form>
        </div>
        
        )
    }

}


const mapDispatchToProps = {
    signinUser: signinUser
}
 export default connect(null, mapDispatchToProps)(SignIn)