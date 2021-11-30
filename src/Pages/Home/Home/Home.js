import React from 'react';
import Content from '../Content/Content';
import Portfolio from '../../Home/Portfolio/Portfolio';
import About from '../../Home/About/About';
import Contact from '../../Home/Contact/Contact';
import Education from '../Education/Education';
import Exprience from '../Exprience/Exprience';

const Home = () => {
    return (
        <div>
            <Content></Content>
           <About></About>
           <Education></Education>
           <Exprience></Exprience>
           <Portfolio></Portfolio>
           <Contact></Contact>

        </div>
    );
};

export default Home;