import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../assets/img/banner.jpg'
import SVG from '../assets/img/header-item.svg'
import Typed from 'react-typed';

const Header = () => {


    return(
        <header className="header__container">
            <img className="header__svg" src={SVG} />
            
            <Typed
                strings={[
                    'AUMENTA TUS VENTAS',
                    'DESTACA EN LA COMPETENCIA',
                    'OTORGA PROFESIONALISMO A TU EMPRESA']}
                    typeSpeed={40}
                    backSpeed={50}
                    showCursor
                    loop
                    >
                    <h1 className="header__title"></h1>
                </Typed>
        </header>
    )
}

export default Header;