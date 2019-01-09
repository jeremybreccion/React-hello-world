import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {

    //1st
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Jeremy'
      }

      console.log('Lifecycle A constructor')
    }

    //2nd
    static getDerivedStateFromProps(props, state) {
        console.log('Lifecycle A getDerivedStateFromProps')
        return null
    }

    //update lifecycle - 1 (before render)
    shouldComponentUpdate() {
        console.log('Lifecycle A shouldComponentUpdate')
        return true
    }

    //update lifecycle - 2 (after render)
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Lifecycle A getSnapshotBeforeUpdate')
        return null
    }

    //update lifecycle - 3 (after render)
    componentDidUpdate() {
        console.log('Lifecycle A componentDidUpdate')
    }

    //4th
    componentDidMount() {
        console.log('Lifecycle A componentDidMount')
    }

    changeState = () => {
        this.setState({
            name: 'Christian'
        })
    }

    //3rd
  render() {
    console.log('Lifecycle A render')
    return (
      <div>
        LifecycleA render
        <button onClick={this.changeState}>Change State</button>
        <LifecycleB/>
      </div>
      
    )
  }
}

export default LifecycleA
