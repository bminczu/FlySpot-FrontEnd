import React from 'react'
import {connect} from 'react-redux'
import { createPost } from '../actions/createPost'
import MapContainer from './MapContainer'
import {Button, Container, Col, Row, Card} from 'react-bootstrap'

class NewPostForm extends React.Component{

    state = {
        title: "",
        user_id: '',
        address: "",
        latitude: '',
        longitude: '',
        category: "",
        airspace: "",
        description: "",
        authors_rating: '',
        video: ''
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleNumberInputChange = (e) => {
        this.setState({
            [e.target.name]: parseInt(e.target.value)
        })
    }


    handleSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:3000/posts", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'},
            body: JSON.stringify({
                title: this.state.title,
                user_id: this.props.currentUser.id,
                address: this.state.address,
                latitude: this.state.latitude,
                longitude: this.state.longitude,
                category: this.state.category,
                airspace: this.state.airspace,
                description: this.state.description,
                authors_rating: this.state.authors_rating,
                video: this.state.video
            })
        })
        .then (response => response.json())
        .then(newPostObj => {
           
            this.props.createPost(newPostObj)
            this.props.history.push("/your-posts")
            
        })
    }
    render(){
        return(
            


            <Container>
            <br></br>
            <br></br>
        <Row>
            <Col>      
                <div>
                 <MapContainer/>
                 </div>
            </Col>
            <Col>
            <h1>New Post Details</h1>
            <form onSubmit={this.handleSubmit}>
        <input   onChange={this.handleInputChange} value={this.state.title}  name= {"title"} placeholder="Title Your Post"/><br></br> <br></br>
        <input  onChange={this.handleInputChange} value={this.state.address} name= {"address"} placeholder="Address"/><br></br> <br></br>
        <input  onChange={this.handleInputChange} value={this.state.latitude} name= {"latitude"} placeholder="Latitude"/><br></br> <br></br>
        <input  onChange={this.handleInputChange} value={this.state.longitude} name= {"longitude"} placeholder="Longitude"/><br></br> <br></br>
        <input  onChange={this.handleInputChange} value={this.state.category} name= {"category"} placeholder="Category"/><br></br> <br></br>
        <input  onChange={this.handleInputChange} value={this.state.airspace} name= {"airspace"} placeholder="Airspace"/><br></br> <br></br>
        <input  onChange={this.handleInputChange} value={this.state.description} name= {"description"} placeholder="Description"/><br></br> <br></br>
        <input  onChange={this.handleInputChange} value={this.state.authors_rating} name= {"authors_rating"} placeholder="Author's Rating"/><br></br> <br></br>
        <input  onChange={this.handleInputChange} value={this.state.video} name= {"video"} placeholder="Video Link"/><br></br> <br></br>
        <input type='submit' className="btn btn-secondary" value="Create New Post" />
        </form>
            
            </Col>
        </Row>
    </Container>



         )
    }
 }


const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser
    }
}

const mapDispatchToProps = { 
    createPost: createPost
}
export default connect(mapStateToProps, mapDispatchToProps)(NewPostForm)

