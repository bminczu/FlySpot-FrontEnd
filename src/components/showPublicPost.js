import React from 'react' 
import {connect} from 'react-redux'
import {Button, Container, Col, Row, Card} from 'react-bootstrap'
import {deleteReview, selectPublicPostReviews} from '../actions/selectPublicPostReview'
import {selectReview}from '../actions/selectReview'
import ReviewCard from './ReviewCard'



class showPublicPost extends React.Component{
    
    handleEdit = (e) => {
        console.log(e.target)
    }



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
                <br></br>
                <br></br>
            <Row>
                <Col>      
                    <div>
                    <h1>{title}</h1>
                    <img width="400px" height="300px" src={image_url}></img>
                    <h5>Location Type: {category}</h5>
                    <p>Latitude & Longitude: {latitude} {longitude}</p>
                    <p> Address: {address}</p>
                    <p>Airspace CLassification: {airspace}</p>
                    <p>Description: {description}</p>
                    <p>Author's Rating{this.renderStars()}</p>
                    </div>
                </Col>
                <Col>
                <h1>Comments</h1>
                <Card body>{this.renderReviews()} </Card>
                <Button className="btn btn-secondary" onClick={()=> this.props.history.push(`/review-post/${id}`)} id={id}>Leave Feedback </Button> 
                
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