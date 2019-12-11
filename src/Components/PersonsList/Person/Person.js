import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import withClass from "../../../HOC/withClass";
import Aux from "../../../HOC/aux";

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] Inside Constructor')
    }

    componentWillMount() {
        console.log('[Person.js] Inside componentWillMount()')
    }

    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount()')
    }

    render(){
        console.log('[Person.js] Inside Render');
        return (
            <Aux>
                <h1>Persona Nombre: {this.props.name}</h1>
                <h2> Mi edad es {this.props.age}</h2>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
                <p onClick={this.props.click}> Deletear</p>
                <p>{this.props.children}</p>
            </Aux>
        )
    }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);