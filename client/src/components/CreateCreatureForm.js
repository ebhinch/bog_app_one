import React, { Component } from 'react';
import axios from "axios"

class CreateCreatureForm extends Component {
    state = {
        name: "",
        description: ""
    }

    handleChange = (event) => {
        const updatedState = {...this.state}
        const attribute = event.target.name
        updatedState[attribute] = event.target.value

        this.setState(updatedState)
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const payload = {
            name: this.state.name,
            description: this.state.description
        }
        await axios.post("/api/creatures", payload)
        await this.props.getAllCreatures()
        this.props.toggleShowCreateForm()
    }
   


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <div>
                <label htmlFor="name">Name: </label>
                <input onChange={this.handleChange} type="text" name="name" value={this.state.name} />
            </div>

            <div>
                <label htmlFor="description">Description: </label>
                <input onChange={this.handleChange} type="text" name="description" value={this.state.description} />
            </div>

            <button>Submit New Creature</button>

            </form>
        );
    }
}

export default CreateCreatureForm;

