// rafce
import React, {useState} from 'react'

const FunctionalComponent = (props) => {

    // CREATE STATE FOR THIS COMPONENT
    // CREATE STATE in Functional Component
    //    state
    //      |     change state
    //      V        V            default state
    const [num , setNum ] = useState(props.num)
    const [person , setPerson ] = useState(props.personFromProps)


    const increaseNum = () => {
        // console.log("click")
        // let newNum = num + 1
        // setNum(newNum)
        // CHANGE STATE
        setNum(num + 1)

    }

    return (
        <>
            <div>FunctionalComponent</div>
            <p onClick={() => increaseNum()}>

            {num}
            </p>
            {person.name} <br />

            
        </>
    )
}

export default FunctionalComponent