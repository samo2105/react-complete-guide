import React from 'react';
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";
import Person from "./Person/Person";

function PersonList(props) {

    return(
        <div>
            {props.persons.map((person, index) => {
                return <ErrorBoundary key={person.id}>
                    <Person
                        name={person.name}
                        age={person.age}
                        changed={(event) => props.changed(event, person.id)}
                        click={() => props.click(index)}/>
                </ErrorBoundary>
            })}
        </div>
    )
}
export default PersonList

