import React from 'react' 
import {connect} from 'react-redux'
import FeedCard from './FeedCard'
import {getPublicPosts} from '../actions/getPublicPosts'


class Feed extends React.Component{

    
        componentDidMount(){
        fetch("http://localhost:3000/posts")
            .then(response => response.json())
            .then(allPosts => {
                let postsArr = allPosts.filter(postObj => postObj.user_id !== this.props.currentUser.id)
                this.props.getPublicPosts(postsArr)
                window.Intercom("boot", {
                    app_id: "sxmnp2gp"
                  });   
            }
        )
     }
            
     boot = () => {window.Intercom("boot", {
        app_id: "sxmnp2gp"
      })};
    render(){

       
        return(


           
            <div className="feed-card-background"> 

             <head> </head>
             <script>

{(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/sxmnp2gp';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()};
</script>
            
                <h1 className="whitefont">COMMUNITY POSTS</h1>
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