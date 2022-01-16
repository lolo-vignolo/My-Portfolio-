

/* estado 
{
    uid: "kjldfñksfsdfsd",
    name: "Lorenzo"
}  */

import { types } from "../../types/types";






const initialState = {
    checking : true,
    //uid:null,
    //name:null
}


export const authReducer = (state = initialState, action)=>{
    switch (action.type) {

        case types.authLogin:   
            return{
                ...state, //  {cheking:  true}
                ...action.payload, /*es el user => {name: 'Lorenzo Vignolo', uid: '619a1c4e09e0267e8f46e5ec'}*/
                checking:false,
                
            }
        case types.authChekingFinish:
            return{
                ...state,
                checking:false
            }

        case types.authLogout:
            return{
                
                checking:false,
            }
           

        default:
            return state;


    
    }


}