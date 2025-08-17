import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
        <p className="mb-0">© {new Date().getFullYear()} Sahil Traders. All rights reserved.</p>
        <div className="d-flex gap-3">
          <a href="tel:+917077009372" className="link-light text-decoration-none">Call</a>
          <a href="mailto:sahiltraders69@gmail.com" className="link-light text-decoration-none">Email</a>
          <a href="#home" className="btn btn-outline-light btn-sm">Back to top</a>
        </div>
      </div>
    </footer>
  )
}
