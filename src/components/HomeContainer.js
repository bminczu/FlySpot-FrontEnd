import React from 'react'
import {connect} from 'react-redux'
import PostContainer from "./PostContainer"

class HomeContainer extends React.Component {
    


    render(){
      return(
        <div className="post-card">
          {/* <PostContainer handleShowPost={this.handleShowPost}/> */}
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