import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './Navigation.css';
import {
    Link
  } from "react-router-dom";

const Navigation = () => {
    return (
        <div>
        <header id="header">
    <div className="d-flex flex-column">

      <div className="profile">
        <img src="assets/img/moin.jpg" alt="" className="img-fluid rounded-circle"/>
        <h1 className="text-light"><Link to="/home">Moinuddin Kamal</Link></h1>
        <div className="social-links mt-3 text-center">
          <a href="https://twitter.com/moinuddin_kamal" className="twitter"><i className="bx bxl-twitter"></i></a>
          <a href="https://www.facebook.com/Engmoin" className="facebook"><i className="bx bxl-facebook"></i></a>
          <a href="https://www.instagram.com/cpimoinuddin65/" className="instagram"><i className="bx bxl-instagram"></i></a>
          <a href="https://myaccount.google.com/profile?pli=1" className="google-plus"><i className="bx bxl-skype"></i></a>
          <a href="https://www.linkedin.com/in/md-moinuddin-kamal-84087310a/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
        </div>
      </div>

      <nav id="navbar" className="nav-menu navbar">
        <ul>
          <li><Link to="home" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></Link></li>
          <li>< Link to="about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></ Link></li>
          <li><Link to="exprience" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></Link></li>
          <li><Link to="portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio </span></Link></li>
          <li><Link to="service" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Services</span></Link></li>
          <li><Link to="contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></Link></li>
        </ul>
      </nav>
    </div>
  </header>
            </div>
    );
};

export default Navigation;