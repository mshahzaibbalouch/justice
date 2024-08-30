import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigationbar = () => {
  return (
    <div>
      <nav className="navbar  navbar-expand-xxl bg-theme-primary  text-uppercase">
        <div className="container-sm">
          <NavLink className="navbar-brand" href="/"><img src="/img/logo.png" alt="logo" /></NavLink>
          <button className="navbar-toggler bg-white border-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon text-white"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to={'/'}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={'/about'}>About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={''}>Comercial</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={''}>Public Sector</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={''}>Home Sequrity</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={''}>resources</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={''}>News</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={''}>Careers</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={''}>Contact</NavLink>
              </li>
            </ul>

          </div>
          
        </div>
      </nav>
    </div>
  )
}

export default Navigationbar