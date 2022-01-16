
import Swal from "sweetalert2";
import { fileUpload } from "../helper/fileUpload";
import {types} from "../../types/types"
import { fetchConToken } from "../helper/fetch";
import { prepareEvents } from "../helper/prepareEvents";




export const commentStartAddNew = (event) =>{

    return async (dispatch, getState) =>{
            
        const {name, uid} = getState().authReducer;

        try {
            const resp = await fetchConToken ("events", event, "POST" );
           
            const body = await resp.json();
            if(body.ok){
                
                event.id = body.event.id;
                event.user = {
                    user_id : uid,
                    name: name
                }   
                dispatch(commentAddNew (event));  
                
            }  
            
        } catch (error) {
            console.log(error);
        }
        
    }      
    
}






const commentAddNew = (event) => {
    return{
        type: types.commentAddNew,
        payload: event
    }
};



export const commentSetActive = (id, note) => {
    return{
        type: types.commentSetActive,
        payload: {
            id,
            ...note  
        }
    }
};

export const commentStartDelete = (id) => {
    return async (dispatch) =>{

        

        console.log(id);
        
        try {
            const resp = await fetchConToken (`events/${id}`, {}, "DELETE");
            const body = await resp.json();

                if (body.ok){
          
                    dispatch ( commentDeleted (id));

                }else{
                    Swal.fire("Error", body.msg , "error" ) ;
                }
            
        } catch (error) {
            
        console.log(error);

        }



    }
}





export const commentDeleted = (id) =>{
    return{
        type:types.commentDeleted,
        payload: {
            id,
        }
    }
}

export const commentStartLoading = () =>{
    return async (dispatch) => {

        try {
            
            const resp = await fetchConToken ( "events" );
            const body = await resp.json();
            console.log(body);

            const events = prepareEvents (body.event);
          
            
            dispatch(commentLoaded(events));
            
            console.log(events);
   
            
        } catch (error) {
            
            console.log(error);
            
        }
   
    }
}

const commentLoaded = (events) =>({
   
    type:types.commentLoaded,
    payload:events 
})




export const satartUploading = (file) =>{
    
    
    //este dispach esta esperando para trer la foto de la DB
    return async (dispatch, getState) => {

        const {activeNote} =getState().commentsReducer;
        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait...',
            allowOutsideClick: false,
            showConfirmButton: false,
            willOpen: () => {
                Swal.showLoading();
            }
        });
        
        const fileUrl = await fileUpload(file);
        activeNote.file = fileUrl

       console.log(fileUrl);
        //dispatch( "StartSavedNote(fileUrl)")

        Swal.close();

        
    }
}


export const cleanActiveComment = () =>{
    return{
        type: types.cleanActiveComment,
        //payload: null
    }
}