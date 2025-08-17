import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-lg-6">
            <h2 className="fw-bold">Get in Touch</h2>
            <p className="mb-4">Tell us about your requirement. We’ll get back within 24 hours.</p>
            <form className="row g-3" onSubmit={(e) => e.preventDefault()}>
              <div className="col-md-6">
                <label htmlFor="name" className="form-label">Name</label>
                <input id="name" className="form-control" placeholder="Your name" required />
              </div>
              <div className="col-md-6">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input id="phone" className="form-control" placeholder="+91 ..." />
              </div>
              <div className="col-12">
                <label htmlFor="email" className="form-label">Email</label>
                <input id="email" type="email" className="form-control" placeholder="you@example.com" required />
              </div>
              <div className="col-12">
                <label htmlFor="msg" className="form-label">Message</label>
                <textarea id="msg" className="form-control" rows="4" placeholder="I need solar street lights for ..."></textarea>
              </div>
              <div className="col-12 d-grid d-sm-flex gap-3">
                <button className="btn btn-primary btn-lg" type="submit">Request Quote</button>
                <a className="btn btn-outline-secondary btn-lg" href="mailto:sahiltraders69@gmail.com">Email Us</a>
              </div>
            </form>
          </div>
          <div className="col-12 col-lg-6">
            <div className="p-4 bg-light rounded-4 h-100">
              <h5 className="fw-semibold">Contact Details</h5>
              <p className="mb-1"><strong>Phone:</strong> <a href="tel:+917077009372">+91 7077009372</a></p>
              <p className="mb-3"><strong>Email:</strong> <a href="mailto:sahiltraders69@gmail.com">sahiltraders69@gmail.com</a></p>
              <h6 className="mt-4">Business Hours</h6>
              <p className="mb-0">Mon–Sat: 9:00 AM – 7:00 PM</p>
              <p className="mb-0">Sunday: Closed</p>
              {/* <div className="ratio ratio-16x9 mt-3">
                <iframe
                  title="Map"
                  src="https://www.google.com/maps?q=India&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
