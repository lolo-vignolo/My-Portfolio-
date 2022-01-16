import React from 'react';
import "../article/carousel.css"
import {sliceData} from "../../helper/sliceData.js"
//main-carousel




export const Carousel = () => {

   
    return (

    
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active bola" ></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" className='bolas' ></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" className='bolas' ></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4" className='bolas'></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5" className='bolas'></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={sliceData[0].img} className="d-block w-100" alt="..."></img>
      <div className="carousel-caption d-none d-md-block">
        <h5>Always Jordan</h5>
        <p>Enjoy new colors, new models, a new style.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={sliceData[1].img}  class="d-block w-100" alt="..."></img>
      <div className="carousel-caption d-none d-md-block">
        <h5>From Eye to Insight</h5>
        <p>Become your moments into memories, make them inmortals.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={sliceData[2].img}  class="d-block w-100" alt="..."></img>
      <div className="carousel-caption d-none d-md-block">
        <h5 style = {{color:"black"}}>Coca Cola</h5>
        <p style = {{color:"black"}}>Summer is commin, are you ready?.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={sliceData[3].img}  class="d-block w-100" alt="..."></img>
      <div className="carousel-caption d-none d-md-block">
        <h5>Go Anywhere, Do Anything</h5>
        <p>People who drive Jeeps are people who like to do outdoor activities...</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={sliceData[4].img}  class="d-block w-100" alt="..."></img>
      <div className="carousel-caption d-none d-md-block">
        <h5 style = {{color:"black"}}>American Express Global</h5>
        <p style = {{color:"black"}}>Traveling opens door to creating memories.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden"></span>
  </button>
</div>

    )  
}