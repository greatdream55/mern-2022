import React, { Component } from 'react'

export default class OtherComponent extends Component {
    constructor(props) {
        super(props)
        // create state for this component
        this.state = {
            x: 1,
            name: "bob",
            alice : this.props.alice
        }
    }

    increaseNum = () => {
        console.log("clicked!!")
        // this.state.alice++;
        
        this.setState({
            alice : this.state.alice + 1
        }, () => console.log(this.state.alice))
    }

    render() {
        return (
            <fieldset>
                <legend>OtherComponent.jsx</legend>
                <p>
                    our state : {JSON.stringify(this.state)}
                </p>
                <hr />
                <p>
                    state: {this.state.alice}
                </p>
                <button onClick={() => this.increaseNum() }>Click Me</button>
            </fieldset>
        )
    }
}
