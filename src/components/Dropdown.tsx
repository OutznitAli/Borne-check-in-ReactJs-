import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export const Dropdown = ({data}) => {

const [showDrop, setDrop] = useState(false)

const [pageNumber, setPageNumber] = useState(0)

const handlClick = ()=>{

 setDrop(!showDrop)

}
  return (
    <div className=' h-full flex justify-center '>
     <div className="relative inline-block text-left">
    <div className='w-screen'>
      <button onClick={handlClick} type="button" className=" inline-flex w-full justify-center rounded-md border border-gray-300 bg-white  py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" id="menu-button" aria-expanded="true" aria-haspopup="true">
        <div className='flex  items-center gap-[2px] capitalize'>
         <span className='font-Signika text-2xl'>specification</span>
         {showDrop ? <RemoveIcon fontSize='medium'/> : <AddIcon fontSize='medium'/>}
        </div>
      </button>
    </div>

   {showDrop && (
     <div className="absolute  mt-2  origin-top-right  rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
      <div className=" w-screen p-[20px]  flex">
        
        <div className='  py-[80px] w-1/2 flex justify-around'>
         <div className='flex flex-col gap-10'>
           <div>
            <span className='font-Signika text-stone-700'>BATTERY</span>
            <div className='px-6'>
             <ul className='list-disc text-sm text-stone-600'>
             <li >{data.battery}.</li>
            </ul>
            </div>
           </div>
           <div>
            <span className='font-Signika text-stone-700'>OPERATING SYSTEM</span>
             <div className='px-6'>
             <ul className='list-disc text-sm text-stone-600'>
             <li > {data.brand === "Apple" ? 'IOS': 'ANDROID'} {data.system}.</li>
            </ul>
            </div>
           </div>

           <div>
            <span className='font-Signika text-stone-700'>STORAGE</span>
             <div className='px-6'>
             <ul className='list-disc text-sm text-stone-600'>
             <li >{data.storage}GB.</li>
            </ul>
            </div>
           </div>

           <div>
            <span className='font-Signika text-stone-700'>CAMERA</span>
             <div className='px-6'>
             <ul className='list-disc text-sm text-stone-600'>
             <li >Main: {data.camera.main} MP.</li>
             <li >Front: {data.camera.front} MP.</li>
            </ul>
            </div>
           </div>

           <div>
            <span className='font-Signika text-stone-700'>TALK TIME</span>
             <div className='px-6'>
             <ul className='list-disc text-sm text-stone-600' >
             <li >{data.talk_time} Hrs.</li>
            </ul>
            </div>
           </div>
        </div>
        <div className='flex flex-col gap-10'>
         <div>
            <span className='font-Signika text-stone-700'>DIMENSIONS</span>
             <div className='px-6'>
             <ul className='list-disc text-sm text-stone-600'>
             <li >{data.dimension}.</li>
            </ul>
            </div>
          </div>
           <div>
            <span className='font-Signika text-stone-700'>PROCESSOR</span>
             <div className='px-6'>
             <ul className='list-disc text-sm text-stone-600'>
             <li >{data.processor}.</li>
            </ul>
            </div>
           </div>
           <div>
            <span className='font-Signika text-stone-700'>MEMORY</span>
            <div className='px-6'>
             <ul className='list-disc text-sm text-stone-600'>
             <li >{data.memory}.</li>
            </ul>
            </div>
           </div>
        </div>
        </div>
        <div className='w-1/2 flex justify-center'>
           <img src={data.image} width='450px' />
        </div>
      </div>
    </div>
   )}
  </div>
    </div>
  )
}
