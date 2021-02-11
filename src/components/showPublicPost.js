import React from 'react' 
import {connect} from 'react-redux'
import {Button, Container, Col, Row, Card} from 'react-bootstrap'
import selectPublicPostReview from '../reducers/selectPublicPostReviews'


class showPublicPost extends React.Component{
    
   

    renderReviews = () => {
        // replace selectpublicPosts.reviews with new reducer selectPublicPostReviews 
        return this.props.selectPublicPostReviews.map(reviewObj => {
            return <Card> 
                {reviewObj.user_rating} <br></br>
                {reviewObj.comment} <br></br>
                
                 </Card>
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
                <Button onClick={()=> this.props.history.push(`/review-post/${id}`)} id={id}>Leave Feedback </Button> 
                
                </Col>
            </Row>
        </Container>
        
       

        )
    }

}

    const mapStateToProps = (state) => {
        return {
            selectPublicPost: state.selectPublicPost,
            selectPublicPostReviews: state.selectPublicPostReviews
            // insert new reducer selectPublicPostReviews
        }
    }
    // const mapDispatchToProps = {
    //     selectPublicPost: selectPublicPost
    // }


export default connect(mapStateToProps, null)(showPublicPost)