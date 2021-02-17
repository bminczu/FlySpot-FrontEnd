import React from 'react'
import {connect} from 'react-redux'
import {updateReview} from '../actions/selectPublicPostReview'



class EditReviewForm extends React.Component{

    state = {
        comment: this.props.selectReview.comment,
        user_rating: this.props.selectReview.user_rating
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) =>{ 
        e.preventDefault()
        fetch(`http://localhost:3000/reviews/${this.props.selectReview.id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                
                comment: this.state.comment,
                user_rating: this.state.user_rating,
                
            })
        
        })
        .then(response => response.json())
        .then(updatedReview => {
            this.props.updateReview(updatedReview)
            this.props.history.goBack()
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


           
             <div  className="new-review">
                 <h1>Update your review..</h1>
                <form className="form" onSubmit={this.handleSubmit}>
                    <br></br>
                    <textarea class="form-control" onChange={this.handleInputChange} value={this.state.comment} name= {"comment"} placeholder="Leave some feedback" rows="3"></textarea> 
                    <br></br>
                    <select onChange={this.handleStarInput} value={this.state.user_rating} name= {"user_rating"} placeholder="Rating 1 to 5" class="form-control">
                        <option selected>Your rating out of 5</option>
                        <option>⭐</option>
                        <option>⭐⭐</option>
                        <option>⭐⭐⭐</option>
                        <option>⭐⭐⭐⭐</option>
                        <option>⭐⭐⭐⭐⭐</option>
                    </select>
                    <input type='submit' class="btn btn-secondary"  value="Update Post" />
                </form>
            </div>
       






            // <div>
                /* <form className="form" onSubmit={this.handleSubmit}>
                     <input   onChange={this.handleInputChange} value={this.state.comment}  name= {"comment"} placeholder="Leave somme feedback.."/><br></br> <br></br>
                     <input  onChange={this.handleInputChange} value={this.state.rating} name= {"user_rating"} placeholder="Rating 1 to 5"/><br></br> <br></br>
                     <input type='submit' class="btn btn-info"  value="Update Post" />
                </form>
            </div> */
        )

    }
}

const mapStateToProps = (state) => {
    return{

        selectReview: state.selectReview
    }

}

const mapDispatchToProps = {
    updateReview: updateReview
}

export default connect(mapStateToProps, mapDispatchToProps)(EditReviewForm)