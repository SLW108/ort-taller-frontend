import { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0)

  const onHandleIncrement = () => {
    setCounter(counter + 1)
  }

  const onHandleDecrement = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={onHandleDecrement}>Decrementar</button>
      <button onClick={onHandleIncrement}>Incrementar</button>
    </>
  )
}

export default Counter
