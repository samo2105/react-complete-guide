import React, {Component} from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {
    state = {
        persons: [
            {name: 'Max', age: 28},
            {name: 'Manu', age: 29},
            {name: 'Stephanie', age: 30},
        ]
    };

    render() {
        return (
            <div className="App">
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
            </div>
            //React.createElement('div', null, React.createElement('h1',{className: 'App'}, 'Does this work now?'))
        );
    }
}

export default App;
