import React from 'react'

export default function OnePost({props}) {
  return (
    <div style={{ background: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%),url("+props.img+")"}}
     className='imageopacity mb-1 w-[400px] relative h-[197px]'>
    <div className='bottom-4 absolute'>
         <h1 className='text-white tracking-wide text-center font-semibold  text-2xl '>Cheap Smart Phone Could And Help You Old Food Safe</h1>
         <div className='flex justify-around'>
          <p className='text-center  font-semibold text-white mt-4'>By <span className='cursor-pointer'>Admin</span></p>
         <p className='text-center font-semibold text-white mt-4'>July 4, 2023</p>
       
          </div></div>
    
    
     
    </div>
  )
}
