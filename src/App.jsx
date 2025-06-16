//import { Home } from 'lucide-react'
import React from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Home from './pages/Home'


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>} />
      <Route path="*" element={<NotFound/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
