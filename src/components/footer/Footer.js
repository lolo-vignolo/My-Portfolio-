import React from 'react';
import "./footerStyle.css"

export const Footer = () => {
    return (
        <div className= "footer">

        <div className="col-12 col-sm-9 d-flex justify-content-around" >
        <a className='fab tw' href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"><i className="fab fa-linkedin tw"></i></a>
        <a className='fab fac' href="https://www.facebook.com/lorenzo.vignolo1/"><i className="fab fa-facebook-f fac"></i></a>
        <a className='fab inst' href="https://www.instagram.com/vignololorenzo/?hl=es"><i className="fab fa-instagram inst"></i></a>
        <a className='fab mail' href="mailto:vignolo_3@hotmail.com"><i className="fas fa-envelope mail"></i></a>
        



        
        
        </div>
        <div className="row">
        <div className="col-12" >
        <h6 className="copyRight">© Copyright 2021 LoloVignolo</h6>
        </div>

        </div>

       
         </div>
          
    )  

   

    }
