import React, { useEffect, useRef } from 'react';
import { init } from 'ityped';
import "./headOne.css"

export const HeadOne = () => {

    const textRef = useRef()

    useEffect(() => {
        init(textRef.current, { 
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: [" Technology, Bussines, Sports", 
            "health and much more."] })
    

    }, []) ; 

    return (
            <div>
                <div className="col-lg-9 col-md-9 col-sm-12 colors">
                    <h1 >Welcome to my Website</h1>
                    <h2 >Where you can find the best <small>News about:</small></h2>
                    
                     <span style={{color:"#ff4c68"}} ref = {textRef}></span>
                </div>
                
            </div>
        
    )
}

