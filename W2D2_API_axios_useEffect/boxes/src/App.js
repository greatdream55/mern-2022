import './App.css';
import { useState } from 'react'
import Display from './components/Display';
import Box from './components/Box';
import Form from './components/Form';

function App() {

  // create state
  const [boxes, setBoxes] = useState([
    { color: "red", status: true },
    { color: "green", status: false },
    { color: "blue", status: true }
  ])

  // ADD
  const addBoxColor = (colorObj) => {
    console.log("hello we got ", colorObj)
    // add the colorName we got from Form component
    setBoxes([colorObj, ...boxes])

    // 1. create a shallow copy
    // const copyBoxes = [...boxes]
    // // 2. change that array
    // copyBoxes.push(colorName);
    // setBoxes(copyBoxes);
  }

  // UPDATE
  const updateBox = (i) => {
    console.log("update", i)
    const copyBoxes = [...boxes]
    // if(copyBoxes[i].status === true) {
    //   copyBoxes[i].status = false
    // } else {
    //   copyBoxes[i].status = true
    // }
    copyBoxes[i].status = !copyBoxes[i].status;
    setBoxes(copyBoxes);
  }

  // DELETE
  const deleteBox = (index) => {
    console.log("delete", index)
    const filteredBoxes = boxes.filter((box, boxIdx) => {
      if(index !== boxIdx) {
          return true 
      } else {
          return false
      }
  })
  setBoxes(filteredBoxes);
}
  return (
    <div className="App">
      <h1>Boxes 📦</h1>
      {JSON.stringify(boxes)}
      <hr />
      <Form addBoxColor={addBoxColor} />

      <Display boxes={boxes} setBoxes={setBoxes} deleteBox={deleteBox} updateBox={updateBox}/>
      {/* 
      {
        boxes.map((eachBox, index) => {
          return <Box key={index} boxObj={eachBox}/>
        })
      } */}

    </div>
  );
}

export default App;
