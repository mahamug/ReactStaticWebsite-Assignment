import React from 'react'
import '../Styles/style.css'

function Footer() {
  return (
    <>
    <div className='footerContainer'>

      <div className='astudiotextContainer'>
      <p className='atextstyle'>A+</p>
      <p className='studiotextstyle'>Studio</p>
      </div>
      
      <span className='footerAStudioSubText'>Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.</span>
      <img src="./assets/facebook.png" alt="facebook"  className='facebook'/>
      <img src="./assets/twitter.png" alt="twitter"  className='twitter'/>
      <img src="./assets/linkedin.png" alt="linkdin"  className='linkedin'/>

      <span className='footerWhatWeDoText'>What We Do</span>
      <span className='footerWhatWeDoSubText'>Web Design <br></br>
               App Design <br></br>
               Social Media Manage
               Market Analysis Project</span>

      <span className='Copyright'>Copyright © 2022 Avi Yansah</span>     

      <span className='footerCompanyText'>Company</span>
      <span className='footerCompanySubText'>About Us<br></br>
              Career<br></br>
              Become Investor</span>    

      <span className='footerSupportText'>Support</span>
      <span className='footerSupportSubText'>FAQ
               Policy
               Business
              </span>   

      <span className='footerContactText'>Contact</span>
      <span className='footerContactSubText'>WhatsApp
              Support 24
              </span>  
                
    </div>

    </>
  )
}

export default Footer