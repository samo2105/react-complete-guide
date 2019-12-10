import React, {Component} from 'react';
import Person from './Person/Person'
import classes from './App.css';

class App extends Component {
    state = {
        persons: [
            {id: 'persona1', name: 'Max', age: 28},
            {id: 'persona2',name: 'Manu', age: 29},
            {id: 'persona3',name: 'Stephanie', age: 30},
        ],
        otherState: 'some other value',
        showPersons: false
    };

    switchNameHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons})
    };

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow})
    };

    render() {

        let persons = null;
        let btnClass = '';
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            key={person.id}
                            name={person.name}
                            age={person.age}
                            changed={(event) => this.switchNameHandler(event, person.id)}
                            click={() => this.deletePersonHandler(index)}/>
                    })}
                </div>
            );

            btnClass = classes.red
        }

        const assignedClasses = [];
        if (this.state.persons.length <= 3){
            assignedClasses.push(classes.red)
        }
        if (this.state.persons.length <= 2){
            assignedClasses.push(classes.bold)
        }

        return (
                <div className={classes.App}>
                    <h1> Soy muchas personas </h1>
                    <p className={assignedClasses.join(' ')}>Apreta el boton para mostrar {this.state.persons.length} personas</p>
                    <button className={btnClass} onClick={this.togglePersonsHandler}>Show persons</button>
                    {persons}
                </div>
            );
    }
}

export default App;
