
import React, { useState} from 'react';
import Swal from 'sweetalert2';
import "../comments/handleNote.css";
import { commentStartAddNew} from "../../components/actions/comments";
import { useDispatch } from 'react-redux';
//import { height, sizeWidth } from '@mui/system';



export const HandleNote = ( {handleWindow}) => {

    const dispatch = useDispatch()

  

    // const handlePictureClick = () => {
    //     document.querySelector("#filseSelector").click()
    // }


    const [formValues, setFormValues] = useState({
        file : "",
        note : "",
    })

    const {note} = formValues;


 

    const handleInput = ({target}) => {
        setFormValues ({
            ...formValues,
            [target.name]: target.value
        })
    }


    // const handleFileChange = (e)=> {
    //     const file = e.target.files[0]

    //     if (file){
    //         dispatch(satartUploading (file));
    //     }

    // }


    

    const handleSubmitForm = (e) =>{
        e.preventDefault();
        //console.log(formValues);

        if (note.trim().length < 5) {
            Swal.fire({
                title:"Error",
                text:"This comment has to have 5 letters at least", 
                icon:"warning",
                width:"54%",
                height:"40%"
            })
            return;
        } 

        dispatch(commentStartAddNew({
            ...formValues,   
        }));

        Swal.fire({
            
            title:"Saved", 
            text:"Thanks for your comment", 
            icon: 'success',
           
            width:"54%",
            height:"40%"
        
        }  )
        
        

    }


   

    return (



        /*inputs */

        <div className='container note-container'>
            <form 
                className='text-location'
                onSubmit={handleSubmitForm}
            >
            <div className='row comment-row'>

                    <div className='col-12 col-input'>
                    
                        <textarea
                            type = "text"
                            style = {{fontSize: "1.3rem",fontFamily: "TrustpilotDefaultFont,Arial,sans-serif"} } 
                            className='text-input'
                            placeholder='What´s on your mind?'
                            name= "note"
                            value = {note}
                            onChange={handleInput}
                            
                        />

                    </div>  
                    
                </div>
            </form>
                


        {/*handle inputs */}

        
        <div className = "row buttons-comment">


                    {/* carga la imagen */}
           
                <div className='col- button-save'>
                 
                    <button
                    className="btn btn-complete"
                    type='submit'
                    onClick={handleSubmitForm}   
                    >
                    <i className="far fa-save i-note" style={{fontSize: "0.8rem" }}> Save</i>
                    </button>
                </div>    

                <div className='col-6 button-close'>

                    {/* crea el comentario */}

                    <button
                    className="btn btn-close"
                    //disabled={}
                    type='submit'
                    onClick={handleWindow}   
                    >
                    <i className="far fa-check-circle" style={{fontSize: "0.8rem" }} > Close</i>
                    </button>
                </div>
                
                

        </div>

    </div>  
        
    
    
    )
}




 