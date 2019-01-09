import React, { Component } from 'react'

class LifecycleB extends Component {

    //1st
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Jeremy'
      }

      console.log('Lifecycle B constructor')
    }

    //2nd
    static getDerivedStateFromProps(props, state) {
        console.log('Lifecycle B getDerivedStateFromProps')
        return null
    }

    //update lifecycle - 1 (before render)
    shouldComponentUpdate() {
        console.log('Lifecycle B shouldComponentUpdate')
        return true
    }

    //update lifecycle - 2 (after render)
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Lifecycle B getSnapshotBeforeUpdate')
        return null
    }

    //update lifecycle - 3 (after render)
    componentDidUpdate() {
        console.log('Lifecycle B componentDidUpdate')
    }

    //4th
    componentDidMount() {
        console.log('Lifecycle B componentDidMount')
    }

    //3rd
  render() {
    console.log('Lifecycle B render')
    return (
      <div>
        LifecycleB render
      </div>
    )
  }
}

export default LifecycleB
