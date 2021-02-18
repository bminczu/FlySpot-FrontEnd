import React from 'react'
import {Button, Container, Col, Row, Card} from 'react-bootstrap'
import {withRouter} from 'react-router-dom'
import { selectPublicPost } from '../actions/selectPublicPost'
import {connect} from 'react-redux'
import {selectPublicPostReviews} from '../actions/selectPublicPostReview'

class FeedCard extends React.Component{


    handleShowPost = (e) => {
        const id = e.target.id
        this.props.selectPublicPost(this.props.post)
        this.props.selectPublicPostReviews(this.props.post.reviews)
        this.props.history.push(`/show-post/${id}`)
    }

    renderStars = () => {
        if (this.props.post.authors_rating === 1) {
            return "⭐" 
        } else if (this.props.post.authors_rating === 2) {
        return "⭐⭐" 
        } else if (this.props.post.authors_rating === 3) {
            return "⭐⭐⭐"
        } else if (this.props.post.authors_rating === 4) {
         return "⭐⭐⭐⭐" 
        } else if (this.props.post.authors_rating === 5) {
            return "⭐⭐⭐⭐⭐" }
    }

    render(){
        
        const {image_url, authors_rating, title, id, address, latitude, longitude, category, description, airspace } = this.props.post
        return(







                
                


                <div className="feed-card">
                    <br></br>
                    <Card  style={{ width: '30rem'}}>
                    <Card.Header>{title}</Card.Header>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Body>
                        <Card.Text className="card-text">
                        <h5>{description}</h5>
                        <h5>Author's Rating{this.renderStars()}</h5>
                        </Card.Text>
                        <Button onClick={this.handleShowPost} id={id} variant="secondary">View</Button>
                    </Card.Body>
                    </Card>
                </div>
                  
               
          


        )
    }
}

const mapDispatchToProps = {
    selectPublicPost: selectPublicPost,
    selectPublicPostReviews: selectPublicPostReviews
}


export default connect(null, mapDispatchToProps)(withRouter(FeedCard))