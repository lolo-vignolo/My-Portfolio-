import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Formularies } from '../../comments/Formularies';
import { NewEntry } from '../../comments/NewEntry';
import axios from 'axios';


//import { GetNewByTitle } from '../../helper/GetNewByTitle';
import "../article/article.css";
import { Carousel } from './Carousel';
import { Footer } from '../../footer/Footer';

const initialState = {
  section: "",
  subsection: "",
  title: "",
  abstract:"",
  url:"",
  uri: "",
  byline: "",
  item_type: "",
  updated_date: "",
  created_date: "",
  published_date: "",
  material_type_facet: "",
  kicker: "",
  des_facet: [],
  org_facet: [],
  per_facet: [],
  geo_facet: [],
  multimedia: [
    {
      url: "",
      format: "",
      height: "",
      width: "",
      type: "",
      subtype: "",
      caption: "",
      copyright: ""
    }
  ],
  short_url: ""
}




export const Article = () => {



    
    const navigate = useNavigate();
    const params = useParams()
  
    const {titleId, sectionId} = params
    console.log(titleId);

    
    const [mydata, setMydata] = useState([initialState])
    
   

       
    const urls = `https://api.nytimes.com/svc/topstories/v2/${sectionId}.json?api-key=lkoH7mA5XUlWTU8pd3pNnab5BMEdg7O5`
    console.log(urls);
      
    

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(urls);
            setMydata(result.data.results)
        };

        fetchData(); 

    }, []) 
    console.log(mydata);

    


    const noticiaByTitle =  mydata.find(n => n.title === titleId)

    console.log(noticiaByTitle);
    if (!noticiaByTitle)return null
     

   
  
    //const {title, byline, abstract, section, published_date, multimedia} = noticiaByTitle

    const mytitle = noticiaByTitle.title;
    const mybyline = noticiaByTitle.byline;
    const myabtract = noticiaByTitle.abstract;
    const mysection = noticiaByTitle.section;
    
    const mymultimedia = noticiaByTitle.multimedia;
    const myurl = noticiaByTitle.url;



    const mypicture = mymultimedia[0].url;




    console.log( myurl);
  
 

//     //const noticiaByTitle =  mydata?.find(noticia => noticia.title === titleId)
//     //const article = GetNewByTitle( params)


    const handleButton = () =>{
      navigate(-1) //`/${source}`
    }


    return (

       
        <div>
            <div className= "row  row-one">
           
                <div className='row carousel-row'>
                    <div className='col-12 '>
                            <Carousel/>
                    </div>
                </div> 
                    
                
                <div className='row row-title'>

                    <div className='col-12 col-title'>
                        <em><h1 className='title-art' >My Newspaper Profil</h1></em>
                    </div>
                </div>
                
                <div className='row row-content'>
           
                    <div className='col-11 col-content'>
                        <h4 className='sectionclass'>{mysection}</h4>
                        <h3><b style={{fontFamily:"Poynter-OS-Display"}}> {mytitle}</b></h3>
                        <ul className="list-group list-group-flush first-ul">
                            <li className="list-group-item paragraph-letter"> <em className='letter-space' >{myabtract}- To know more follow the link.</em>  </li>
                            <li className="list-group-item li-class"><i className='fas fa-link' style={{fontSize:"1.2rem"}} > - </i><a href={myurl} className='link-style'> Visit this link to know more!.</a> </li>
                        </ul>


                    </div>
                    <hr/>

                    <div className='col-11  col-image'>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item first-item"> <img className='img-thumbnail img-article' src= {mypicture} alt= "Picture Articule"/> </li>
                            <li className="list-group-item" ><h5>Author:</h5><h4 style={{fontFamily:"MajritTx,serif" ,color:"black"}}>{mybyline?mybyline:"Anonymous"}</h4></li>
                        </ul>
                    </div>

                </div>



                    <div className='row button-row'>
                      <div className='col-12'>
                            
                            <button
                                className="btn btn-lg bg-btn return-button"
                                onClick={handleButton}
                                >
                                <i className="far fa-hand-point-left" style={{fontSize:"1rem"}} > Return </i>
                            </button>

                      </div>
                 

                        <div className='col-12 add-coment'>
                            <NewEntry />
                        </div>
                        <div className='col-12 col-formulary'>
                            <Formularies 
                            />
                        </div>
                        <div className='footer-article'>

                        <Footer/>

                        </div>  

                    </div> 

                   
            </div>
        </div>
        
    )
 }
