

import { types } from "../../types/types";

// { 
//     id: new Date().getTime(),
//     file : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//     note : "nueva nota",
//     user:{
//         _id:"123",
//         name: "Lorenzo"
//     }
// }



const initialState = {
        notas: [ 
           ], 
        activeNote: null
        }


export const commentsReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.commentAddNew:
            return {
                    ...state,
                    notas:[
                        ...state.notas,
                        action.payload
                    ] 
                }

        case types.commentSetActive:
            return{
                ...state,
                activeNote : action.payload
            }   
            
        case types.commentDeleted:
            return{
                ...state,
                notas: state.notas.filter(n => (n.id !== state.activeNote.id)),
                activeNote : null
            }

        case types.commentLoaded:
            return {
                ...state,
                notas: [ ...action.payload ]
            }

        


            default:
                return state;
            }
      
       
    }
   

