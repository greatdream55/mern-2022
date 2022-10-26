import React, { Component } from 'react'

class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myPerson: this.props.person,
        }
    }


    render() {

        console.log(this.props.person)

        return (
            <fieldset>
                <legend>Person.jsx</legend>
                <p>
                    Person coming from props: {this.props.person.name}
                </p>
                <hr />
                <p>
                    our Person from State: {this.state.myPerson.name}
                </p>
            </fieldset>
        )
    }
}

export default Person;
