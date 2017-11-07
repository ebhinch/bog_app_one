import React from 'react';

const UpdateCreature = (props) => {
    return (
        <div>
            <input onBlur={props.handleSubmit} onChange={props.handleChange} name="name" value={props.name} />
            <textarea onBlur={props.handleSubmit} onChange={props.handleChange} name="description" defaultValue={props.description} />
            
        </div>
    );
};

export default UpdateCreature;