import React, { Component } from "react";

class SomeClassComponent extends Component {

    render() {
        console.log(this)
        return (
            <fieldset>
                <legend>SomeClassComponent.jsx</legend>
                props are: {JSON.stringify(this.props)}
            </fieldset>
        )
    }
}

// make sure you EXPORT so other files can use it
export default SomeClassComponent;