import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class FeedCard extends React.Component{

    render(){
        
        const {title, id, address, latitude, longitude, category, description, airspace } = this.props.post
        return(


            <div className="FeedCard">
        <Card style={{ width: '30rem', height: '30rem'}}>
            <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                <h1> {title}</h1>
                <h2>{category}</h2>
                <p>{description}</p>
                <p>Airspace Class: {airspace}</p>
                <p>Address: {address}</p>
                <p>Latitude:  {latitude}</p>
                <p> Longitude: {longitude}</p>
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
            

            </div>




        )
    }
}

export default FeedCard