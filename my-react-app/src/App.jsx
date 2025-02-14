import { BrowserRouter } from 'react-router-dom'
import CreateAccountfrom from './components/CreateAccountForm'
import Navbar from './components/header/Navbar'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <CreateAccountfrom />
    </BrowserRouter>
  )
}

export default App
