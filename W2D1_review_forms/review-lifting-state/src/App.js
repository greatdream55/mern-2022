import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import PeopleDisplay from './components/PeopleDisplay';

function App() {

  const [people, setPeople] = useState([
    {
      name: "Toad",
      age: 30
    },
    {
      name: "Mario",
      age: 40
    },
    {
      name: "Luigi",
      age: 40
    },
    {
      name: "Princess Peach",
      age: 30
    }
  ])

  const addToState = (newUserObj) => {
    console.log(newUserObj)
    setPeople([...people, newUserObj ])
  }

  return (
    <fieldset className="App">
      <h1>review Forms and state</h1>
      {
        JSON.stringify(people)
      }
      <hr />
      <Form addToState={addToState}/>
      <PeopleDisplay people={people}/>
    </fieldset>
  );
}

export default App;
