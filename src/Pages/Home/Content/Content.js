import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Content = () => {
    return (
        <div className="p-4">
            <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
            {/* <img src="assets/img/moin-bg.jpg" alt=""></img> */}
    <div class="hero-container" data-aos="fade-in">
      <h1>Moinuddin kamal</h1>
      <p>I'm <span class="typed" data-typed-items="Designer, Developer, Freelancer, Problem Solver"></span></p>
    </div>
  </section>
        </div>
    );
};

export default Content;