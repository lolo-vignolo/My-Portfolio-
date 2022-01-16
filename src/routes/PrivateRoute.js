import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';



const PrivateRoute = ({children}) => {
    
const {uid} = useSelector(state => state.authReducer)
    return (
        !!uid
        ?   children  
        :  <Navigate to="auth/login" />
    )              
}


export default PrivateRoute;