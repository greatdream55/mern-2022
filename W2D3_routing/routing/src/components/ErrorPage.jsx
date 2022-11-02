import React from 'react'

const divStyle = {
    borderRadius: "25px",
    // border: "1px solid grey",
    width: "70%",
    // marginTop: "30px",
    margin: "0 auto",
}

const ErrorPage = (props) => {
  return (
    <div>
      <h1>404 page not found</h1>
        <img style={divStyle} src="https://i.kym-cdn.com/entries/icons/original/000/008/342/ihave.jpg" width="400px" alt="no idea" />
    </div>
  )
}

export default ErrorPage