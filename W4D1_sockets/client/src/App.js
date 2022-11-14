import './App.css';
import io from "socket.io-client"
import { useEffect, useState } from 'react'

function App() {

  // use socket from io
  const [socket] = useState(() => io(":8000"))
  const [input, setInput] = useState("")

  const [messages, setMessages] = useState([])

  useEffect(() => {

    // listen from the server
    socket.on("post chat", (msg) => {
      // console.log(msg)
      // setMessages([...messages, msg])
      setMessages( (prevStates) => {
        return [...prevStates, msg]
      })
    })

    return () => socket.disconnect(true)
  }, [socket])

  // input change
  const onChangeHandler = e => {
    setInput(e.target.value)
  }

  // form submit
  const submitHandler = e => {
    e.preventDefault();

    // send stuff to the server "Marco!"
    socket.emit("yo chat!", input)
    setInput("");
  }

  return (
    <div className="App">
      <h1>Hello socket.io</h1>
      <hr />
      <form onSubmit={submitHandler}>
        <input onChange={onChangeHandler} value={input} autoComplete="off"/>
        <button>submit</button>
      </form>
      {/* {JSON.stringify(messages)} */}
      {
        messages.map((item, i) => {
          return (
            <img src={item} alt="some img" width="200" key={i}/>
            // <div key={i}>
            //   {item}
            // </div>
          )
        })
      }

    </div>
  );
}

export default App;
