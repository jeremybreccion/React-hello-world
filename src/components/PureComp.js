import React, { PureComponent } from 'react'

class PureComp extends PureComponent {

    //use PureComponent to prevent unnecessary re-renders

  render() {
    console.log('Pure Component render')
    return (
      <div>
        Pure Component {this.props.name}
      </div>
    )
  }
}

export default PureComp
