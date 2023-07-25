import React from 'react'
import TopMenue from './MyComponents/Header/TopMenue'
import HeroHeadline from './MyComponents/Headline/HeroHeadline';
import OurClient from './MyComponents/Client/OurClient';
import Help from './MyComponents/Help/Help';
import GreatSince from './MyComponents/GreatSince/GreatSince';
import HappyClients from './MyComponents/HappyClients/HappyClients';
import NewsLetter from './MyComponents/NewsLetter/NewsLetter';
import Footer from './MyComponents/Footer/Footer';
const Welcome = () => {
  return (
    <div className="container">
       <TopMenue/>
       <HeroHeadline/>
       <OurClient/>
       <Help/>
       <GreatSince/>
       <HappyClients/>
       <NewsLetter/>
       <Footer/>
       </div>
     

    
  )
};

export default Welcome
