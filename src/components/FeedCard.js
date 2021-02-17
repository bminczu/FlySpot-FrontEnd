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



    render(){
        
        const {image_url, title, id, address, latitude, longitude, category, description, airspace } = this.props.post
        return(







             <div className="feed-card" class="container">
                
                 <div  class="col-md">
                    <Card >
                        <Card.Body className="feed-card" >
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            <h1> {title}</h1>
                            <img src={image_url} width="400px" height="300px"></img>
                            <h2>{category}</h2>
                            <p>{description}</p>
                        </Card.Text>
                        <Button  className="btn btn-secondary" onClick={this.handleShowPost} id={id} >View</Button>
                    </Card.Body>
                    </Card>
                   
                </div>
            </div>


        )
    }
}

const mapDispatchToProps = {
    selectPublicPost: selectPublicPost,
    selectPublicPostReviews: selectPublicPostReviews
}


export default connect(null, mapDispatchToProps)(withRouter(FeedCard))