import React, { Component } from 'react';
import axios from "axios"
import UpdateCreature from "./UpdateCreature"

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

    handleChange = (event) => {
        try {
            const clonedCreature = {...this.state.creature }          
            const attribute = event.target.name
            clonedCreature[attribute] = event.target.value

            this.setState({creature: clonedCreature})

        } catch (error) {
            console.log(error)
        }
    }


    handleSubmit = async (event) => {
        event.preventDefault()
        const creatureId = this.props.id
        const updatedState = {...this.state.creatureId}
        const response = await axios.patch(`/creatures/${creatureId}`, {
            creature: updatedState })
            this.props.toggleEdit()
            this.props.getPosts()
    }

  render() {
    return (
      <div>
       
        <h1>{this.state.creature.name}</h1>
        <h3>{this.state.creature.description}</h3>
        <button onClick={this.toggleUpdateCreatureInfo}>Update Creature Details</button>

        {this.state.showUpdateCreature ? <UpdateCreature name={this.state.creature.name} description={this.state.creature.description} handleChange={this.handleChange} handleSubmit={this.handleSubmit} toggleUpdateCreatureInfo={this.toggleUpdateCreatureInfo} /> : null}
       
      </div>
    );
  }
}

export default SingleCreature;

