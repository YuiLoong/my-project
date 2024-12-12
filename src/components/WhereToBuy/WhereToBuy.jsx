import React from 'react'
import KRmap from "../../assets/Map.jpg";

const WhereToBuy = () => {
  return (
    <div className="container my-36">
        <div className="grid grid-cols-1 sm:grid-cols-3
        gap-8 place-items-center">
            {/* text-content section */}
            <div className='space-y-8'>
                <h1 data-aos="fade-up"
                data-aos-delay="300" 
                className='text-4xl font-bold
                text-dark font-serif'>where to buy our products?</h1>
                <div 
                data-aos="fade-up"
                data-aos-delay="500" 
                className='flex items-center gap-4'>
                    <input type='text' 
                    placeholder='Country'
                    className='input-style w-full lg:w-[120px]' />
                   
                    <input type='text'
                    placeholder='Menu'
                    className='input-style w-full' />

                </div>
                <button 
                data-aos="fade-up"
                data-aos-delay="700" 
                className='primary-btn'>Search</button>
            </div>
            {/* map section */}
            <div data-aos="fade" className='col-span-2'>
                <img src={KRmap} alt=""
                className='w-full sm:w-[600px] lg:w-[600px]'/>
            </div>
        </div>
    </div>
    
  )
}

export default WhereToBuy;