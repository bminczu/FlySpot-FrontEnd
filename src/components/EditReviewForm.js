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
            console.log(updatedReview)
            this.props.updateReview(updatedReview)
            this.props.history.goBack()
        })

    }

    render(){


        return(

            <div>
                <form className="form" onSubmit={this.handleSubmit}>
                     <input   onChange={this.handleInputChange} value={this.state.comment}  name= {"comment"} placeholder="Leave somme feedback.."/><br></br> <br></br>
                     <input  onChange={this.handleInputChange} value={this.state.rating} name= {"user_rating"} placeholder="Rating 1 to 5"/><br></br> <br></br>
                     <input type='submit' class="btn btn-info"  value="Update Post" />
                </form>
            </div>
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