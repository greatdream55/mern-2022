import React, { Component } from 'react'
import myCoolStyle from "./ClassComponent.module.css"

class ClassComponent extends Component {
  // props is STATIC
  // state is DYNAMIC
  constructor(props) {
    super(props)
    // decare state in Class component
    this.state = {
      bob : "🍕",
      person: this.props.personFromProps
    }
  }

  increaseNum = () => {
    // setState is a function to CHANGE state of THIS component
    this.setState({
      person: {
        ...this.state.person,
        age: this.state.person.age + 1,
      }
    })
  }

  render() {
    // console.log(this.props)
    return (
      // <div className={myCoolStyle.wrapper + " btn btn-danger"}>ClassComponent</div>
      <fieldset>
        <legend>ClassComponent</legend>
        state: {JSON.stringify(this.state)} <br />
        props: {JSON.stringify(this.props)}
        <p>
          person  name: {this.state.person.name}
        </p>
        <p>
          person  age: {this.state.person.age}
        </p>
        <button onClick={() => this.increaseNum()}>click</button>
      </fieldset>
    )
  }
}

export default ClassComponent;