"use client"
import React from 'react'

export default function Stats () {
  return (
   <>
 <section id="stats" className="stats section accent-background">
  <img src="assets/img/stats-bg.jpg" alt data-aos="fade-in" />
  <div className="container position-relative" data-aos="fade-up" data-aos-delay={100}>
    <div className="row gy-4">
      <div className="col-lg-3 col-md-6">
        <div className="stats-item text-center w-100 h-100">
          <span data-purecounter-start={0} data-purecounter-end={232} data-purecounter-duration={0} className="purecounter">232</span>
          <p>Clients</p>
        </div>
      </div>{/* End Stats Item */}
      <div className="col-lg-3 col-md-6">
        <div className="stats-item text-center w-100 h-100">
          <span data-purecounter-start={0} data-purecounter-end={521} data-purecounter-duration={0} className="purecounter">521</span>
          <p>Projects</p>
        </div>
      </div>{/* End Stats Item */}
      <div className="col-lg-3 col-md-6">
        <div className="stats-item text-center w-100 h-100">
          <span data-purecounter-start={0} data-purecounter-end={1453} data-purecounter-duration={0} className="purecounter">1453</span>
          <p>Hours Of Support</p>
        </div>
      </div>{/* End Stats Item */}
      <div className="col-lg-3 col-md-6">
        <div className="stats-item text-center w-100 h-100">
          <span data-purecounter-start={0} data-purecounter-end={32} data-purecounter-duration={0} className="purecounter">32</span>
          <p>Awards</p>
        </div>
      </div>{/* End Stats Item */}
    </div>
  </div>
</section>{/* /Stats Section */}

   
   </>
  )
}
