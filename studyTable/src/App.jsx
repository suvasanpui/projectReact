import React from 'react'
import Navbar from './components/headers/Navbar'
import Footer from './components/footers/Footer'
import AcademicPage from './components/AcademicPage'

const App = () => {
  return (
    <div>
      <Navbar />
      <AcademicPage/>
      <Footer/>
    </div>
  )
}

export default App