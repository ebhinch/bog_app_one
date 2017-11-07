import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import CreateCreatureForm from "./CreateCreatureForm"

class Creatures extends Component {
    state = {
        creatures: [],
        showCreateForm: false
    }

    componentWillMount () {
        this.getAllCreatures()
    }

    getAllCreatures = async () => {
        const response = await axios.get("/api/creatures")
        this.setState({creatures: response.data})
    }

    toggleShowCreateForm = () => {
        this.setState({ showCreateForm: !this.state.showCreateForm })
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
                <button onClick={this.toggleShowCreateForm}>Create New Creature</button>

                {this.state.showCreateForm ? <CreateCreatureForm getAllCreatures={this.getAllCreatures} toggleShowCreateForm={this.toggleShowCreateForm}/> : null}

            </div>
        );
    }
}

export default Creatures;
