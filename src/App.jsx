
import './App.css'
import NavBar from './pages/NavBar'
import Home from './pages/Home'
import Footer from './pages/Footer'
import { Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import About from './pages/About'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <NavBar />
   <Routes>
    <Route path={'/'} element={<Home/>}/>
    <Route path={'/about'} element={<About/>}/>
    </Routes> 
    
    <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
