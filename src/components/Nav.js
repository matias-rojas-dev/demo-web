import React from 'react'
import { Link } from 'react-router-dom'
import Portfolio from './Portfolio';

const Nav = () => (
        <div className='header__nav'>
            <div className='header__nav-menu'>
            <Link to='/'>
                    <h2>NOSOTROS</h2>
                </Link>
                <Link to="/portfolio">
                    <h2>TRABAJOS</h2>
                </Link>
                <Link to='/contact'>
                    <h2>CONTACTO</h2>
                </Link>
            </div>
        </div>
)

export default Nav;