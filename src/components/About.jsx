import React from 'react'

export default function About() {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-12 col-lg-6">
            <h2 className="fw-bold">About Sahil Traders</h2>
            <p className="mb-2">
              We are a one-stop provider for solar and security infrastructure. From design to installation and support,
              our team delivers projects that are reliable, compliant, and cost-effective.
            </p>
            <ul className="mb-0">
              <li>Turnkey projects with quality materials</li>
              <li>Experienced installation & maintenance team</li>
              <li>Timely delivery and transparent pricing</li>
            </ul>
          </div>
          <div className="col-12 col-lg-6">
            <div className="p-4 border rounded-4 bg-white shadow-sm">
              <h5 className="fw-semibold">Why Choose Us?</h5>
              <div className="row mt-3 g-3">
                <div className="col-6">
                  <div className="border rounded p-3 h-100">
                    <span className="d-block fs-4 fw-bold">100+</span>
                    Projects Delivered
                  </div>
                </div>
                <div className="col-6">
                  <div className="border rounded p-3 h-100">
                    <span className="d-block fs-4 fw-bold">24/7</span>
                    Support
                  </div>
                </div>
                <div className="col-6">
                  <div className="border rounded p-3 h-100">
                    <span className="d-block fs-4 fw-bold">A+</span>
                    Quality Components
                  </div>
                </div>
                <div className="col-6">
                  <div className="border rounded p-3 h-100">
                    <span className="d-block fs-4 fw-bold">Custom</span>
                    Solution
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
