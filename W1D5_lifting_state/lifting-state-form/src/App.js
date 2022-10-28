import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import Display from './components/Display';
import Person from './components/Person';

function App() {

  const [people, setPeople] = useState([
      {name: "john", color: "red"},
      {name: "jenny", color: "blue"},
      ])

  // add to state
  const addToPeopleState = (personObject) => {
    // console.log("hello ", name, color)
    // change state here
    // 1 make a shallow copy of state
    const peopleCopy = [...people];
    // 2. changed the copy
    peopleCopy.push(personObject);
    // 3. changed the state / overwrite state
    setPeople(peopleCopy);

    // alternate way
    // setPeople([...people, name])
  }


  return (
    <div className="App">
      <h1>forms</h1>
      state: {JSON.stringify(people)} <br />

      <Form
        addToPeopleState={addToPeopleState}
        x={44}
        people={people}
        setPeople={setPeople}
      />
      <hr />
      {
        people.map((person, i) => {
          return <Person key={i} person={person} i={i}/>
        })
      }
    
      {/* <Display people={people}/> */}
    </div>
  );
}

export default App;
