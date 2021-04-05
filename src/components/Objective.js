import React from 'react'

const Objective = ({data}) => {
    
    const {title, content} = data;

    return (
        <div className='obj__card ta-center'>
            
            <h3 className='obj__title my-10'>{title}</h3>
            <h4 className='obj__content'>{content}</h4>
        </div>
    )
}
export default Objective;