import React, {Component} from 'react';
import Person from './Person/Person'
import './App.css';

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
        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;

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
            style.backgroundColor = 'red';
        }

        let classes = [];
        if (this.state.persons.length <= 2){
            classes.push('red');
        }
        if (this.state.persons.length <= 1){
            classes.push('bold')
        }

        return (
                <div className="App">
                    <h1> Soy muchas personas </h1>
                    <p className={classes.join(' ')}>Apreta el boton para mostrar {this.state.persons.length} personas</p>
                    <button style={style} onClick={this.togglePersonsHandler}>Show persons</button>
                    {persons}
                </div>
            );
    }
}

export default App;
