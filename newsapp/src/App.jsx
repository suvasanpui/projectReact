import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Newsapp from './components/Newsapp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Newsapp/>
    </>
  )
}

export default App
