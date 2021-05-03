import React from 'react'
import DefaultImage from '../assets/img/default-img.jpg';

const Portfolio = () => {

    const cards = [1,2,3,4,5,6,7,8,9,10];

    return (
        <div>
            <h3 className='subtitle mt-100 ta-center'>Nuestra mejor presentación son nuestros trabajos</h3>
            <div className='port__container'>
                {
                    cards.map(card => (
                        <img className='port__card' src={DefaultImage} alt='Work' />
                    ))
                }
            </div>
        </div>
    )
}

export default Portfolio;