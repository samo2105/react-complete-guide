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
        otherState: 'some other value'
    };

    switchNameHandler = (newName) => {
       // console.log('hola')
       this.setState({persons: [
               {name: newName, age: 24},
               {name: 'Manuel', age: 19},
               {name: 'Stephania', age: 38},
           ] } )
    };

    nameChangedHandler = (event) => {
        this.setState({persons: [
                {name: 'Max', age: 24},
                {name: event.target.value, age: 19},
                {name: 'Stephania', age: 38},
            ] } )
    };

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        return (
            <div className="App">
                <h1> Soy muchas personas </h1>
                <button style={style} onClick={this.switchNameHandler.bind(this, 'Maximilian!')}>Switch Name</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                    click={this.switchNameHandler.bind(this, 'Max!')}/>
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    changed={this.nameChangedHandler}> Hola </Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age} />
            </div>
            //React.createElement('div', null, React.createElement('h1',{className: 'App'}, 'Does this work now?'))
        );
    }
}

export default App;
