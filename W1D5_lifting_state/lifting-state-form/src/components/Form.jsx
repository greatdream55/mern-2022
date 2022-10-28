import React, { useState } from 'react'
import Display from './Display'

const Form = (props) => {

    const [name, setName] = useState("")
    const [color, setColor] = useState("white")

    // console.log(props)

    // form submission
    const createUser = (e) => {
        // always prevent the default submit behavior of the browser
        e.preventDefault();
        // console.log("created")

        const newPerson = {
            name,
            color
        }

        // setting state
        // props.addToPeopleState(name, color)
        props.addToPeopleState(newPerson)
        // props.setPeople([...props.people, name]);
        setName("")
    }

    const colorHandler = (value) => {
        console.log(value)
        setColor(value)
    }

    return (
        <fieldset>
            form state name: {JSON.stringify(name)} <br />
            form state color: {JSON.stringify(color)} <br />
            <legend>Form.jsx</legend>
            
            <form onSubmit={createUser}>
                name: <input onChange={(e) => setName(e.target.value)} value={name} /> <br />
                color: <input onChange={(e) => colorHandler(e.target.value)} value={color} /> <br />

                <button>submit</button>
            </form>
            
            <hr />
            {/* <Display people={people}/> */}
        </fieldset>
    )
}


export default Form