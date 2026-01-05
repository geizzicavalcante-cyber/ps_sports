import React from 'react';
import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Cadastro from './pages/Cadastro/Cadastro';
import Dashboard from './pages/Dashboard';
import Gestao from './pages/Gestao';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home/>} />
      <Route path="cadastro" element={<Cadastro />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="gestao" element={<Gestao />} />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
