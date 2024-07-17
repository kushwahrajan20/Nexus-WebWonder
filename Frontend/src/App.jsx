import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from './Context/AuthProvider';

import Home from './Home/Home'
import ArtAndPhoto from './Art&Photo/ArtAndPhoto'
import Blogs from './Blogs/Blogs'
import Signup from './components/Signup'
import Dashboard from './Dashboard/Dashboard'
import Career from './Career/Career'
import Explore from './Explore/Explore'
import Community from './Community/Community'

function App() {

  const [authUser,setAuthUser]=useAuth();
  console.log(authUser)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/ArtAndPhoto" element={ authUser? <ArtAndPhoto />:<Navigate to='/Signup'/> }></Route>
        <Route path="/Blogs" element={authUser? <Blogs/>:<Navigate to='/Signup'/> }></Route>
        <Route path="/Dashboard" element={authUser? <Dashboard/>:<Navigate to='/Signup'/> }></Route>
        <Route path="/Career" element={authUser? <Career/>:<Navigate to='/Signup'/> }></Route>
        <Route path="/Explore" element={authUser? <Explore/>:<Navigate to='/Signup'/> }></Route>
        <Route path="/Community" element={authUser? <Community/>:<Navigate to='/Signup'/> }></Route>
        
      </Routes>
      <Toaster/>
    </>
  )
}

export default App