import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from './Landing';
import Login from './Login';
import Signup from './Signup';
import Profile from './Profile';

const AllRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/profile' element={<Profile />}></Route>
    </Routes>
  );
}

export default AllRouter;