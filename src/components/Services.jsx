import React from 'react'
import { staticImages } from '../assets/images'
import '../styles/_service.scss'

const items = [
  { 
    title: 'Solar Fencing', 
    desc: 'Secure perimeters while harnessing solar power for low operating costs.', 
    icon: staticImages.services.solarFencing 
  },
  { 
    title: 'Solar Pump', 
    desc: 'Efficient water pumping solutions for farms and remote sites.',
    icon: staticImages.services.solarPump
  },
  { 
    title: 'Solar Street Light', 
    desc: 'Bright, dependable, and grid-independent street lighting.', 
    icon: staticImages.services.streetLight,
  },
  { 
    title: 'Designer Pole', 
    desc: 'Aesthetic custom poles for modern urban landscapes.', 
    icon: staticImages.services.pole,
  },
  { 
    title: 'CCTV', 
    desc: 'Smart surveillance for homes, offices, and industrial sites.', 
    icon: staticImages.services.camera,
  },
  { 
    title: 'High Mast Pole', 
    desc: 'Robust, corrosion-resistant poles for wide-area illumination.', 
    icon: staticImages.services.highMastPole,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Our Services</h2>
        <div className="row g-4">
          {items.map((it) => (
            <div className="col-12 col-sm-6 col-lg-4" key={it.title}>
              <div className="card h-100 shadow-sm service-card">
                <div className="card-body">
                  <h5 className="card-title d-flex align-items-center justify-content-center gap-2">
                    <span class="material-symbols-outlined">
                      {it.icon}
                    </span>
                    {it.title}
                  </h5>
                  <p className="card-text">{it.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
