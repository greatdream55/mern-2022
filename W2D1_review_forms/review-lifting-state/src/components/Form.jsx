import React, { useState } from 'react'

const Form = (props) => {

    // console.log(props)
    // FORM INPUTS
    const [name, setName] = useState("");
    const [age, setAge] = useState(0)

    const createUserForm = (e) => {
        e.preventDefault();
        const newUser = {
            name: name,
            age: age
        }
        // console.log(newUser)
        props.addToState(newUser)
        // clearing the inputs form state
        setName("");
        setAge(0);
    }

    return (
        <fieldset>
            {/* FORM */}
            <div>
                name: {JSON.stringify(name)} <br />
                age: {JSON.stringify(age)} <br />

                <form onSubmit={createUserForm}>
                    name: <input onChange={(e) => setName(e.target.value)} value={name} /> <br />
                    age: <input type="number" onChange={(e) => setAge(e.target.value)} value={age} /> <br />
                    <button>click</button>
                </form>

            </div>

            <hr />
        </fieldset>
    )
}

export default Form