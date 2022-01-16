import React, { useEffect, useState } from 'react'
import { Footer } from '../footer/Footer';
import { HeadOne } from '../homepage/HeadOne';
import { Navbar } from '../ul/Navbar';
import "../../styles/style.css";
import { useDispatch } from 'react-redux';
import { cleanActiveComment, commentStartLoading } from '../actions/comments';

import { Weather } from '../weather/Weather';




export const MainScreen = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch (commentStartLoading());
    dispatch (cleanActiveComment())
}, [dispatch])

  const [show, setShow] = useState(false)

  const showWeather = () =>{
    setShow(!show)
  }



  return ( 
    <div className = "container-fluid">
    <div className = "row main-row  imagebody ">

    <div className= "container-fluid header">

      {/* Navbar*/}

      <Navbar  />
    </div>
      <div className="container-fluid containnerBody" >
      
    
          {/* movil text */}
          
             
            <div className="row movilText rowBody" > 
            <div className='col-7 colBody'>
                  <HeadOne />
              </div>

            
              {show &&
              <div className= "col-5 weather animate__animated animate__backInRight" >

                    <Weather />  

              </div>  
              }
            
           

            
          
              

            {/* Button */}

            <div className="container-fluid text-information">
            <div className="row">
            
                <div className= " col-12 col-sm-7 colBotton" >
                <a href="mailto:vignolo_3@hotmail.com">
                <button 
                className="btn btn-outline-danger btn-lg main-btn" 
                > Contact Me </button></a>
                
                </div>

            </div>
            </div>

            {/*footer*/}

           <div className= "container-fluid contFooter" >
           <div className = "row rowFooter">
              <Footer />
            </div>               
        </div> 
       
      </div>
      <div className='row row-weather'>
      <button
        className='btn btn-danger button-weather '
        onClick={showWeather}
        >
          Search Weather
        </button>

        </div>

      </div>
     
      </div>
      
    </div>  

  )    
        
     
  
}

