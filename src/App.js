import React from 'react'
import HeadBody from './Component/HeadBody'
import Navbar from './Component/Navbar'
import ErrorBoundaries from './Component/ErrorBoundaries'
import About from './Component/About'
import Footer from './Component/Footer'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
    <div className='bgColor' > 
    <Navbar/>
    <ErrorBoundaries>
    <HeadBody/>
    <About/>
    <Footer/>
    </ErrorBoundaries>
    
    </div>
    </BrowserRouter>
  )
}

export default App
