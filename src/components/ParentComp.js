import React, { Component, PureComponent } from 'react'
import PureComp from './PureComp';
import RegComp from './RegComp';
import MemoComp from './MemoComp';

export class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Jeremy'
      }
    }
    
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Jeremy'
            })
        }, 2000)
    }

    /**
     * during initial load, console logs for parent, regular, and pure components are rendered.
     * but after that, every 2 seconds, setState is called which will re render parent & regular components ONLY
     */

  render() {
    console.log('Parent Component render')
    return (
      <div>
        Parent Component
        {/* <RegComp name={this.state.name}/>
        <PureComp name={this.state.name}/> */}
        <MemoComp name={this.state.name} />
      </div>
    )
  }
}

export default ParentComp
