import React from 'react' 
import {Card, Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {selectMyPost} from '../actions/selectMyPost'
import {withRouter} from 'react-router-dom'

class PostCard extends React.Component{

    redirectToEdit = (e) => {
        this.props.selectMyPost(this.props.post)
        this.props.history.push(`/edit-your-post/${e.target.id}`)
        
    }

    render(){
        
        const {title, id, address, latitude, longitude, category, description, airspace } = this.props.post
        return(


            <div className="feed-card" class="container">
        <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body className="feed-card">
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                <h1> {title}</h1>
                <h2>{category}</h2>
                <p>{description}</p>
                <p>Airspace Class: {airspace}</p>
                <p>Address: {address}</p>
                <p>Latitude:  {latitude}</p>
                <p> Longitude: {longitude}</p>
                </Card.Text>
                <Button onClick={this.redirectToEdit} id={id} variant="btn btn-secondary">Edit</Button>
            </Card.Body>
            </Card>
            
            

            </div>




        )
    }
}

const mapDispatchToProps = {

    selectMyPost: selectMyPost
}

export default connect(null, mapDispatchToProps)(withRouter(PostCard))