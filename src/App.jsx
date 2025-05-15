import React, { useState } from 'react'
import { useGSAP } from '@gsap/react' 
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
const App = () => {
   const [showContent , setShowContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to('.vi-mask-group', {
      rotate:10,
      duration: 2,
      ease: 'Power4.easeInOut',
      transformOrigin: '50% 50%',
    })
    .to('.vi-mask-group', {
      scale:10,
      duration: 2,
      delay: -1.8,
      ease:'Expo.easeInOut',
      transformOrigin: '50% 50%',
      opacity: 0,
      onUpdate: function() {
       if(this.progress()>=.9) {
        document.querySelector('.svg').style.display = 'none'
        setShowContent(true)
        this.kill();
       }
      }
    })
  })

  useGSAP(() => {
    const main = document.querySelector(".main");
    main?.addEventListener("mousemove", (e) => {
      console.log(e);
    } );
  } ,[showContent]);

  return (
   
    
    <>
    <div className='svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]'>
  <svg viewBox='0 0 800 600' preserveAspectRatio='xMidYMid slice'>
    <defs>
      <mask id='viMask'>
        <rect width="100%" height="100%" fill="#black" />
        <g className='vi-mask-group'>
          <text 
            fill="white"
            x='50%'
             y='50%'
            textAnchor='middle' 
            dominantBaseline='middle'
            fontFamily='Arial, sans-serif'
            fontSize='250'>
            VI
          </text>
        </g>
      </mask>
    </defs>

    <image
      href='./bg.png'
      width="100%"
      height="100%"
      preserveAspectRatio=' xMidYMid slice'
      mask='url(#viMask)'
    />
  </svg>
</div>
     {showContent && 
     <div className='main w-full '>
  
          <div className='landing w-full h-screen bg-black'>
                <div className='navbar absolute top-0 left-0  z-10  px-10 py-10 w-full '>
              <div className='logo flex items-center gap-7 '>
                <div className='lines flex flex-col gap-1.5 '>
                <div className='line w-10 h-1 bg-white'></div>
                <div className='line w-8 h-1 bg-white'></div>
                <div className='line w-6 h-1 bg-white'></div>

                </div>
                <h2 className='text-4xl text-white leading-none -mt-2 '>Rockstar</h2>
              </div>
                </div>
             
            <div className='imagediv relative overflow-hidden  w-full h-screen '>
              <img src="./sky.png" alt="sky"  className=' absolute top-0 left-0 w-full h-screen object-cover' />
              <img src='./bg.png' alt='bg' className='w-full absolute h-screen object-cover'/>
                <div className='text absolute  left-1/2 -translate-x-1/2 '>
                  <h2 className='text-[11rem] ml-20 text-white font-bold leading-none'>Grand </h2>
                  <h2 className='text-[11rem] -ml-40 text-white font-bold leading-none'>Theft</h2>
                  <h2 className='text-[11rem] ml-20 text-white font-bold leading-none'>Auto</h2>
                </div>
              <img src="./girlbg.png"  alt="" className=' absolute w-[38%] -bottom-[35%]  left-1/2 -translate-x-1/2' />
               
            </div>
            <div className='bottombar text-white absolute bottom-0 left-0  w-full py-15 px-10 bg-gradient-to-t from-black'>
            <div className='flex gap-4 items-center'>
            <i className="text-3xl ri-arrow-down-line"></i>
            <h2 className='text-2xl'> Scroll Down</h2>
            </div>
            <img className='h-[55px] absolute top-1/2 left-1/2 -translate-1/2' src="./ps5.png" alt="" />
            </div>
          </div>     
     </div>
     }
    </>
  )
}

export default App
