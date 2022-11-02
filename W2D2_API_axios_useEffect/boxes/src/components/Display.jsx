import React from 'react'

const Display = (props) => {

//   const deleteBox = (index) => {
//     console.log("delete", index)
//     //                 0   1   2
//     // props.boxes // [{},{},{}]
//     // props.setBoxes
//     console.log(props.boxes)
//     const filteredBoxes = props.boxes.filter((box, boxIdx) => {
//         if(index !== boxIdx) {
//             return true 
//         } else {
//             return false
//         }
//     })
//     // const filteredBoxes = props.boxes.filter((b, i) => i !== index)
//     console.log(filteredBoxes)
//     props.setBoxes(filteredBoxes);
// }

    return (
        <div>
            {/* {JSON.stringify(props.boxes)} */}
            {
                props.boxes.map((colorObj, i) => {
                    return (
                        <div style={{ backgroundColor: colorObj.color, width: "100px", height: "100px", display: "inline-block" }} key={i}>
                            <p>
                                {colorObj.color}
                            </p>
                            <div>
                                <input type="checkbox" onChange={() => props.updateBox(i)} checked={colorObj.status} />
                            </div>
                            <button onClick={() => props.deleteBox(i)}>delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Display