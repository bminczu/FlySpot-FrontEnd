import React from 'react' 
import {connect} from 'react-redux'
import PostCard from './PostCard'
import FeedCard from './FeedCard'


class Feed extends React.Component{

    state = {
        postsArr:[]
    }

    componentDidMount(){
        fetch("http://localhost:3000/posts")
            .then(response => response.json())
            .then(allPosts => {
                let postsArr = allPosts.filter(postObj => postObj.user_id !== this.props.currentUser.id)
                this.setState({postsArr})     
            }
        )
     }
            

    render(){

       
        return(

            <div>
                
       
                {this.state.postsArr.map(postObj => {
                        return <FeedCard key={postObj.id} post={postObj} /> 
                    })}
            </div>




        )
    }
}

const mapStateToProps = (state) => {

 return {
     currentUser: state.currentUser
 }
}

export default connect(mapStateToProps, null)(Feed)