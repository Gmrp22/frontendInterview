import React from 'react'

import { useState, useEffect } from 'react'

function ListItem({ item }) {
  console.log(' ListItem rerendered', item.id)
  return <p>{item.name}</p>
}

function App() {

  const data = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
    { id: 3, name: 'c' },
    { id: 4, name: 'd' },
    { id: 5, name: 'e' }

  ]
  return <>
    {data.map((item) => (
      <List Item key={item.id} item={item} />
    ))}
  </>
}

function Main() {
  const [state, setState] = useState(0)
  return <>
    <h1>Main</h1>
    <App />
    <button onClick={() => setState(state + 1)}>rerender</button>
    <p>{state}</p>
  </>
}
export default Main


//THIS

//The value of this varies depending on where is used. 
//For arrwo fucntions ,this will be the context where it was created.
//For regular fucntions ,this will be the context where it was called. so its dynamic, could fail if we
// for objects it will be the object itself. IF WE CALL TE FUCNITO USING THE OBJECT
//In strict mode it will be undefined. for functions , but not for objects or arrow functions(huerfanas )
//For classes this will be the instance of the class.