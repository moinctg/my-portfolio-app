import React from 'react';
import Content from '../Content/Content';
import Portfolio from '../../Home/Portfolio/Portfolio';
import About from '../../Home/About/About';
import Contact from '../../Home/Contact/Contact';

const Home = () => {
    return (
        <div>
            <Content></Content>
           <About></About>
           <Portfolio></Portfolio>
           <Contact></Contact>

        </div>
    );
};

export default Home;