import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import { NewsCard } from '../../cards/NewsCard';

//import { TitleByCategory } from '../../helper/TitleByCategory';
import "../screen.css"

export const Sports = () => {

    const [state, setState] = useState(
      {
        "title": ".",
        "pagination": {
          "limit": 15,
          "offset": 0,
          "count": 15,
          "total": 8496
        },
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
                }
  
            })
            }
  
          ]}
    )

    useEffect (() => {
        const FetchData = async () =>{
          await fetch('https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=lkoH7mA5XUlWTU8pd3pNnab5BMEdg7O5')
          .then(resp => resp.json())
          .then (data =>{setState (data)})
    
        }
       
            FetchData()
       }, [])
    
      
    
       const {results} = state
       Swal.close();
       console.log(results);
    
    return (
    
      <div className="m-top">
               <div className="col-12 screens">
    
                      <h1 className=" animate__heartBeat ml-5 color"> The last Business News</h1>
                              <hr />
    
               </div>
    
               <div className='row rows-cols-1 row-cols-md-3 g-3'> 
           {
               results.map(d =>(
                 <NewsCard key={d.title}
                         {...d}
                 
                  />    
             ))     
           }
           
       </div>
           
      </div>
       );
     }

