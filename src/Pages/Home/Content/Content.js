import React, { useEffect,Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Typical from 'react-typical'

const Content = () => {

 
    

    return (
        <div className="p-4">
            <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
            {/* <img src="assets/img/moin-bg.jpg" alt=""></img> */}
    <div class="hero-container" data-aos="fade-in">
      <h1>Moinuddin kamal</h1>
      
     
    </div>
    <div class="hero-container" data-aos="slide-left">
    <p>
    <Typical
    //
    loop={Infinity}
    steps={[
      'Full Stack Developer',
       1000, 
       'MERN Stack Developer',
        1000,
       'React Developer',
        1000,
       'Frontend Developer',
        1000,
      ]}
    // wrapper="p"
  />
    </p>
      
    </div>
  </section>
  <button className="btn-secodndary">Download Now</button>
        </div>
    );
    
};

export default Content;