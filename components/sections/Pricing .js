import React from 'react'

export default function Pricing () {
  return (
   <>
  <section id="pricing" className="pricing section">
  {/* Section Title */}
  <div className="container section-title" data-aos="fade-up">
    <h2>Pricing</h2>
    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
  </div>{/* End Section Title */}
  <div className="container" data-aos="fade-up" data-aos-delay={100}>
    <div className="row gy-4 gx-lg-5">
      <div className="col-lg-6">
        <div className="pricing-item d-flex justify-content-between">
          <h3>Portrait Photography</h3>
          <h4>$160.00</h4>
        </div>
      </div>{/* End Pricing Item */}
      <div className="col-lg-6">
        <div className="pricing-item d-flex justify-content-between">
          <h3>Fashion Photography</h3>
          <h4>$300.00</h4>
        </div>
      </div>{/* End Pricing Item */}
      <div className="col-lg-6">
        <div className="pricing-item d-flex justify-content-between">
          <h3>Sports Photography</h3>
          <h4>$200.00</h4>
        </div>
      </div>{/* End Pricing Item */}
      <div className="col-lg-6">
        <div className="pricing-item d-flex justify-content-between">
          <h3>Still Life Photography</h3>
          <h4>$120.00</h4>
        </div>
      </div>{/* End Pricing Item */}
      <div className="col-lg-6">
        <div className="pricing-item d-flex justify-content-between">
          <h3>Wedding Photography</h3>
          <h4>$500.00</h4>
        </div>
      </div>{/* End Pricing Item */}
      <div className="col-lg-6">
        <div className="pricing-item d-flex justify-content-between">
          <h3>Photojournalism</h3>
          <h4>$200.00</h4>
        </div>
      </div>{/* End Pricing Item */}
    </div>
  </div>
</section>{/* /Pricing Section */}

   
   </>
  )
}
