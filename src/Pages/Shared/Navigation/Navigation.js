import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    
    Link
  } from "react-router-dom";
const Navigation = () => {
    return (
        <div>
            <div data-spy="scroll" data-target=".navbar" data-offset="51">
        <div class="wrapper">
            <div class="sidebar">
                <div class="sidebar-header">
                    <img src="img/profile.jpg" alt="Image"/>
                </div>
                <div class="sidebar-content">
                    <nav class="navbar navbar-expand-md bg-dark navbar-dark">
                        <a href="#" class="navbar-brand">Navigation</a>
                        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarCollapse">
                            <ul class="nav navbar-nav">
                                <li class="nav-item">
                                    <Link class="nav-link" to="home">Home<i class="fa fa-home"></i></Link>
                                </li>
                                <li class="nav-item">
                                    < Link class="nav-link" to="about">About<i class="fa fa-address-card"></i></Link>
                                </li>
                                
                                <li class="nav-item">
                                    <Link class="nav-link" to="portfolio">Portfolio<i class="fa fa-file-archive"></i></Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="contact">Contact<i class="fa fa-envelope"></i></Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div class="sidebar-footer">
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
            <div class="content">
               
                <div class="header" id="header">
                    <div class="content-inner">
                        <p>I'm</p>
                        <h1>Michael Miller</h1>
                        <h2></h2>
                        <div class="typed-text">Web Designer, Web Developer, Front End Developer, Apps Developer, Graphic Designer</div>
                    </div>
                </div>
               
                <div class="large-btn">
                    <div class="content-inner">
                        <a class="btn" href="#"><i class="fa fa-download"></i>Resume</a>
                        <a class="btn" href="#"><i class="fa fa-hands-helping"></i>Hire Me</a>
                    </div>
                </div>
               
                
                </div>
        </div>
        </div>
        </div>
    );
};

export default Navigation;