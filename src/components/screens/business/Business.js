//import React, { useContext } from "react";

import "../screen.css"

import { useEffect, useState } from "react";
import { NewsCard } from "../../cards/NewsCard";

import Swal from "sweetalert2";



export const Business = () => {

  

  const [state, setState] = useState(

     {
      
      "results": [
        
        {
          
           swal :
          
            Swal.fire({
              title: 'Loading...',
              text: 'Please wait...',
              allowOutsideClick: false,
              showConfirmButton: false,
              willOpen: () => {
                  Swal.showLoading();
                  Swal.close()
              }
          }),
          multimedia: [{"url":""}],
          

          }
        ]}
  )
  


 

useEffect (() => {
    const FetchData = async () =>{
     
      await fetch('https://api.nytimes.com/svc/topstories/v2/business.json?api-key=lkoH7mA5XUlWTU8pd3pNnab5BMEdg7O5')
      .then(resp => resp.json())
      .then (data =>{setState (data)})
      
    }
    
        FetchData()
        
   }, [])
  

   if (!state)return null

   const {results} = state

   
  
  
    

  

   const newIndex =() =>{
     Math.random(1, 20500)

   }

  

  

return (

  <div className="m-top">
           <div className="col-12 screens">

                  <h1 className=" animate__heartBeat ml-5 color"> The last Business News</h1>
                          <hr />

           </div>

           <div className='row rows-cols-1 row-cols-md-3 g-3'>
       
       {
           results.map(d =>(
             <NewsCard key={d.title?d.title:newIndex()}  
                          {...d}
             
              />
           
         ))     
       }

       
   </div>
       
  
  </div>
 );



  

   
  }