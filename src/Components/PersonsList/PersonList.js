import React, {Component} from 'react';
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";
import Person from "./Person/Person";

class PersonList extends Component {
    constructor(props) {
        super(props);
        console.log('[PersonList.js] Inside Constructor')
    }

    componentWillMount() {
        console.log('[PersonList.js] Inside componentWillMount()')
    }

    componentDidMount() {
        console.log('Update [PersonList.js] Inside componentDidMount()')
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log('[PersonList.js] Inside componentWillReceiveProps()')
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('[Update PersonList.js] Inside shouldComponentUpdate()', nextProps, nextState)
        return nextProps.persons !== this.props.persons ||
            nextProps.changed !== this.props.changed ||
            nextProps.click !== this.props.click;
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('[Update PersonList.js] Inside componentWillUpdate()', nextProps, nextState)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Inside PersonList.js] Inside componentWillUpdate()' )
    }

    render(){
        console.log('[PersonList.js] Inside Render');
        return(
            <div>
                {this.props.persons.map((person, index) => {
                    return <ErrorBoundary key={person.id}>
                        <Person
                            name={person.name}
                            age={person.age}
                            changed={(event) => this.props.changed(event, person.id)}
                            click={() => this.props.click(index)}/>
                    </ErrorBoundary>
                })}
            </div>
        )
    }
}
export default PersonList

