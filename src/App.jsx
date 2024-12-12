import React from 'react'
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import WhereToBuy from './components/WhereToBuy/WhereToBuy';
import AppBanner from './components/AppBanner/AppBanner';
import Footer from './components/Footer/Footer';
import AOS from "aos";
import "aos/dist/aos.css";
import Menus from './components/Menus/Menus';
import { UpdateFollower } from 'react-mouse-follower';
const App = () => {

  // Services animation effect
  React.useEffect(()=> {
    AOS.init({
      duration: 1000,
      delay: 100,
      easing: "ease-in-cubic",
    });
  },[]);

  return(
   <main
     className='overflow-x-hidden'>
      <UpdateFollower
       mouseOptions={{
       backgroundColor: "yellow",
       zIndex: 10,
       followSpeed: 1.5, 
       }}>
        
        <Hero/>
      
      <Menus/>
      <Services/>
      <WhereToBuy/>
      <AppBanner/>
      <Footer/>
      </UpdateFollower>
    </main>
  );
};

export default App;