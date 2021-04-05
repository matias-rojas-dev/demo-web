import React from 'react'
import Banner from '../assets/img/banner.jpg'
const Header = () => (
    <header>
        <div className='header__nav'>
            <div className='header__nav-menu'>
                <h2>NOSOTROS</h2>
                <h2>TRABAJOS</h2>
                <h2>CONTACTO</h2>
            </div>
        </div>
        <img className='header_banner' src={Banner} alt='Banner' />
    </header>
)

export default Header;