import React from 'react'
import { useDispatch } from 'react-redux';
import {commentSetActive, commentStartDelete} from "../actions/comments.js"

import { useSelector } from 'react-redux';
import "../comments/formulary.css"

export const Formulary = ({id, note, file, user}) => {


    var {activeNote} = useSelector(state => state.commentsReducer)
    const dispatch = useDispatch()

    const notes = {
        note:note,
        file:file,
        user:user,
    }

   

    const onSelectEvent = ()=> {
        dispatch (commentSetActive(id, notes))   
    }


    const handleDelete = () => {
        dispatch(commentStartDelete(activeNote.id))
        activeNote = null
    }


    return (
        <>

             <div className='row row-comment'>
               
             
                    <div className='col-2 picture' style ={{
                        backgroundSize: "cover",
                        //Este imagen deberé sacarla de la BD
                        backgroundImage:  `url(https://images.unsplash.com/photo-1554830072-52d78d0d4c18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)` }}> 

                    </div> 

                    <div className='col-9 comment'>
                        <div className='row user-input'>

                                <div className='col-12 col-note'>

                                    <p
                                        className='paragraph-style'
                                     >
                                        {note} 
                                    </p>

                                </div>

                                <div className='col-12'>
                                
                                    <p 
                                        className='userName-style'
                                        
                                    >
                                        {user.name} 
                                    </p>
                                </div>
                        </div>
                    </div>

                    </div>

                        <div className='row row-buttons'>
                                <div className='col-6'>
                                    <button
                                        className='btn btn-danger eliminate'
                                        onClick={onSelectEvent}
                                        >
                                        Eliminate
                                    </button>
                                </div>
                               
                                {
                           
                                (!!activeNote) && ( 
                                    <div className='col-6'>
                                        <button 
                                        onClick={handleDelete}
                                        className = "trash"
                                        >
                                        <i className="far fa-trash-alt b-trash"> confirm</i>
                                        </button>
                                    </div>  
                                   )
                                } 
                               
                        </div>
                    
                   
  
            
        </>
    )
}
