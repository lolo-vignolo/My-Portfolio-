import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import "../../styles/authStyles.css"; 
import { startRegister } from '../actions/auth';
import { useForm } from '../hooks/useForm';

export const RegisterScreen = () => {

    const dispatch = useDispatch();

    const [formRegisterValues , handleRegisterInputChange] = useForm({
        name: "",
        email: "",
        password : "",
        confirm: ""

    });

    const {name,  email, password, confirm} = formRegisterValues;

    
     
    const handleRegister = (e)=> {
        e.preventDefault();
        console.log({password, confirm});
        //var regularExpression  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/
        if(password !== confirm){
            return Swal.fire("Error", "Your Passwords must be the same.", "error")}
        // }else if (password.trim().length < 8) {
        //     return Swal.fire("Error", "Your Passwords must have a upper case, a number, a symbol and 8 chacarters.", "error")
        // }
       
        if (password.search(/[A-Z]/i) < 0) {
            return Swal.fire("Error", "Your password must contain at least one uppercase letter.", "error")
        };

        if (password.search(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i") <0)  {
            return Swal.fire("Error","Your password must contain at least one number, un uppercase, at least 8 characters and also a special one($%#..)!" ,"error"); 
        };

        

        dispatch(startRegister(email, password, name))
        } 
    

    return (
        
         <div className='auth_main-container'>
           
           <h2 className='login_title'><b>Register</b></h2>
               <form onSubmit={handleRegister}>

                   <input 
                       placeholder='Name'
                       type="text"
                       name= "name"
                       value={name}
                       className='auth-input'
                       autoComplete='off'
                       onChange={handleRegisterInputChange}
                   />
                   <input 
                       placeholder='Email'
                       type="text"
                       name= "email"
                       value = {email}
                       className='auth-input'
                       autoComplete='off'
                       onChange={handleRegisterInputChange}
                   />
                   <input 
                       placeholder='Password'
                       type="password"
                       name= "password"
                       value={password}
                       className='auth-input'
                       autoComplete='off'
                       onChange={handleRegisterInputChange}
                   />
                   <input 
                       placeholder='Confirm Password'
                       type="password"
                       name= "confirm"
                       value={confirm}
                       className='auth-input'
                       autoComplete='off'
                       onChange={handleRegisterInputChange}
                   />

                   <button
                       type='submit' 
                       className='auth-button bg-button btn-block'
                       
                   >
                     SAVE 
                   </button>

                   <hr />

                       <Link 
                           className='link-decoration' 
                           to="/auth/login">
                           Already registered?
                        </Link>
       
               </form>
          
       </div>
            
        
    )
}
