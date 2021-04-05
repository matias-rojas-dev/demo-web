import React from 'react';
import HTML from '../assets/img/html-5.svg';
import CSS from '../assets/img/css.svg';
import JAVASCRIPT from '../assets/img/javascript.svg';
import REACT from '../assets/img/react.svg';
import SASS from '../assets/img/sass.svg';

const Tecnologies = () => {


    return (
        <div className='tec__content mt-100'>
            <h3 className='subtitle ta-center'>Tecnologies</h3>
            <p className='ta-center my-10'>It is a long established fact that a reader
            will be distracted by the readable content of a page when looking at its l
            ayout. The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content here'
            , making it look like readable English. Many desktop publishing packages 
            and web page editors now use</p>
            <div className='tec__container my-10'>
                <img className='tec__imgs' src={HTML} alt='HTML' />
                <img className='tec__imgs' src={CSS} alt='CSS' />
                <img className='tec__imgs' src={SASS} alt='SASS' />
                <img className='tec__imgs' src={JAVASCRIPT} alt='JS' />
                <img className='tec__imgs' src={REACT} alt='REACT' />
            </div>
        </div>
    )
}

export default Tecnologies;