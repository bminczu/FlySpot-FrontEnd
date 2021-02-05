import React from 'react' 
// import showCard from '../actions/showPost.js'

class PostCard extends React.Component{

    render(){
        
        const {title, id, address, latitude, longitude, category, description, airspace } = this.props.post
        return(


            <div>
                
            <h1> {title}</h1>
            <h2>{category}</h2>
            <h2>{description}</h2>
            <h2>Airspace Classification: {airspace}</h2>
            <h2>Address: {address}</h2>
            <p>Latitude:  {latitude}</p>
            <p> Longitude: {longitude}</p>


            </div>




        )
    }
}

export default PostCard