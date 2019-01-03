import React from 'react'

// function Greet() {
//     return <h1>Hello Jeremy</h1>
// }

//ES6 version
const Greet = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Hello {props.name} a.k.a {props.godName}</h1>
            {props.children}
        </div>
    )
}



export default Greet