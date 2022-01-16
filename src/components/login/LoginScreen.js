import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import "../../styles/authStyles.css";
import {startLogin} from '../actions/auth';
import {GoogleLogin} from "react-google-login"
import { useForm } from '../hooks/useForm.js';

export const LoginScreen = () => {

    const dispatch = useDispatch()

    const [formulary , handleInputChange]= useForm({
        email:"vignolo_3@hotmail.com",
        password:"Chibanda123#" 
    })

    const {email, password} = formulary;

   

    const handleLogin = (e) => {
        e.preventDefault();
        

         dispatch(startLogin(email, password))
    }


   
  const  googleSuccess = async (res) =>{
      const emailResult = res?.profileObj.email;
      const passwordResult = res?.tokenId;
    console.log(res);

      try {
          dispatch(startLogin(email, password))
          
      } catch (error) {
          console.log(error);
      }

  }
  const  googleFailure = () =>{
      console.log("Google Sing In was unseccessful. Try again");
  }

    
    

    return (
        <div className='auth_main-container'>
           
            <h2 className='login_title'><b>Login</b></h2>
                <form onSubmit={handleLogin}>
                    <input 
                        placeholder='Email'
                        type="text"
                        name= "email"
                        className='auth-input'
                        autoComplete='off'
                        value = {email}
                        onChange={ handleInputChange}
                    />
                    <input 
                        placeholder='Password'
                        type="password"
                        name= "password"
                        className='auth-input'
                        autoComplete='off'
                        value = {password}
                        onChange={handleInputChange}
                    />

                    <button
                        type='submit' 
                        className='auth-button bg-button btn-block'
                        
                    >
                      LOGIN  
                    </button>

                    <hr />

                       
                        
                        
                         
                        <div className='auth_social-network'>
                            <h4
                            style={{color:"#444444"}}
                            >Login with social media</h4>
                            <div 
                                className="google-btn"
                            >
                                <div className="google-icon-wrapper">
                                    <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                                </div>
                                <GoogleLogin
                                    clientId="422837984370-3lsn09muiu4r8geebc2virg47muaei3l.apps.googleusercontent.com"
                                    render={renderProps => (
                                        <b 
                                        className="btn-text google-text"
                                        onClick={renderProps.onClick}
                                        disabled = {renderProps.disabled}
                                        >
                                            Sign in with google
                                        </b>
                                            )}
                                    onSuccess={googleSuccess}
                                    onFailure={googleFailure}
                                    cookiePolicy={'single_host_origin'}        

                                />


                            </div>
                        </div>
                        <Link 

                            className='link-decoration' 
                            to="/auth/register">
                            Create new account
                         </Link>
        
                </form>
           
        </div>
    )
}
