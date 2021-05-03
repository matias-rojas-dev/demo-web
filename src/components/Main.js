import React from 'react';
import AboutUs from './AboutUs';
import Contact from './Contact';
import FormContact from './FormContact';
import Header from './Header';
import Objectives from './Objectives';
import Portfolio from './Portfolio';
import Tecnologies from './Tecnologies';

const Main = () => (
    <>  
            <div className='container'>
                <Header />
                <AboutUs />
                <Objectives />
                <Tecnologies />
                <Portfolio />
                <Contact/>
            </div>
    </>
    
)

export default Main;