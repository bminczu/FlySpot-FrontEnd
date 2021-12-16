import React from 'react' 
import {Card, Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {selectMyPost} from '../actions/selectMyPost'
import {withRouter} from 'react-router-dom'
import {deletePost} from '../actions/createPost'

class PostCard extends React.Component{

    redirectToEdit = (e) => {
        this.props.selectMyPost(this.props.post)
        this.props.history.push(`/edityourpost/${e.target.id}`)
        
    }

    handleDeletePost = (e) => {
        const id = parseInt(e.target.id)
       
        fetch(`https://flyspot-backend.herokuapp.com/posts/${id}`, {
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

            <div> 
                
                <div className="feed-card">
                    <Card style={{ width: '30rem'}}>
                    <Card.Header><h1>{title}</h1></Card.Header>
                    <Card.Img variant="top" src={image_url} />
                        <Card.Body className="feed-card">
                            <Card.Text>
                            <h3>Location Category: {category}</h3>
                            <br></br>
                            <h3>Address: </h3>
                            <p>{address}</p>
                            <h3>Description: </h3>
                            <p>{description}</p>
                            <h4>Airspace: </h4>
                            <p>{airspace}</p>
                        
                            <h4>Coordinates:</h4>
                            <p>{latitude} {longitude}</p>
                            </Card.Text>
                            <br></br>
                        </Card.Body>
                            <Button onClick={this.redirectToEdit} id={id} variant="btn btn-secondary">Edit</Button> 
                            <Button variant="btn btn-secondary" id={id}  onClick={this.handleDeletePost}> Delete </Button>
                    </Card>
                        
                </div>
                
            </div>





        )
    }
}

const mapDispatchToProps = {

    selectMyPost: selectMyPost,
    deletePost: deletePost
}

export default connect(null, mapDispatchToProps)(withRouter(PostCard))