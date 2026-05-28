import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
//import ThisApp from './lists/App.jsx'
import { Form } from './forms/App.jsx'

import InfiniteScroll from './infiniteScroll/simple.tsx'
import Accordion from './components/accordion/page.tsx'
class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 })
  }
  render() {
    return <>
      <Accordion />
    </>
  }

}

export default App
