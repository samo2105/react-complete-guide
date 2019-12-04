import React from 'react';

function Person(props) {
    return(
        <div>
            <h1>Persona Nombre: {props.name}</h1>
            <h2> Mi edad es {props.age}</h2>
            <p onClick={props.onClick}> Clickeame</p>
        </div>
    )
}

export default Person;