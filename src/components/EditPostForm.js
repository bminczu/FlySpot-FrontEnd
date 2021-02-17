import React from 'react'
import {connect} from 'react-redux'
import {updateMyPost} from '../actions/createPost'
import MapContainer from './MapContainer'
import {Button, Container, Col, Row, Card} from 'react-bootstrap'


class EditPostForm extends React.Component {
            state = {
                title: this.props.selectMyPost.title,
                user_id: this.props.selectMyPost.user_id,
                address: this.props.selectMyPost.address,
                latitude: this.props.selectMyPost.latitude,
                longitude: this.props.selectMyPost.longitude,
                category: this.props.selectMyPost.category,
                airspace: this.props.selectMyPost.airspace,
                description: this.props.selectMyPost.description,
                authors_rating: this.props.selectMyPost.authors_rating,
                video: this.props.selectMyPost.video
        
            }
        handleInputChange = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
        handleSubmit = (e) => {
         
            e.preventDefault()
        
            const id = e.target.id
            console.log(e.target)
            
            fetch(`http://localhost:3000/posts/${id}`, {
                method: "PATCH",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    title: this.state.title,
                    user_id: this.state.user_id,
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
            .then(response => response.json())
            .then(updatedPost => {
             
                this.props.updateMyPost(updatedPost)
                this.props.history.push('/your-posts')
            })
        }
        render(){

            
            return(
                <Container >
                <br></br>
                <br></br>
            <Row>
                <Col>      
                    <div>
                     <MapContainer/>
                     </div>
                </Col>
                <br></br>
                <Col>
                <div>
            <form onSubmit={this.handleSubmit}>
             <label for="inputAddress">Title Your Post</label>
                <input type="text" class="form-control" onChange={this.handleInputChange} value={this.state.title}  name= {"title"} placeholder="Title Your Post"/><br></br> <br></br>
                    <div class="form-row">
                    <div class="form-group col-md-6">
                        <input  class="form-control" onChange={this.handleInputChange} value={this.state.address} name= {"address"} placeholder="Address"/> 
                    <br></br>
                        <input  class="form-control" onChange={this.handleInputChange} value={this.state.latitude} name= {"latitude"} placeholder="Latitude"/>
                    <br></br>
                        <select onChange={this.handleInputChange} value={this.state.authors_rating} name= {"authors_rating"} placeholder="Author's Rating" class="form-control">
                            <option selected>Author's Rating</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                            </div><div class="form-group col-md-6">
                             <select onChange={this.handleInputChange} value={this.state.category} name= {"category"} placeholder="Category"class="form-control">
                            <option selected>Area Category</option>
                            <option>Urban</option>
                            <option>Nature</option>
                            <option>Industrial</option>
                            <option>Park</option>
                            <option>Other</option>
                         </select>
    
                    <br></br>
                        <input  class="form-control" onChange={this.handleInputChange} value={this.state.longitude} name= {"longitude"} placeholder="Longitude"/>
                    <br></br>
                    <select onChange={this.handleInputChange} value={this.state.airspace} name= {"airspace"} placeholder="Airspace" class="form-control">
                        <option selected>Select Airspace Classification</option>
                        <option>Class A</option>
                        <option>Class B</option>
                        <option>Class C</option>
                        <option>Class D</option>
                        <option>Class G</option>
                    </select>
                    <br></br>
                    <div class="form-group col-md-4">
                    </div>
                    </div>
                    
    
    
               
                    <textarea class="form-control" onChange={this.handleInputChange} value={this.state.description} name= {"description"} placeholder="Description" rows="3"></textarea> 
                    <br></br>
                    <input  class="form-control" onChange={this.handleInputChange} value={this.state.video} name= {"video"} placeholder="Youtube Video Link"/>
                    <br></br>
                </div>
              
                <button type="submit" class="btn btn-secondary">Submit</button>
                </form>
            </div>   
                </Col>
            </Row>
        </Container>
    
            )
        }
    }
    const mapStateToProps = (state) => {
        return {
            post: state.post,
            currentUser: state.currentUser,
            selectMyPost: state.selectMyPost
        }
    }
    const mapDispatchToProps = {
        updateMyPost: updateMyPost
    } 
    export default connect(mapStateToProps, mapDispatchToProps)(EditPostForm)

