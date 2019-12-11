import React from 'react';
import classes from "./Cockpit.css";
import Aux from "../../HOC/aux";

const Cockpit = (props) => {

    let btnClass = [classes.Button];

    if (props.showPersons) {
        btnClass.push(classes.red)
    }

    const assignedClasses = [];
    if (props.persons.length <= 3) {
        assignedClasses.push(classes.red)
    }
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.bold)
    }


    return (
        <Aux>
            <h1> {props.title} </h1>
            <p className={assignedClasses.join(' ')}>Apreta el boton para mostrar {props.persons.length} personas</p>
            <button className={btnClass.join(' ')} onClick={props.click}>Show persons</button>
        </Aux>
    )
};

export default Cockpit