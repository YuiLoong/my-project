import React from 'react'
import {FaFacebook, FaGoogle, FaInstagram} from "react-icons/fa";
import { UpdateFollower } from 'react-mouse-follower';

const Footer = () => {
  return (
    <UpdateFollower
            mouseOptions={{
            zIndex: 10,
            followSpeed: 0.5,
            scale: 6,
            mixBlendMode: "difference", 
            }}>
    <div className='bg-gradient-to-r from-primary
     to-secondary pt-12 pb-8 text-white'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2
            md:grid-cols-3 gap-8 text-white'>

                {/* company section */}

                <div data-aos="fade-up"
                data-aos-delay="300"
                className='space-y-6'>
                    <h1 className='text-4xl font-bold'>
                        Grape Mint</h1>
                    <p className='text-sm max-w-[300px]'>
                    Haha 이 순간, 내가 할 수 있는 건.
                    <p/>
                    Everything을 다 쏟아내는 것뿐.
                    <p/>
                    Listen, 내 마음의 소리를 들으세요.
                    <p/>
                    Please, 그저 조금만 도와주세요.
                    <p/>
                    Make it through, 함께라면 가능해요.
                    <p/>
                    Every step을 차근히 밟아가며 함께해요.뒤돌아서 앞글자만봐
                    </p>
                </div>
                {/* NavLink section*/}
                <div data-aos="fade-up"
                data-aos-delay="500" 
                className='space-y-5'>
                    <h1 className='text-4xl font-bold'>Quick Links</h1>
                    <div className='grid grid-cols-2'>
                        {/* first column links*/}
                        <div>
                            <ul className='space-y-2'>
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href='#'>Contact</a>
                                </li>
                                <li>
                                    <a href='#'>Search Fruits</a>
                                </li>
                                <li>
                                    <a href='#'>Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                        {/* second column links*/}
                        <div>
                            <ul className='space-y-2'>
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href='#'>Contact</a>
                                </li>
                                <li>
                                    <a href='#'>Search Fruits</a>
                                </li>
                                <li>
                                    <a href='#'>Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
               
                {/* social link section */}
                <div data-aos="fade-up"
                data-aos-delay="700"
                className='space-y-6'>
                    <h1 className='text-4xl font-bold'>Follow Us</h1>    
                    <div>
                        <p>(+82) 02-345-6789 </p>
                        <p>피할 건 피하고, 알릴 건 알리는 것은 PR</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <FaFacebook className='text-3xl
                        hover:scale-105 duration-300'/>
                        <FaInstagram className='text-3xl
                        hover:scale-105 duration-300'/>
                        <FaGoogle className='text-3xl
                        hover:scale-105 duration-300'/>
                    </div>
                </div> 
            </div>
            <p className='text-white text-center mt-8 pt-8
            border-t-2'>
                2024 고급프로그래밍 기말프로젝트 202217018 최유이. All rights
                reserved.
            </p>
        </div>
    </div>
    </UpdateFollower>
  );
};

export default Footer;