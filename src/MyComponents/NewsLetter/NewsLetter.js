import React from 'react'
import '../Styles/style.css'

function NewsLetter() {
  return (
    <>
    <div className='NewsletterContainer'>
      <img src="./assets/Rectangle 32.jpg" alt="dots" className='newsletterSideRectangle'/>
      <img src="./assets/Rectangle 30.png" alt="dots" className='newsletterRectangle'/>
      <img src="./assets/Group 73.png" alt="dots" className='NewsLetterDots'/>
      <img src="./assets/Rectangle 31.png" alt="dots" className='NewsLetterRectangle2'/>
      <span className='newsletterText'>Subscribe Newsletter</span>
      <span  className='newsletterSubText'>I will update good news and promotion service not spam</span>
      <img src="./assets/searchbar.png" alt="searchbar" className='searchbar'/>
      <span className='searchbarText'>Enter your email address..</span>
      <button>
      <img src="./assets/Frame 3.jpg" alt="frame"  className='newsletterFrame'/>
      </button>
      
    </div>
    </>
  )
}

export default NewsLetter