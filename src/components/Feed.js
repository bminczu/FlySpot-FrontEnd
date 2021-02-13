import React from 'react' 
import {connect} from 'react-redux'
import FeedCard from './FeedCard'
import {getPublicPosts} from '../actions/getPublicPosts'


class Feed extends React.Component{

    
        componentDidMount(){
        fetch("http://localhost:3000/posts/5")
            .then(response => response.json())
            .then(allPosts => {
                console.log(allPosts)
                // let postsArr = allPosts.filter(postObj => postObj.user_id !== this.props.currentUser.id)
                // this.props.getPublicPosts(postsArr)   
            }
        )
     }
            

    render(){

       
        return(

            <div>
                
       
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