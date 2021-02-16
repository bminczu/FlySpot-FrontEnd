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


    componentDidMount(){
        fetch(`http://localhost:3000/posts/${this.props.selectPublicPost.id}`)
    
        .then(console.log)
    }

    renderReviews = () => {
        return this.props.selectPublicPostReviews.map(reviewObj => {
            return <ReviewCard key={reviewObj.id} review={reviewObj} />
        })
        
    }
    render(){

        const {id, title, address, latitude, longitude, category, airspace, description, authors_rating, video} = this.props.selectPublicPost
      
  
     
        
        return(

            
        <Container>
                <br></br>
                <br></br>
            <Row>
                <Col>      
                    <div>
                    <h1>{title}</h1>
                    <h5>Location Type: {category}</h5>
                    <p>Latitude & Longitude: {latitude} {longitude}</p>
                    <p> Address: {address}</p>
                    <p>Airspace CLassification: {airspace}</p>
                    <p>{description}</p>
                    <p>{authors_rating}</p>
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