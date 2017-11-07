import React, { Component } from 'react';
import axios from "axios"

class SingleCreature extends Component {
    state = {
        creature: {
            name: "",
            description: ""
        }
    }

    componentWillMount () {
        this.getCreature()
    }

    getCreature = async () => {
        const creatureId = this.props.match.params.id
        const response = await axios.get(`/api/creatures/${creatureId}`)
        this.setState({creature: response.data})
    }

  render() {
    return (
      <div>
       
        <h1>{this.state.creature.name}</h1>
        <h3>{this.state.creature.description}</h3>
       
      </div>
    );
  }
}

export default SingleCreature;

