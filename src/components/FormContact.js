import React from 'react'
import { Link } from 'react-router-dom';

const FormContact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Main');
    }


    return (
        <div>
            <h3 className='subtitle mt-100 ta-center'>Formulario de contacto</h3>
            <Link to='/contact-satisfactory' >
                <button onClick={(e) => e.preventDefault} className='contact__button'>
                    ENVIAR
                </button>
            </Link>
        </div>
    )
}

export default FormContact;