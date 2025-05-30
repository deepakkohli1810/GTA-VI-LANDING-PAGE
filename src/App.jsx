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
    if(!showContent) return; 
    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 1,
      ease: "Power4.easeInOut",
      
    })
     gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 1,
      ease: "Power4.easeInOut",
      
    })
    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 1,
      ease: "Power4.easeInOut",
      
    })
       gsap.to(".character", {
      scale: 1,
      bottom: '-45%',
      rotate: 0,
      duration: 1.2,
      
      ease: "Power4.easeInOut",
      
    })
        gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 1.2,
      
      ease: "Power4.easeInOut",
      
    })
    const main = document.querySelector(".main");
    main?.addEventListener("mousemove", (e) => {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
       gsap.to(".imagesdiv .text", {
        x: `${-30 - xMove * 0.1 }%`,
      
       })
         gsap.to(".sky", {
         x: xMove ,
 
       })
        gsap.to(".bg", {
         x: xMove ,
 
       })
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
     <div className='main w-full rotate-[-10deg] scale-[1.7]'>
  
          <div className='landing overflow-hidden w-full h-screen bg-black'>
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
             
            <div className='imagesdiv  relative overflow-hidden  w-full h-screen '>
              <img src="./sky.png" alt="sky"  className=' sky  scale-[1.7] rotate-[-3deg] absolute top-0 left-0 w-[100%] h-screen object-cover' />
              <img src='./bg.png' alt='bg'  className='bg scale-[1.5] rotate-[-3deg] w-full absolute h-screen object-cover'/>
                <div className='text flex flex-col gap-4 absolute scale[1.4] rotate-[-20deg]  left-1/2 -translate-x-1/2 '>
                  <h2 className='text-[11rem]  ml-20 text-white font-bold leading-none'>Grand </h2>
                  <h2 className='text-[11rem]  -ml-60 text-white font-bold leading-none'>Theft</h2>
                  <h2 className='text-[11rem]  ml-30 text-white font-bold leading-none'>Auto</h2>
                </div>
              <img src="./girlbg.png"  alt="" className=' character scale-[1.1] rotate-[-20deg] absolute w-[38%] -bottom-[150%]  left-1/2 -translate-x-1/2' />
                <div className='bottombar text-white absolute bottom-0 left-0  w-full py-15 px-10 bg-gradient-to-t from-black'>
            <div className='flex gap-4 items-center'>
            <i className="text-3xl ri-arrow-down-line"></i>
            <h2 className='text-2xl'> Scroll Down</h2>
            </div>
            <img className='h-[45px] absolute top-1/2 left-1/2 -translate-1/2' src="./ps5.png" alt="" />
            </div>
            </div>
           
          </div>     
     
    <div className='w-full h-screen flex 10px py-10 items-center justify-center bg-black'>
      <div className='cntnr flex text-white  w-full h-[80%] py-10  '>
        <div className='limg relative w-1/2 h-full '>
         <img 
         className='absolute w-[80%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ' src="./imag.png" alt="" />
        </div>
        <div className='rg w-[40%] max-w-4xl mx-auto p-4'>
          <h1 className='text-7xl'>Still running </h1>
          <h1 className='text-7xl'>not hunting  </h1>
          <p className='mt-4 font-sans'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi nemo illum quibusdam beatae doloribus enim totam, architecto commodi, suscipit assumenda explicabo veritatis sed, sapiente nihil alias asperiores earum. Voluptatem sunt a asperiores eligendi voluptas harum adipisci cumque voluptatum in porro distinctio pariatur, nesciunt ab nobis quidem vel eveniet quas quos.
          </p>
          <p className='mt-4 font-sans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque!</p>
          <button className='bg-yellow-500 px-8 py-3 text-black mt-4 font-sans font-bold '> Download Now </button>
        </div>
      </div>

    </div>

     </div>
     }
    </>
  )
}

export default App
