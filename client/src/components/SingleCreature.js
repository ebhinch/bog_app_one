import React, { Component } from 'react';
import axios from "axios"

class SingleCreature extends Component {
    state = {
        creature: {
            name: "",
            description: ""
        },
        showUpdateCreature: false
    }

    componentWillMount () {
        this.getCreature()
    }

    getCreature = async () => {
        const creatureId = this.props.match.params.id
        const response = await axios.get(`/api/creatures/${creatureId}`)
        this.setState({creature: response.data})
    }

    toggleUpdateCreatureInfo = () => {
        this.setState({showUpdateCreature: !this.state.showUpdateCreature})
    }

  render() {
    return (
      <div>
       
        <h1>{this.state.creature.name}</h1>
        <h3>{this.state.creature.description}</h3>
        <button onClick={this.toggleUpdateCreatureInfo}>Update Creature Details</button>
       
      </div>
    );
  }
}

export default SingleCreature;

