import React from 'react';
import {
  Link
} from "react-router-dom";

const Footer = () => {
    return (
        <div>
       
       <footer id="footer">
    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong><span>Md Moinuddin kamal</span></strong>
      </div>
      <div class="credits">
        
        Designed by <Link to="/home">Moinuddin Kamal</Link>
      </div>
    </div>
  </footer>

  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
          
            
        
        
        
        <a href="#" className="back-to-top"><i className="fa fa-angle-double-up"></i></a> 
        </div>
    );
};

export default Footer;