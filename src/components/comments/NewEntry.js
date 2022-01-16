
import React, { useState } from 'react'
import "../comments/newEntry.css"
import { HandleNote } from './HandleNote'
import "../comments/handleNote.css";

import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  Modal.setAppElement('#root');

export const NewEntry = () => {

    const [close, setOpen] = useState(false);

    const handleOpen = ()=>{
        setOpen(!close)
    }

    


    return (
        <>
            <div className='row mt-5 row-entry'>
        
                <div className='col-9 opinion-col'>
                    <h4> Leave us your opinion!</h4>
                </div>
                <div className='col-3 b-column'>
                    <button 
                     onClick={handleOpen}
                     className = "button-plus"
                     >
                    
                    <i className="fas fa-plus-circle plus-circle"></i>
                    </button>


                    <Modal
                            isOpen={close}
                            onRequestClose={handleOpen}
                            style={customStyles}
                            className= "modal"
                            overlayClassName= "modal-fondo"
                            closeTimeoutMS={ 200 }
                        >

                            <HandleNote handleWindow={handleOpen}/> 

                    </Modal>

                </div>
            </div>

           

           
        

        </>
    )
}
