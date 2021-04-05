import React from 'react'
import Objective from './Objective';
import {objectives} from '../constants/index'
const Objectives = () => {

    const { id } = objectives;

    return (
        <div className='obj__container'>
            {
                objectives.map(objective => (
                    <Objective key={id} data={objective} />
                ))
            }
        </div>
    )
}
export default Objectives;