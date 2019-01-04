import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        const {name, godName} = this.props

        //destructure state (for class components only)
        const {state1, state2} = this.state
        return <h1>Welcome {name} a.k.a {godName}</h1>
    }
}

export default Welcome