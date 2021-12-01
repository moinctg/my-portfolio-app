import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

const Content = () => {

  useEffect( ()=>{
   AOS.init({ duration: 2000 });
  }
    ,[])
    return (
        <div className="p-4">
            <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
            {/* <img src="assets/img/moin-bg.jpg" alt=""></img> */}
    <div class="hero-container" data-aos="fade-in">
      <h1>Moinuddin kamal</h1>
      
     
    </div>
    <div class="hero-container" data-aos="slide-left">
      <p>I am Web Designer,Full Stack Develper,Frontend Developer,React Developer</p>
    </div>
  </section>
        </div>
    );
};

export default Content;