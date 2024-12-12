import React from 'react'
import { AiTwotoneAppstore } from "react-icons/ai";
import { UpdateFollower } from 'react-mouse-follower';
import logoImg from "../../assets/logoImg.png";

export const Navbar = ({sidebar,setSidebar}) => {
  return (
    <div className='absolute top-0 left-0 w-full
    py-2 text-white z-20'>
      <div data-aos="fade" className="container">
        <div className="flex justify-between items-center">
          {/* logo section */}
          <UpdateFollower
            mouseOptions={{
            backgroundColor:'purple',
            zIndex: 30,
            followSpeed: 0.5,
            rotate:-720,
            scale: 5,
            backgroundElement:(
              <div>
                <img src={logoImg}/>
              </div>
            ), 
            }}>
          <h1 className='text-4xl font-bold
          uppercase'>
            
           Grape <span className='font-normal 
          text-2xl'>Mint</span>
          </h1>
          </UpdateFollower>
          
          <UpdateFollower
            mouseOptions={{
            zIndex: 10,
            followSpeed: 0.5,
            scale: 6,
            mixBlendMode: "difference", 
            }}>
          {/* Navlinks section */}
          <ul className='lg:flex hidden space-x-7
          text-xl'>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>Categories</a>
            </li>
            <li>
              <a href='#'>Surch</a>
            </li>
            <li>
              <a href='#'>Blog</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
            <li>
              <a href='#'>About</a>
            </li>
          </ul>
          </UpdateFollower>
          
          {/* AiTwotoneAppstore Menu */}
          <div onClick={() => setSidebar(!sidebar)}>
            <AiTwotoneAppstore className='text-3xl
            cursor-pointer'/> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;