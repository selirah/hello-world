import React, { Component } from 'react'

class EventBind extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Hello'
    } /* approach number 2 */
    /* this.clickHandler = this.clickHandler.bind(this) */
  }

  /* approach number 1, 2, 3 */
  // clickHandler() {
  //   this.setState({ message: 'Good bye!' })
  //   console.log(this)
  // }

  /* approach number 4 */
  clickHandler = () => {
    this.setState({ message: 'Good bye!' })
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}{' '}
        {/* approach number 1 */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}{' '}
        {/* approach number 2 */}
        <button onClick={this.clickHandler}>Click</button>{' '}
        {/* approach number 3, 4 */}
      </div>
    )
  }
}

export default EventBind
