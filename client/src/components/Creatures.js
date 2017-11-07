import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

class Creatures extends Component {
    state = {
        creatures: []
    }

    componentWillMount () {
        this.getAllCreatures()
    }

    getAllCreatures = async () => {
        const response = await axios.get("/api/creatures")
        this.setState({creatures: response.data})
    }


    render() {
        return (
            <div>
                <h1>Welcome to the Bog</h1>
                {this.state.creatures.map(creature => (
                    <Link key={creature._id} to={`/${creature._id}`}>
                    <h4>Name: {creature.name}</h4>
                    <p>Description: {creature.description}</p>
                    </Link>
                ))}

            </div>
        );
    }
}

export default Creatures;


