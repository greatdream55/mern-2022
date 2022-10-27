import React, {useState} from 'react'

const Display = (props) => {
//                                  0       1    2      3
    console.log(props.animals) // ["🦓", "🦁", "🦅", "🦛"]


    return (
        <fieldset> 
            <p>all the animals!</p>
        {
            props.animals.map((eachAnimal, idx) => {
                return (
                    <div key={idx} onClick={() => {console.log(idx)}}>
                        <li>
                            {eachAnimal}
                        <hr />
                        </li>
                    </div>
                )
            })
        }
        </fieldset>
    )
}

export default Display