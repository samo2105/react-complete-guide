import React, {Component} from 'react';
import classes from './App.css';
import PersonList from '../Components/PersonsList/PersonList';
import Cockpit from "../Components/Cockpit/Cockpit";

class App extends Component {
    state = {
        persons: [
            {id: 'persona1', name: 'Max', age: 28},
            {id: 'persona2', name: 'Manu', age: 29},
            {id: 'persona3', name: 'Stephanie', age: 30},
        ],
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
        if (this.state.showPersons) {
            persons = <PersonList persons={this.state.persons} changed={this.switchNameHandler} click={this.deletePersonHandler} />;
        }

        return (
            <div className={classes.App}>
                <Cockpit persons={this.state.persons} click={this.togglePersonsHandler} showPersons={this.state.showPersons} />
                {persons}
            </div>
        );
    }
}

export default App;
