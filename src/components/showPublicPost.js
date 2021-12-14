import React from 'react' 
import {connect} from 'react-redux'
import {Button, Container, Col, Row} from 'react-bootstrap'
import {deleteReview} from '../actions/selectPublicPostReview'
import {selectReview}from '../actions/selectReview'
import ReviewCard from './ReviewCard'



class showPublicPost extends React.Component{
    
    renderReviews = () => {
        return this.props.selectPublicPostReviews.map(reviewObj => {
            return <ReviewCard key={reviewObj.id} review={reviewObj} />
        })
        
    }

    renderStars = () => {
        if (this.props.selectPublicPost.authors_rating === 1) {
            return "⭐" 
        } else if (this.props.selectPublicPost.authors_rating === 2) {
        return "⭐⭐" 
        } else if (this.props.selectPublicPost.authors_rating === 3) {
            return "⭐⭐⭐"
        } else if (this.props.selectPublicPost.authors_rating === 4) {
         return "⭐⭐⭐⭐" 
        } else if (this.props.selectPublicPost.authors_rating === 5) {
            return "⭐⭐⭐⭐⭐" }
    }
    render(){

        const {image_url, id, title, address, latitude, longitude, category, airspace, description, authors_rating, video} = this.props.selectPublicPost
      
  
     
        
        return(

            
        <Container>
               
            <Row>
                <Col>      
                    <div className="public-post-col">
                        <div className="public-post-contents">
                    <h1>{title}</h1>
                    <br></br>
                    <img width="400px" height="300px" src={image_url}></img>
                    <br></br>
                    <br></br>
                    <p>Author's Rating {this.renderStars()}</p>
                    <h5>Location Category:</h5>
                    <p>{category}</p>
                    <h5> Address: </h5>
                    <p>{address}</p>
                    <h5>Coordinates: </h5>
                    <p>{latitude} {longitude}</p>
                    <h5>Airspace Classification:</h5><p>{airspace}</p>
                    <p> {description}</p>
                    <br></br>
                    </div>
                    </div>
                </Col>
                <Col>
                    <div className="reviews-container"> 

                        <h1 className="reviews-heading" >Comments</h1>
                        <div >{this.renderReviews()} </div>
                        <Button className="btn btn-secondary" onClick={()=> this.props.history.push(`/reviewpost/${id}`)} id={id}>Leave Feedback </Button> 
                    </div>
                
                </Col>
            </Row>
        </Container>
        
       

        )
    }

}

    const mapStateToProps = (state) => {
        return {
            selectPublicPost: state.selectPublicPost,
            selectPublicPostReviews: state.selectPublicPostReviews,
            currentUser: state.currentUser
           
        }
    }

    const mapDispatchToProps = {
        deleteReview: deleteReview,
        selectReview: selectReview
    }


export default connect(mapStateToProps, mapDispatchToProps)(showPublicPost)