import React, { Component } from 'react'

class EventBind extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       message: 'Hello'
    }

    //binding events (3rd approach)
    //this.clickHandler = this.clickHandler.bind(this)
  }

  //3rd approach
//   clickHandler() {
//       this.setState({
//           message: 'Goodbye'
//       })

//   }

  //4th approach (experimental according to documentation)
  clickHandler = () => {
    this.setState({
        message: 'Goodbye'
    })
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* 
            binding approaches (for 3rd, see constructor. for 4th approach, see clickHandler arrow function)
            approach 2 maybe used if there are parameters
        */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind
