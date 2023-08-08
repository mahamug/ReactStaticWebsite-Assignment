import React from 'react';
import "../Styles/style.css";
function HeroHeadline({onSubscribeClick}) {
  return (
    <div className='headlineContainer'>
      <div className='TextHeadline'>
      <p className='headlineText'>A Digital Product Agency</p>
      <p className='headlinesubtext' >Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.</p>
      <p className='contact'>Contact Now</p>
      <button className='Subscribebtn'onClick={ onSubscribeClick}>Subscribe</button>
      <div className='dotFlex'>
      <img src = "/assets/Dot.jpg" className='dots1' alt='dotsimg'></img>
      <img src = "/assets/Dot.jpg" className='dots2' alt='dotsimg'></img>
      </div>
      </div>

      <div >
        <div className='ImageHeadline'>
        
           <img src = "/assets/Ellipse 85.svg" className='elipse' alt='elipseimg'></img>         
           <img src="/assets/headlineimg.jpg" className='headlineImge' alt='headlineImage'/>
        </div>
       
            
             <img src = "/assets/Rectangle 23.jpg" className='rectangle' alt='reactangleimg'></img>
           
      </div>


    </div>   
  )
}

export default HeroHeadline