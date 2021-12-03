import React from 'react';
import Content from '../Content/Content';
import Portfolio from '../../Home/Portfolio/Portfolio';
import About from '../../Home/About/About';
import Contact from '../../Home/Contact/Contact';
import Exprience from '../Exprience/Exprience';
import Facts from '../Facts/Facts';
import Skills from '../Skills/Skill';
import Review from '../../Review/Review';
// import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Content></Content>
           <About></About>
           <Exprience></Exprience>
           <Facts></Facts>
           <Skills></Skills>
          {/* <Service></Service> */}
           <Portfolio></Portfolio>
           <Review></Review>
           <Contact></Contact>

        </div>
    );
};

export default Home;