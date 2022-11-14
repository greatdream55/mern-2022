import React from 'react'

const PeopleDisplay = (props) => {
    return (
        <div>
            {
                props.people.map((person, index) => {
                    // a key must be provided to the return
                    // key is dynamic
                    return <div key={index}>
                        <p>
                            name:  {person.name}
                        </p>
                        <p>
                            age: {person.age}
                        </p>
                        <hr />
                    </div>
                })
            }
        </div>
    )
}

export default PeopleDisplay