import { Component } from 'react'
import './App.css'
import ClickCounter from './components/HOCs/ClickCounter'
import HoverCounter from './components/HOCs/HoverCounter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClickCounter name="Edward" />
        <HoverCounter />
      </div>
    )
  }
}

export default App
