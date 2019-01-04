import React, { Component } from 'react'

class Counter extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }

  increment() {
    //   setState is asynchronous, need callback function to wait for its result
    //   this.setState({
    //       count: this.state.count + 1
    //   }, () => {
    //       console.log(this.state.count)
    //   })

    //to update state based on previous states, pass in a function instead of object (above code)
    this.setState((prevState, props) => ({
        count: prevState.count + 1
    }))
  }

  incrementFive() {
      this.increment()
      this.increment()
      this.increment()
      this.increment()
      this.increment()
  }
  
  render() {
    return (
      <div>
        Count: {this.state.count} <br/>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    )
  }
}

export default Counter
