import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        return <h1>Welcom {this.props.name} a.k.a {this.props.godName}</h1>
    }
}

export default Welcome