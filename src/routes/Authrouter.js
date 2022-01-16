import React from 'react';
import { Outlet, Link } from "react-router-dom";
import "../styles/authStyles.css"


export const Authrouter = () => {
    return (
        
    <div  className='auth_main'>
        <div className='auth_box-container border'>
            <div>
                <Link to="auth/login"></Link> 
                <Link to="auth/register"></Link>
            </div>
            <Outlet />
      </div>
    </div>
  );
}


