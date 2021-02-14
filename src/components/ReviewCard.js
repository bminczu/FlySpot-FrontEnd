import React from 'react'
import {Card, Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import { currentUser } from '../actions/signinUser'
import {deleteReview} from '../actions/selectPublicPostReview'
import {selectReview}from '../actions/selectReview'
import {withRouter} from 'react-router-dom'

class ReviewCard extends React.Component{


     
    handleEdit = (e) => {
        // console.log(e.target)
        this.props.selectReview(this.props.review)
        this.props.history.push(`/edit-review/${this.props.review.id}`)
    }


    handleDeleteReview = (e) => {
        const id = parseInt(e.target.id)
        console.log(id)
        fetch(`http://localhost:3000/reviews/${id}`, {
            method: "DELETE"
          
        })
        .then(resp => resp.json())
        .then(() => {
            this.props.deleteReview(id)
         console.log(id)
            this.props.history.push(`/show-post/${this.props.selectPublicPost.id}`)
        })
    }


    render(){
            const {id, user_id, comment, user_rating} = this.props.review
        return(

                
            <Card> 
                 
                users rating: {user_rating}/5 ⭐s <br></br>
                {comment} <br></br>

                {user_id === this.props.currentUser.id ? 
                <div>
                <Button  onClick={this.handleEdit}>  edit post</Button>
                <Button id={id} onClick={this.handleDeleteReview}> delete </Button>
                </div>
                :
                null
                
            }
            </Card>
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