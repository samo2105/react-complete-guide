import React from 'react';
import './Person.css';

function Person(props) {

    return (
        <div className={"Person"}>
            <h1>Persona Nombre: {props.name}</h1>
            <h2> Mi edad es {props.age}</h2>
            <input type="text" onChange={props.changed} value={props.name}/>
            <p onClick={props.click}> Deletear</p>
            <p>{props.children}</p>
        </div>
    )
}

export default Person;