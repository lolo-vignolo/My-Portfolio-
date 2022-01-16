import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';
import "./newCard.css";


export const NewsCard = ({
    author,
    title,
    abstract,
    urll,
    section,
    multimedia,
    category,
    language,
    country,
    published_date,
  
    

}) => {


    //console.log(multimedia);
    const resum = abstract?(`${abstract.slice(0,300)}... `): "";
    const date = published_date?moment(published_date).format('MMMM Do YYYY, h:mm:ss a'):null;
    const myPicture = multimedia? multimedia[0].url:null 
   
   const mytitle = title?title:null
   const mysection = section?section:null

  

  
      
    return (
        <div className='container p-5 col-sm-12 main'>
           
                <div className='row no-gutters card-small'>
                    <div className='col-12 box-content'>
                    <div className='col-lg-3 col-sm-4 img-item conttainer'>
                        <img src={myPicture} className="card-img" alt="News Picture" />
                            <div className= "overlay">
                                <div className="text"><h6>Click over the title to know more!</h6></div>
                            </div>
                    </div>

                    
                  
                    <div className='col-lg-9 col-sm-9 body-text'>
                        <div className='col-11 card-body'>
                        
                        <Link className='link' to={`/news/${mytitle}/${mysection}`}><h1 className="font-italic card-title">{mytitle}</h1></Link>
                        <hr/>
                        <h5 className='card-text'>{resum}</h5>
                        <hr/>
                        
                        <h5  className='text-muted' ><small>{date}</small> </h5>


                        </div>
                    </div>
                    </div>
            </div>
        </div>
    )

  
  
  

       
    
}
