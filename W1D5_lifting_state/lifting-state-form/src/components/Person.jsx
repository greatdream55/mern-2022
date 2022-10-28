import React from 'react'

const Person = (props) => {
    console.log(props.person, props.i)
    return (
        <>
            {
                props.person.length < 3 ? (
                    <p style={{backgroundColor : props.person.color}}>{props.person.name}</p>
                ) : (
                    <p style={{backgroundColor : props.person.color}}>{props.person.name}</p>
                )
            }
        </>
    )
}

export default Person