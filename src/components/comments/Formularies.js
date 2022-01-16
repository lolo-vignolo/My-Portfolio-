import React from 'react'
import { useSelector } from 'react-redux';

import "../comments/newEntry.css";
import "../comments/formularies.css";

import { Formulary } from './Formulary';



export const Formularies = () => {

    

    const {notas} = useSelector(state => state.commentsReducer)
  
    return (
        <div className='mb-5' >
        {
            notas.map(n => (
                <Formulary 
                    key ={n.id}
                    {...n}
                    />
            ))
            }
                 
                
        </div>
      
    )
}
