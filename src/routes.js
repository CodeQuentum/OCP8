import React from 'react';
import { Route, Routes } from 'react-router-dom'; 
import Home from './pages/Home';
import Project from './pages/Project';
import Login from './pages/Login';
import NotFound from './pages/NotFound'; 
import AdminProject from './pages/AdminProject';
import EditProject from './pages/Editproject';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projet/:id" element={<Project />} />
      <Route path="/l0g1n" element={<Login />} />
      <Route path="/admin" element={<AdminProject/>}/>
      <Route path="/edit/:projectId" element={<EditProject />}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesComponent;
