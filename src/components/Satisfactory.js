import React from 'react'
import { Link } from 'react-router-dom'

const Satisfactory = () => {
    return (
        <div>
        <h3 className='subtitle mt-100 ta-center'>¡Mensaje enviado correctamente!</h3>
        <Link to='/' >
            <button onClick={(e) => e.preventDefault} className='contact__button'>
                VOLVER A INICIO
            </button>
        </Link>
    </div>
)
    
}

export default Satisfactory;