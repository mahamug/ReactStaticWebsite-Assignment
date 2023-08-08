import React,{useEffect,useRef} from 'react'
import TopMenue from './MyComponents/Header/TopMenue'
import HeroHeadline from './MyComponents/Headline/HeroHeadline';
import OurClient from './MyComponents/Client/OurClient';
import Help from './MyComponents/Help/Help';
import GreatSince from './MyComponents/GreatSince/GreatSince';
import HappyClients from './MyComponents/HappyClients/HappyClients';
import NewsLetter from './MyComponents/NewsLetter/NewsLetter';
import Footer from './MyComponents/Footer/Footer';
const Welcome = () => {
  const scrollRef = useRef("");
  useEffect(()=>{
   const footerScroll = scrollRef.current;
   footerScroll.scrollIntoView();//scroll to scroll element into visible area 
  },[]);
  const subsribeBtn = useRef("");
  const handleSubscribeClick = () => {
   const SubsBtn = subsribeBtn.current;
   SubsBtn.scrollIntoView();
  };

  return (
    <div className="container">
       <TopMenue/>
       <HeroHeadline onSubscribeClick={handleSubscribeClick}/>
       <OurClient/>
       <Help/>
       <GreatSince/>
       <HappyClients/>
       <NewsLetter  ref={subsribeBtn}/>
       <Footer ref={scrollRef}/>
       </div>
     

    
  )
};

export default Welcome
