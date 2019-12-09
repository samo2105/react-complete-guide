import React, {Component} from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {
    state = {
        persons: [
            {name: 'Max', age: 28},
            {name: 'Manu', age: 29},
            {name: 'Stephanie', age: 30},
        ],
        otherState: 'some other value',
        showPersons: false
    };

    switchNameHandler = (newName) => {
        // console.log('hola')
        this.setState({
            persons: [
                {name: newName, age: 24},
                {name: 'Manuel', age: 19},
                {name: 'Stephania', age: 38},
            ]
        })
    };

    deletePersonHandler = (personIndex) => {
        const persons = this.state.persons;
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow})
    };

    render() {
        const style = {
            backgroundColor: 'white',
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
                                key={index}
                                name={person.name}
                                age={person.age}
                                click={() => this.deletePersonHandler(index)}/>
                    })}
                </div>
            );
        }

        return (
            <div className="App">
                <h1> Soy muchas personas </h1>
                <button style={style} onClick={this.togglePersonsHandler}>Switch Name</button>
                {persons}
            </div>
            //React.createElement('div', null, React.createElement('h1',{className: 'App'}, 'Does this work now?'))
        );
    }
}

export default App;
