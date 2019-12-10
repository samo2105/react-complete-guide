import React from 'react';
import classes from "./Cockpit.css";

const Cockpit = (props) => {

    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.red
    }

    const assignedClasses = [];
    if (props.persons.length <= 3) {
        assignedClasses.push(classes.red)
    }
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.bold)
    }


    return (
        <div className={classes.Cockpit}>
            <h1> Soy muchas personas </h1>
            <p className={assignedClasses.join(' ')}>Apreta el boton para mostrar {props.persons.length} personas</p>
            <button className={btnClass} onClick={props.click}>Show persons</button>
        </div>
    )
}

export default Cockpit