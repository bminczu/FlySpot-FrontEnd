import React from 'react' 
import {connect} from 'react-redux'
import {Button, Container, Col, Row, Card} from 'react-bootstrap'
import {deleteReview} from '../actions/selectPublicPostReview'



class showPublicPost extends React.Component{
    
   handleDeleteReview = (e) => {
    const id = e.target.id
    console.log(id)
    fetch(`http://localhost:3000/reviews/${id}`, {
        method: "DELETE"
      
    })
    .then(resp => resp.json())
    .then(() => {
        this.props.deleteReview(id)
        
        // this.props.history.push(`/show-post/${this.props.selectPublicPost.id}`)
    })
}

    renderReviews = () => {
        
        return this.props.selectPublicPostReviews.map(reviewObj => {
            if (reviewObj.user_id !== this.props.currentUser.id)
            return <Card> 
                    {reviewObj.user_rating} <br></br>
                    {reviewObj.comment} <br></br>
                    </Card>


            if (reviewObj.user_id == this.props.currentUser.id)
            return <Card> 
                
                users rating: {reviewObj.user_rating}/5 ⭐s <br></br>
                {reviewObj.comment} <br></br>
                <div><Button>edit post</Button>
                <Button id={reviewObj.id} onClick={this.handleDeleteReview}> delete </Button>
                </div>
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
        deleteReview: deleteReview
    }


export default connect(mapStateToProps, mapDispatchToProps)(showPublicPost)