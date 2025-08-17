import React from 'react'

export default function Hero() {
  return (
    <section id="home" className="py-5 bg-dark text-white">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-12 col-lg-6">
            <h1 className="display-5 fw-bold">Power • Protect • Illuminate</h1>
            <p className="lead mt-3">
              We design and deploy reliable <strong>solar & security</strong> solutions:
              solar fencing, pumps, street lights, designer poles, CCTV and high mast poles.
            </p>
            <div className="d-flex gap-3 mt-4">
              <a href="#contact" className="btn btn-primary btn-lg">Get a Free Quote</a>
              <a href="#services" className="btn btn-outline-light btn-lg">Our Services</a>
            </div>
          </div>
          {/* <div className="col-12 col-lg-6">
            <div className="ratio ratio-16x9 rounded overflow-hidden shadow">
              <iframe
                src="https://www.youtube.com/embed/3B0Y3Kk1t1Y?rel=0"
                title="Solar Solutions"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}
