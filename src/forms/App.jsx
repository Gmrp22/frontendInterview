import React, { useState } from 'react'
export { Form }

function Form() {
  const [state, setState] = useState({ name: '', email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [data, setData] = useState(null)
  const handleChange = (e) => {

    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    setError(''); // <--- Limpiamos errores previos
    setData(null); // <--- Limpiamos datos previos
    setLoading(true)
    e.preventDefault()
    try {
      const success = await callApi(state)
      setLoading(false)
      setData(success)
    }
    catch (error) {
      setLoading(false)
      setError(error)
    }
  }
  return <form onSubmit={handleSubmit}>
    <label>Nombre</label>
    <input type="text" value={state.name} onChange={handleChange} name='name' />
    <label>Email</label>
    <input type="text" value={state.email} onChange={handleChange} name='email' />
    <label>Password</label>
    <input type="text" value={state.password} onChange={handleChange} name='password' />
    <button type="submit" disabled={loading}>{loading ? 'Loading...' : 'Submit'}</button>

    {data &&
      <>
        <p>{state.name}</p>
        <p>{state.email}</p>
        <p>{state.password}</p>
      </>
    }

    {!data && error && <p>Error: {error}</p>}
  </form>
}


function callApi(state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state.name == 'Gildar' && state.email == 'gildar' && state.password == 'gildar') {
        resolve(true)
      }
      else {
        reject(false)
      }
    }, 1000)
  })
}