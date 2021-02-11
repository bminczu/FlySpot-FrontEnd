import {connect} from 'react-redux'
import React from 'react'
import {addReview} from '../actions/selectPublicPostReview'



class ReviewPublicPost extends React.Component{

    state = {
        comment: "",
        rating: ""
    }
    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
         
        e.preventDefault()
        
        fetch("http://localhost:3000/reviews", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                user_id: this.props.currentUser.id,
                comment: this.state.comment,
                rating: this.state.rating,
                post_id: this.props.selectPublicPost.id
            })
        })
        .then(response => response.json())
        .then( publicPostReview => {
            this.props.addReview(publicPostReview)
            // call action that adds new review to selectPublicPostReview
            this.props.history.push(`/show-post/${this.props.selectPublicPost.id}`)
        })
    }

    render(){

        return(

            <div  className="new-post">
                <form className="form" onSubmit={this.handleSubmit}>
                     <input   onChange={this.handleInputChange} value={this.state.comment}  name= {"comment"} placeholder="Leave somme feedback.."/><br></br> <br></br>
                     <input  onChange={this.handleInputChange} value={this.state.rating} name= {"rating"} placeholder="Rating 1 to 5"/><br></br> <br></br>
                     <input type='submit' class="btn btn-info"  id={this.props.selectPublicPost.id} value="Update Post" />
                </form>
             </div>



        )
    }
}
const mapStateToProps = (state) => {
    return {
        selectPublicPost: state.selectPublicPost,
        currentUser: state.currentUser,
    }
}
const mapDispatchToProps = {
    addReview: addReview
}
export default connect(mapStateToProps, mapDispatchToProps)(ReviewPublicPost)