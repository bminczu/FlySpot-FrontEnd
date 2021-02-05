import React from 'react'
import {connect} from 'react-redux'
import PostContainer from "./PostContainer"

class HomeContainer extends React.Component {
    
    componentDidMount(){
      if (!this.props.currentUser){
        this.props.history.push("/signin")
      }
    }
    
    handleShowPost = (id) => {
      this.props.history.push(`/home/${id}`)
    }

    render(){
      return(
        <div className="post-card">
          <PostContainer handleShowPost={this.handleShowPost}/>
        </div>
      )
    }

  }
  const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser
    }
  }

  export default connect(mapStateToProps, null)(HomeContainer)