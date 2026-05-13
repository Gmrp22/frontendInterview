import React from 'react'



class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
    this.handleDecrement = this.handleDecrement.bind(this)
  }
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 })
  }
  handleDecrement() {
    this.setState({ count: this.state.count - 1 })
  }
  render() {
    return <>
      <button onClick={this.handleIncrement} >Increment</button>
      <button onClick={this.handleDecrement} >Decrement</button>
      <p>{this.state.count}</p>
    </>
  }

}

export default App


//THIS

//The value of this varies depending on where is used. 
//For arrwo fucntions ,this will be the context where it was created.
//For regular fucntions ,this will be the context where it was called. so its dynamic, could fail if we
// for objects it will be the object itself. IF WE CALL TE FUCNITO USING THE OBJECT
//In strict mode it will be undefined. for functions , but not for objects or arrow functions(huerfanas )
//For classes this will be the instance of the class.