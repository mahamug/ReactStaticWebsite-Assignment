import React from 'react'
import '../Styles/style.css'

function OurClient() {
  return (
      <div className='clientContainer'>
         <span className='client'>Our Client</span>
         <div className='clientFlex'>
          <div>
         <p className='clientSubheading'>Several selected clients, who already</p>
         <p className='clientSubheading'> believe in our service.</p>
         </div>
         <img src="./assets/Google Logo.jpg" alt="google"  className='google'/>
         <img src="./assets/Airbnb Logo.jpg" alt="google"  className='google'/>
         <img src="./assets/Uber Eats Logo.jpg" alt="google"  className='google'/>
         <img src="./assets/Amazon Logo.jpg" alt="google"  className='google'/>
         </div>
      
      </div>
     
  )
}

export default OurClient