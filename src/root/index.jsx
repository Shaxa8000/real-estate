import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';

const Root = () => {
  return (
    <Routes>
        <Route path='/home' element={<h1>Home</h1>}/>
        <Route path='/properties' element={<h1>Properties</h1>}/>
        <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
        <Route path='/' element={<Navigate to='/home'/>}/>
    </Routes>
  )
};

export default Root