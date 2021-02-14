import React from 'react'
import {connect} from 'react-redux'
import {signUpUser} from '../actions/signUpUser'

class SignUp extends React.Component{

    state = {
        username: "",
        password: "",
        error: " "
        
    }

    // directToFeed = () => {
    //     this.props.history.push('/feed')
    // }

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
            password_digest: this.state.password,
          
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
        <div className="background">
            <h2> Please Sign Up</h2>
            {this.state.error ? <h5 style={{color: "red"}}>{this.state.error}</h5> : null}
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input  name='username'  onChange={this.handleInputChange} value={this.state.username} placeholder="Enter unique username"/> <br></br> <br></br>
                    <input  name='password'  onChange={this.handleInputChange} value={this.state.password} placeholder="Enter your password"/> <br></br> <br></br>
                 </div>
                 <button type="submit" class="btn btn-secondary">Create User</button>
    
            </form>
        </div>
        )
    }

}



const mapDispatchToProps = {
    signUpUser: signUpUser
}
 export default connect(null, mapDispatchToProps)(SignUp)