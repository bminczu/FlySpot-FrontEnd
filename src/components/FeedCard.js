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
        
        const {title, id, address, latitude, longitude, category, description, airspace } = this.props.post
        return(







                <div className="feed-card" class="container">
                
                    <div  class="col-md">
                <Card >
                    <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body className="feed-card" >
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                        <h1> {title}</h1>
                        <h2>{category}</h2>
                        <p>{description}</p>
                        {/* <p>Airspace Class: {airspace}</p>
                        <p>Address: {address}</p>
                        <p>Latitude:  {latitude}</p>
                        <p> Longitude: {longitude}</p> */}
                        </Card.Text>
                        <Button onClick={this.handleShowPost} id={id} variant="primary">View</Button>

                    </Card.Body>
                    </Card>
                   
                </div>
                </div>














        //     <div class="card">
        // <Card >
        //     <Card.Img variant="top" src="holder.js/100px180" />
        //         <Card.Body>
        //         <Card.Title>{title}</Card.Title>
        //         <Card.Text>
        //         <h1> {title}</h1>
        //         <h2>{category}</h2>
        //         <p>{description}</p>
        //         <p>Airspace Class: {airspace}</p>
        //         <p>Address: {address}</p>
        //         <p>Latitude:  {latitude}</p>
        //         <p> Longitude: {longitude}</p>
        //         </Card.Text>
        //         <Button onClick={this.handleShowPost} id={id} variant="primary">View</Button>

        //     </Card.Body>
        //     </Card>
            

            // </div>




        )
    }
}

const mapDispatchToProps = {
    selectPublicPost: selectPublicPost,
    selectPublicPostReviews: selectPublicPostReviews
}


export default connect(null, mapDispatchToProps)(withRouter(FeedCard))