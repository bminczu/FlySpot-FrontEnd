import React from 'react' 
import {Card, Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {selectMyPost} from '../actions/selectMyPost'
import {withRouter} from 'react-router-dom'
import {deletePost} from '../actions/createPost'

class PostCard extends React.Component{

    redirectToEdit = (e) => {
        this.props.selectMyPost(this.props.post)
        this.props.history.push(`/edit-your-post/${e.target.id}`)
        
    }

    handleDeletePost = (e) => {
        const id = parseInt(e.target.id)
       
        fetch(`http://localhost:3000/posts/${id}`, {
            method: "DELETE"
          
        })
        .then(resp => resp.json())
        .then(() => {
            this.props.deletePost(id)
         console.log(id)
        
        })
    }


    render(){
        
        const {image_url, title, id, address, latitude, longitude, category, description, airspace } = this.props.post
        return(


    <div className="feed-card">
        <Card style={{ width: '30rem'}}>
        <Card.Header><h1>{title}</h1></Card.Header>
        <Card.Img variant="top" src={image_url} />
            <Card.Body className="feed-card">
                <Card.Text>
                <h2>Location Category: {category}</h2>
                <br></br>
                <h3>Address: {address}</h3>
                <h3>Description: {description}</h3>
                <h4>Airspace Class: {airspace}</h4>
                <h4>Latitude & Longitude: {latitude} {longitude}</h4>
                </Card.Text>
                <br></br>
            </Card.Body>
                <Button onClick={this.redirectToEdit} id={id} variant="btn btn-secondary">Edit</Button> 
                <Button variant="btn btn-secondary" id={id}  onClick={this.handleDeletePost}> delete </Button>
            </Card>
            
        
            </div>




        )
    }
}

const mapDispatchToProps = {

    selectMyPost: selectMyPost,
    deletePost: deletePost
}

export default connect(null, mapDispatchToProps)(withRouter(PostCard))