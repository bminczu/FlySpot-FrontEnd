import React from 'react' 
import PostCard from './PostCard'
import {connect} from 'react-redux'

class PostContainer extends React.Component{

    renderPosts = () => {
        return this.props.posts.map(postObj => {
            return <PostCard key={postObj.id} post={postObj} /> 
        })

    }

    render(){

        return(


            <div className="form-background">

                {this.renderPosts()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        posts: state.posts
    }
}

export default connect(mapStateToProps, null)(PostContainer)
