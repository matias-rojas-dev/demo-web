import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const FormContact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [content, setContent] = useState('');
    const [doneFetch, setDoneFetch] = useState(false);

    const handleSubmit = (e) => {
        console.log(name, email, content);
        e.preventDefault();
        setName('');
        setEmail('');
        setContent('');
        console.log(name, email, content);
    };

    const handleChangeName = (e) => {
        e.preventDefault();
        setName(e.target.value);
    };

    const handleChangeEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    };

    const handleChangeContent = (e) => {
        e.preventDefault();
        setContent(e.target.value)
    };

    return (
        <div>
            <h3 className='subtitle mt-100 ta-center'>Formulario de contacto</h3>
            <form onSubmit={handleSubmit} className='form__container'>
                <input
                    className="form__input"
                    type='text'
                    placeholder='Nombre y apellido'
                    name={name}
                    onChange={handleChangeName}
                    required
                />

                <input
                    className="form__input"
                    type='email'
                    placeholder='Email'
                    name={email}
                    onChange={handleChangeEmail}
                    required
                />

                <textarea
                    className="form__input"
                    placeholder='Escríbenos'
                    onChange={handleChangeContent}
                    name={content}
                    required
                />

                
                    <button type='submit' className='contact__button'>
                        <Link to='/contact-satisfactory'>
                            ENVIAR
                        </Link>
                    </button>
                

            </form>

        </div>
    )
}

export default FormContact;