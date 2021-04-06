import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../assets/img/banner.jpg'
const Header = () => (
    <header>
        <div className='header__nav'>
            <div className='header__nav-menu'>
                <h2>NOSOTROS</h2>
                <h2>TRABAJOS</h2>
                <Link to='/contact'>
                    <h2>CONTACTO</h2>
                </Link>
            </div>
        </div>
        <img className='header_banner' src={Banner} alt='Banner' />
    </header>
)

export default Header;