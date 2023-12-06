import { useState } from 'react'
import {Home,About,Projects,Contact} from "./pages"
import './index.css'
import {Route,BrowserRouter as Router, Routes} from "react-router-dom"
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
   <main className='bg-slate-300/20 h-[100vh]'>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </Router>
   </main>
  )
}

export default App
