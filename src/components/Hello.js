import React from 'react'

//Example on writing html NOT in JSX 
const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hello Jeremy</h1>
    //     </div>
    // )
    return React.createElement('div', null, React.createElement('h1', null, 'Hello Jeremy'))
}

export default Hello