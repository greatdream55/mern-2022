import React from 'react'

const Box = (props) => {
    console.log(props)
  return (
    <div style={{ backgroundColor: props.boxObj.color, width: "100px", height: "100px", display: "inline-block" }}>{props.boxObj.color}</div>
  )
}

export default Box