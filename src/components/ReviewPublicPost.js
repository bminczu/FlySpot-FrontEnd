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
                user_rating: this.state.rating,
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
            <div>
                <img src="src/images/BackgroundForMod5 2.jpg" id="bg" alt=""></img>
            <div  className="new-review">
                <form className="form" onSubmit={this.handleSubmit}>

                    <br></br>
                        <textarea class="form-control" onChange={this.handleInputChange} value={this.state.comment} name= {"comment"} placeholder="Leave some feedback" rows="3"></textarea> 
                        <br></br>
                     {/* <input   onChange={this.handleInputChange} value={this.state.comment}  name= {"comment"} placeholder="Leave somme feedback.."/><br></br> <br></br> */}
                     {/* <input  onChange={this.handleInputChange} value={this.state.rating} name= {"rating"} placeholder="Rating 1 to 5"/><br></br> <br></br> */}
                     <select onChange={this.handleInputChange} value={this.state.rating} name= {"rating"} placeholder="Rating 1 to 5" class="form-control">
                        <option selected>Your rating out of 5</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                     <input type='submit' class="btn btn-secondary"  id={this.props.selectPublicPost.id} value="Update Post" />
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