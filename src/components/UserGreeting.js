import React, { Component } from 'react'

class UserGreeting extends Component {

 constructor(props) {
   super(props)
 
   this.state = {
      isLoggedIn: true
   }
 }
 
  render() {
    //approach 1 - if else doesnt work in JSX
    // if(this.state.isLoggedIn) {
    //     return (
    //         <div>
    //             <div>Welcome Jeremy</div>
    //         </div>
    //     )
    // } else {
    //     return (
    //         <div>
    //             <div>Welcome Guest</div>
    //         </div>
    //     )
    // }

    //2nd approach - element variable
    // let message
    // if(this.state.isLoggedIn) {
    //     message = <div>Welcome Jeremy</div>
    // } else {
    //     message = <div>Welcome Guest</div>
    // }

    //3rd approach - ternary conditional operator
    // return this.state.isLoggedIn ? (
    //     <div>Welcome Jeremy</div>
    // ) : (
    //     <div>Welcome Guest</div>
    // )

    //4th approach - short circuit (variation of 3rd approach)
    return this.state.isLoggedIn && <div>Welcome Jeremy</div>
    
    // return (
    //   <div>
    //     {/* <div>Welcome Jeremy</div>
    //     <div>Welcome Guest</div> */}
    //     {/* {message} */}
    //   </div>
    // )
  }
}

export default UserGreeting
