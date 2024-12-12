import React from 'react'
import apple from "../../assets/fruits/apple.png";
import orange from "../../assets/fruits/orange.png";
import mango from "../../assets/fruits/mango.png";
import banana from "../../assets/fruits/banana.png";

import {motion} from "framer-motion"; 
import {FadeLeft} from "../../utility/animation";

const MemnusData = [
    {
        id: 1,
        title: "Fresh Apple",
        link: "/",
        price: "₩0.000",
        img: apple,
        delay: 0.3,
    },
    {
        id: 2,
        title: "Fresh Orange",
        link: "/",
        price: "₩0.000",
        img:orange,
        delay: 0.6,
    },
    {
        id: 3,
        title: "Fresh Mango",
        link: "/",
        price: "₩0.000",
        img: mango,
        delay: 0.9,
    },
    {
        id: 4,
        title: "Fresh Banana",
        link: "/",
        price: "₩0.000",
        img: banana,
        delay: 1.2,
    },
]


const Menus = () => {
  return (
    <section>
        <div className='container pt-12 pb-20'>
            <motion.h1 
            initial={{opacity:0, x:-200}} 
            whileInView={{opacity: 1, x:0}}
            transition={{duration: 1, delay: 0.3}}
            className='text-2xl font-bold 
            text-left pb-10 uppercase'>
                Other Menu
            </motion.h1>
            <div className='grid grid-cols-1 sm:grid-cols-2
            md:grid-cols-4 gap-12'>
                {MemnusData.map((menu)=>(
                    <motion.div 
                    variants={FadeLeft(menu.delay)}
                    initial="hidden"
                    whileInView={"visible"}
                    whileHover={{scale: 1.1}}
                    className='bg-white rounded-3xl px-4 py-2
                    shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-row
                    justify-around items-center gap-3'>
                        <img src= {menu.img} alt="" className='w-[75px]
                        mb-4 scale-125 transform -translate-y-6'/>
                        <div>
                            <h1 className='text-lg font-semibold'>{menu.title}</h1>
                            <p className='text-lg font-semibold
                            text-secondary'>{menu.price}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Menus;

