import React from 'react';
import AboutUs from './AboutUs';
import Contact from './Contact';
import Header from './Header';
import Objectives from './Objectives';
import Portfolio from './Portfolio';
import Tecnologies from './Tecnologies';

const Main = () => (
    <>
        <Header />
        <div className='container'>
            <AboutUs />
            <Objectives />
            <Tecnologies />
            <Portfolio />
            <Contact />
        </div>
    </>
    
)

export default Main;