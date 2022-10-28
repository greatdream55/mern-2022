import './App.css';
import { useState } from 'react';
import Form from './components/Form';


function App() {

  const [people, setPeople] = useState(["john", "jenny", "bob"])

  // add to state
  const addToPeopleState = (name) => {
    console.log("hello ", name)
    // change state here
    // 1 make a shallow copy of state
    const peopleCopy = [...people];
    // 2. changed the copy
    peopleCopy.push(name);
    // 3. changed the state / overwrite state
    setPeople(peopleCopy);

    // alternate way
    setPeople([...people, name])
  }

  return (
    <div className="App">
      <h1>forms</h1>
      state: {JSON.stringify(people)} <br/>

      <Form addToPeopleState={addToPeopleState} x={44}/>

    </div>
  );
}

export default App;
