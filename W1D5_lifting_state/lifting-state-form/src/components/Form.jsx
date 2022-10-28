import React, { useState } from 'react'
import Display from './Display'

const Form = (props) => {

    const [name, setName] = useState("")

    console.log(props)

    // form submission
    const createUser = (e) => {
        // always prevent the default submit behavior of the browser
        e.preventDefault();
        // console.log("created")

        // setting state
        props.addToPeopleState(name)
        setName("")
    }

    return (
        <fieldset>

            form state name: {JSON.stringify(name)}
            <legend>Form.jsx</legend>
            <form onSubmit={createUser}>
                name: <input onChange={(e) => setName(e.target.value)} value={name} /> <br />

                <button>submit</button>

            </form>
            <hr />
            {/* <Display people={people}/> */}
        </fieldset>
    )
}

export default Form