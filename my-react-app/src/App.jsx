import { BrowserRouter } from 'react-router-dom'
import CreateAccountfrom from './components/CreateAccountForm'
import Navbar from './components/header/Navbar'
import './App.css'
import TopFooter from './components/footer/TopFooter'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <CreateAccountfrom />
      <TopFooter/>
    </BrowserRouter>
  )
}

export default App
