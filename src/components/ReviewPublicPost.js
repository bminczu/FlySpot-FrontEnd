import {connect} from 'react-redux'
import React from 'react'
import {addReview} from '../actions/selectPublicPostReview'



class ReviewPublicPost extends React.Component{

    state = {
        comment: "",
        user_rating: ""
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
                user_rating: this.state.user_rating,
                post_id: this.props.selectPublicPost.id
            })
        })
        .then(response => response.json())
        .then( publicPostReview => {
            this.props.addReview(publicPostReview)
            this.props.history.push(`/showpost/${this.props.selectPublicPost.id}`)
        })
    }
    handleStarInput=(e)=>{
        let rating;
        if (e.target.value === "⭐") {
            rating = 1
        } else if (e.target.value === "⭐⭐") {
            rating = 2
        } else if (e.target.value === "⭐⭐⭐") {
            rating = 3
        } else if (e.target.value === "⭐⭐⭐⭐"){
            rating = 4
        } else if (e.target.value === "⭐⭐⭐⭐⭐") {
            rating = 5
        }
        this.setState({user_rating: rating})
    }
    render(){

        return(
            <div>
                
            <div  className="new-review">
                <form className="form" onSubmit={this.handleSubmit}>

                    <br></br>
                        <textarea class="form-control" onChange={this.handleInputChange} value={this.state.comment} name= {"comment"} placeholder="Leave some feedback" rows="3"></textarea> 
                        <br></br>
                     <select onChange={this.handleStarInput} value={this.state.rating} name= {"user_rating"} placeholder="Rating 1 to 5" class="form-control">
                        <option selected>Your rating out of 5</option>
                        <option>⭐</option>
                        <option>⭐⭐</option>
                        <option>⭐⭐⭐</option>
                        <option>⭐⭐⭐⭐</option>
                        <option>⭐⭐⭐⭐⭐</option>
                    </select>
                     <input type='submit' class="btn btn-secondary"  id={this.props.selectPublicPost.id} value="Submit" />
                </form>
             </div>
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