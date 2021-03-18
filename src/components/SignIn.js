import React from 'react'
import {connect} from 'react-redux'
import {signinUser} from '../actions/signinUser'
import {Form} from 'react-bootstrap'


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

           


            
        <div className="background">
            <div className="whitefont">
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <h1> Welcome to FlySpot</h1>
                <br></br>
                <h2> Please Log In</h2>
            </div>
           
            <br></br>
            <br></br>
            {this.state.error ? <h5 style={{color: "red"}}>{this.state.error}</h5> : null}
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input  name={'username'}  onChange={this.handleInputChange} value={this.state.username} placeholder="Enter your username"/> <br></br> <br></br>
                    <input  type="password" name={'password'}  onChange={this.handleInputChange} value={this.state.password} placeholder="Enter your password"/> <br></br> <br></br>
                </div>
                 <button type="submit" class="btn btn-secondary">Log In</button>
                 <button type="submit" onClick={this.redirectToSignUp} class="btn btn-secondary">Sign up</button>
            </form>
        </div>
        )
    }

}


const mapDispatchToProps = {
    signinUser: signinUser
}
 export default connect(null, mapDispatchToProps)(SignIn)