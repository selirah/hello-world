import React, { Component } from 'react'

class UserGreeting extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: true
    }
  }

  render() {
    /* approach number 1 (if/else) */
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Edward</div>
    // } else {
    //   return <div>Welcome Guest</div>
    // }

    /* approach number 2 (element variable) */
    // let message
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Edward</div>
    // } else {
    //   message = <div>Welcome Guest</div>
    // }

    // return <div>{message}</div>

    /* approach number 3 (ternary conditional operator) */
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Edward</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // )

    /* approach number 4 (short circuit operator) */
    return this.state.isLoggedIn && <div>Welcome Edward</div>
  }
}

export default UserGreeting
