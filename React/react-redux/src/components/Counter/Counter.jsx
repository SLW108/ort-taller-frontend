const Counter = ({ increment, decrement }) => {
  return (
    <>
      <button onClick={decrement}>Decrementar</button>
      <button onClick={increment}>Incrementar</button>
    </>
  )
}

export default Counter
