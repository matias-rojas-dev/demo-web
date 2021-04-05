import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {

    return (
        <div>
            <h3 className='subtitle mt-100 ta-center'>¿Te interesa proyectar tu empresa con nosotros?</h3>
            <Link to='/contact' >
                <button onClick={(e) => e.preventDefault} className='contact__button'>
                    CONTACT US
                </button>
            </Link>
        </div>
    )
}

export default Contact;