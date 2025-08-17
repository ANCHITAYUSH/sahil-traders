import React from 'react'

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light sticky-top shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#home">
          <img src="/sun_logo.png" alt="Sahil Traders" width="48" height="48" className="me-2" />
          Sahil Traders
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            <li className="nav-item ms-lg-3">
              <a className="btn btn-primary" href="tel:+917077009372">Call: 7077009372</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
