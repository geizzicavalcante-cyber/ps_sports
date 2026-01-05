import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import './RootLayout.css'

function RootLayout() {
  return (
    <div className="root-layout">
        <header>
          <div className="logo-container">
            <img src="https://pssports.com.br/wp-content/uploads/2024/11/logo_pssports-removebg-preview-1.png" alt="PS Sports Logo" className="logo" />
            <h1>PS Sports</h1>
          </div>
          <nav>
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/cadastro"}>Cadastro</NavLink>
              <NavLink to={"/dashboard"}>Dashboard</NavLink>
              <NavLink to={"/gestao"}>Gestão</NavLink>
          </nav>
        </header>
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default RootLayout