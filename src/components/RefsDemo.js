import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
      super(props)

      this.inputRef = React.createRef()
      
      //old approach
      this.cbRef = null
      this.setCbRef = (element) => {
          this.cbRef = element
      }
    
      this.state = {
         
      }
    }
    
    //automatically called after element is rendered
    componentDidMount() {
        //set focus 
        // this.inputRef.current.focus()
        // console.log(this.inputRef)

        //old approach
        if(this.cbRef) {
            this.cbRef.focus()
        }

    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <input type="text" ref={this.setCbRef} />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default RefsDemo
