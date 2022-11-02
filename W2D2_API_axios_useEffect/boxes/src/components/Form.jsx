import React, { useState } from 'react'

const Form = (props) => {

    // state for the input
    const [colorName, setColorName] = useState("")

    const customFunction = (event) => {
        // console.log(event.target.value)
        setColorName(event.target.value)
        
    }

    // form submit
    const submitHandler = (e) => {
        // first thing in a form submit
        // prevent the default behavior
        e.preventDefault()
        // console.log("submitted", colorName)

        // create / replicate what it is that you will be adding in state
        const someObj = {
            color: colorName,
            status: false
        }
        props.addBoxColor(someObj)
        // clear what in state
        setColorName("")
    }

    return (
        <div>
            <p>
                form state: {JSON.stringify(colorName)}
            </p>

            <form onSubmit={submitHandler}>
                name: <input type="color" onChange={customFunction} value={colorName}/> <button>submit</button>
                {/* name: <input onChange={(e) => setColorName(e.target.value)} /> <button>submit</button> */}
            </form>

            <p></p>
        </div>
    )
}

export default Form