import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 class="m-5 text-3xl font-bold underline decoration-amber-300">
        Hello world!
      </h1>
    </>
  )
}

export default App
