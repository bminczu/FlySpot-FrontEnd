import React from 'react'
import {connect} from 'react-redux'
import {deleteReview} from '../actions/selectPublicPostReview'
import {selectReview}from '../actions/selectReview'
import {withRouter} from 'react-router-dom'

class ReviewCard extends React.Component{


     
    handleEdit = (e) => {
        this.props.selectReview(this.props.review)
        this.props.history.push(`/editreview/${this.props.review.id}`)
    }


    handleDeleteReview = (e) => {
        const id = parseInt(e.target.id)
        fetch(`https://flyspot-backend.herokuapp.com/reviews/${id}`, {
            method: "DELETE"
          
        })
        .then(resp => resp.json())
        .then(() => {
            this.props.deleteReview(id)
            this.props.history.push(`/showpost/${this.props.selectPublicPost.id}`)
        })
    }

    renderStars = () => {
        if (this.props.review.user_rating === 1) {
            return "⭐" 
        } else if (this.props.review.user_rating === 2) {
        return "⭐⭐" 
        } else if (this.props.review.user_rating === 3) {
            return "⭐⭐⭐"
        } else if (this.props.review.user_rating === 4) {
         return "⭐⭐⭐⭐" 
        } else if (this.props.review.user_rating === 5) {
            return "⭐⭐⭐⭐⭐" }
    }
    render(){
            const {id, user_id, comment} = this.props.review

        return(

                
            <div > 

                 <div className="review-card"> 

                Peer rating: { this.renderStars()}<br></br>
                <br></br>
                {comment} <br></br>

                {user_id === this.props.currentUser.id ? 
                <div>
                    <br></br>
                <p className="btn btn-secondary" onClick={this.handleEdit}>  Edit Your Review</p>
                <p className="btn btn-secondary" id={id} onClick={this.handleDeleteReview}> Delete Your Review </p>
                </div>
                :
                null
                
            }
            </div>
            </div>
        )
        
}
}

const mapStateToProps = (state) => {
    return{
        selectPublicPost: state.selectPublicPost,
        selectPublicPostReviews: state.selectPublicPostReviews,
        currentUser: state.currentUser
    }
}

const mapDispatchToProps = {
    deleteReview: deleteReview,
    selectReview: selectReview
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ReviewCard)) 