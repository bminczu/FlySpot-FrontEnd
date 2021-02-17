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


            <div className="feed-card" class="container">
        <Card>
            <Card.Img variant="top"/>
            <Card.Body className="feed-card">
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                <img src={image_url} width="400px" height="300px"></img>
                <h1> {title}</h1>
                <h2>{category}</h2>
                <p>{description}</p>
                <p>Airspace Class: {airspace}</p>
                <p>Address: {address}</p>
                <p>Latitude:  {latitude}</p>
                <p> Longitude: {longitude}</p>
                </Card.Text>
                <Button onClick={this.redirectToEdit} id={id} variant="btn btn-secondary">Edit</Button> 
                <Button variant="btn btn-secondary" id={id}  onClick={this.handleDeletePost}> delete </Button>
            </Card.Body>
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