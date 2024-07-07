import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './Home/Home'
import ArtAndPhoto from './Art&Photo/ArtAndPhoto'
import Blogs from './Blogs/Blogs'
import Signup from './components/Signup'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/ArtAndPhoto" element={<ArtAndPhoto />}></Route>
        <Route path="/Blogs" element={<Blogs/>}></Route>
      </Routes>
    </>
  )
}

export default App