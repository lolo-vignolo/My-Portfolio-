import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import { startChecking } from '../components/actions/auth';
import { LoginScreen } from '../components/login/LoginScreen';
import { RegisterScreen } from '../components/login/RegisterScreen';



import { MainScreen } from '../components/screens/MainScreen';
import { Authrouter } from './Authrouter';


import { DashboardRoutes } from './DashboardRoutes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';




  

export const AppRouter = () => {

    
    const dispatch = useDispatch();
    
    
    //const {checking} = useSelector(state => state.authReducer)

    useEffect(() => {
        dispatch (startChecking ())
    }, [dispatch])

    

    return (
        <div>
            <BrowserRouter>
               
                <Routes>

                    <Route path="/auth" element={<PublicRoute> <Authrouter/> </PublicRoute>}>

                        <Route path="login" element ={<LoginScreen/>} />
                        <Route path="register" element ={<RegisterScreen/>} />
                    </Route>
                     

                    <Route path="/" element = { <PrivateRoute> <MainScreen /> </PrivateRoute>}/>

                    <Route path="/*" element={<PrivateRoute> <DashboardRoutes /> </PrivateRoute> }/>
                    
                </Routes>
                
            </BrowserRouter>
                     
        </div>
    )
}

