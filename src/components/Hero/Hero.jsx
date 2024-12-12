import React from 'react'
import logoImg from "../../assets/logoImg.png";
import Navbar from "../Navbar/Navbar";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiFillBell } from "react-icons/ai";
import { AiTwotoneQuestionCircle } from "react-icons/ai";
import { UpdateFollower } from 'react-mouse-follower';


const Hero = () => {
  
  const [sidebar, setSidebar] = React.useState(false);

  return (
    <main className='md:px-12 md:py-6 bg-primaryDark'>
         <section className= 'relative min-h-[650px] bg-gradient-to-r from-primary to-secondary w-full md:rounded-xl shadow-md'>
            <div className='container'>
                {/* Navber section */}
                <Navbar sidebar = {sidebar} setSidebar={setSidebar}/>


                {/* Hero section */}
                
                <div className="grid grid-cols-1
                 md:grid-cols-2 lg:grid-cols-3
                 place-items-center min-h-[650px]">

                  <UpdateFollower
                      mouseOptions={{
                        backgroundColor: "white",
                        zIndex: 20,
                        followSpeed: 0.5,
                        scale: 8,
                        mixBlendMode: "difference", 
                      }}
                  >

                    {/* text content section */}
                    <div className='text-white mt-[100px]
                      md:mt-0 p-4 space-y-4'>
                      
                        <h1 data-aos="fade-up" className='text-3xl pl-6
                        md:pl-14'>01_______</h1>
                        <h1 data-aos="fade-up" 
                        data-aos-delay="300"
                        className='text-5xl font-bold
                        uppercase text-shadow'>A Healthy Fruit</h1>
                        <p data-aos="fade-up"
                        data-aos-delay="500"
                        className='text-sm'>
                          포도에는 콜레스테롤을 낮추어 
                          심장병을 예방할 수 있는 성분으로 
                        「Resveratrol」을 함유하고 있으며, 
                          이것은 혈관확장제 역할을 함으로서 
                          협심증과 뇌졸증을 포함한 심장병 
                          발생 가능성을 줄여주어 성인병 예방에 좋습니다.
                        </p>
                        <button data-aos="fade-up"
                        data-aos-delay="700"
                        data-aos-offset="0"
                        className='secondary-btn'>More Read</button>
                    </div>
                  </UpdateFollower>

                    {/* image content section */}
                    <div data-aos="zoom-in">
                        <img src={logoImg} alt="Not found"
                        className='relative z-10 w-[400px]
                        img-shadow'/>
                    </div>
                    {/* blank div section */}
                    <div className='md:hidden'></div>
                 </div>
                
              </div>
            {/* background large text */}
            <h1
            data-aos="fade"
            data-aos-delay="600"
            data-aos-duration="1700" 
            className='large-text'>GRAPE</h1>

            {/* Sidebar section */}

            {
              sidebar && (
                <div className='absolute top-0 right-0 w-[120px]
                h-full bg-gradient-to-b from-tertiary to-secondary z-10'>
                  <div className='w-full h-full flex justify-center'>
                    <div className='text-white flex 
                    flex-col justify-center items-center
                    gap-6'>
                      {/* line */}
                      <div className='w-[1px] h-[70px] 
                      bg-white'></div>
                      <div className='inline-block p-2
                      rounded-full cursor-pointer border 
                      border-white'>
                      <AiFillBell className='text-2xl'/>
                      </div>

                      <div className='inline-block p-2
                      rounded-full cursor-pointer border 
                      border-white'>
                      <AiOutlineShoppingCart  className='text-2xl'/>
                      </div>

                      <div className='inline-block p-2
                      rounded-full cursor-pointer border 
                      border-white'>
                      <AiTwotoneQuestionCircle   className='text-2xl'/>
                      </div>

                      {/* line */}
                      <div className='w-[1px] h-[70px] 
                      bg-white'></div>
                    </div>

                  </div>

                </div>
              )
            }
         </section>
    </main>
  );
};

export default Hero