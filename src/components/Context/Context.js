import React, { Component } from 'react'
import ComponentC from './ComponentC'
import { UserProvider } from './userContext'

class Context extends Component {
  render() {
    return (
      <div>
        <UserProvider value="Edward">
          <ComponentC />
        </UserProvider>
      </div>
    )
  }
}

export default Context
