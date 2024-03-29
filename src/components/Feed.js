import React from 'react' 
import {connect} from 'react-redux'
import FeedCard from './FeedCard'
import {getPublicPosts} from '../actions/getPublicPosts'


class Feed extends React.Component{

    
        componentDidMount(){
        fetch("https://flyspot-backend.herokuapp.com/posts")
            .then(response => response.json())
            .then(allPosts => {
                let postsArr = allPosts.filter(postObj => postObj.user_id !== this.props.currentUser.id)
                this.props.getPublicPosts(postsArr)
                ;   
            }
        )
     }
            
    
    render(){

       
        return(


           
            <div> 

                <div className="feed-h1-container">
                    <h1 className="feed-heading">COMMUNITY FEED</h1>
                </div>


                {this.props.publicPosts.map(postObj => {
                        return <FeedCard  key={postObj.id} post={postObj} /> 
                 })}

                 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
 return {
     currentUser: state.currentUser,
     publicPosts: state.publicPosts
 }
}

const mapDispatchToProps = {
    getPublicPosts: getPublicPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed)