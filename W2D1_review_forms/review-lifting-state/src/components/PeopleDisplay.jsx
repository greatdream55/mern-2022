import React from 'react'

const PeopleDisplay = (props) => {
    return (
        <div>
            {
                props.people.map((person, index) => {
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