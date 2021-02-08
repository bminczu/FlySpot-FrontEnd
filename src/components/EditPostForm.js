import React from 'react'
import {connect} from 'react-redux'
import {updateMyPost} from '../actions/createPost'


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
        <div  className="new-post">
          <form id={this.props.selectMyPost.id} className="form" onSubmit={this.handleSubmit}>
             <input   onChange={this.handleInputChange} value={this.state.title}  name= {"title"} placeholder="Title Your Post"/><br></br> <br></br>
             <input  onChange={this.handleInputChange} value={this.state.address} name= {"address"} placeholder="Address"/><br></br> <br></br>
             <input  onChange={this.handleInputChange} value={this.state.latitude} name= {"latitude"} placeholder="Latitude"/><br></br> <br></br>
             <input  onChange={this.handleInputChange} value={this.state.longitude} name= {"longitude"} placeholder="Longitude"/><br></br> <br></br>
             <input  onChange={this.handleInputChange} value={this.state.category} name= {"category"} placeholder="category"/><br></br> <br></br>
             <input  onChange={this.handleInputChange} value={this.state.airspace} name= {"airspace"} placeholder="airspace"/><br></br> <br></br>
             <input  onChange={this.handleInputChange} value={this.state.description} name= {"description"} placeholder="description"/><br></br> <br></br>
             <input  onChange={this.handleInputChange} value={this.state.authors_rating} name= {"authors_rating"} placeholder="Author's Rating"/><br></br> <br></br>
             <input  onChange={this.handleInputChange} value={this.state.video} name= {"video"} placeholder="Video Link"/><br></br> <br></br>
            <input type='submit' class="btn btn-info"  id={this.state.id} value="Update Post" />
           </form>
        </div>
            )
        }
    }
    const mapStateToProps = (state) =>{
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

