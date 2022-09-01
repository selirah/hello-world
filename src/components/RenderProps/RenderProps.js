import React, { Component } from 'react'
import ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter'
import Counter from './Counter'
// import User from './User'

class RenderProps extends Component {
  render() {
    return (
      <div>
        {/* <User render={(isLoggedIn) => (isLoggedIn ? 'Edward' : 'Guest')} /> */}
        {/* <Counter
          render={(count, incrementCount) => (
            <ClickCounter count={count} incrementCount={incrementCount} />
          )}
        /> */}
        {/* <Counter
          render={(count, incrementCount) => (
            <HoverCounter count={count} incrementCount={incrementCount} />
          )}
        /> */}
        <Counter>
          {(count, incrementCount) => (
            <ClickCounter count={count} incrementCount={incrementCount} />
          )}
        </Counter>
        <Counter>
          {(count, incrementCount) => (
            <HoverCounter count={count} incrementCount={incrementCount} />
          )}
        </Counter>
      </div>
    )
  }
}

export default RenderProps
