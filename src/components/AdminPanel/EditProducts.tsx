import React, { useState, useEffect } from 'react'
import apple from '../../iphoneLogo.png'
import samsung from '../../samsungLogo.png'
import axios from 'axios'
import { UseFetch } from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'
import Svg from '../../Spinner.svg'
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";
import { getInitColorSchemeScript } from '@mui/material'


const EditProducts = () => {

 let navigate = useNavigate()

 const [data, setData] = useState<any>({

  title: '',
  description: '',
  brand: '',
  system: '',
  memory: '',
  storage: '',
  screen: '',
  talk_time: '',
  dimension: '',
  processor: '',
  battery: '',
  image: '',

  images: [],

  camera: {

   main: '',
   front: ''

  },

  rating: {
   rate: '',
   count: '',
  },
  price: '',
  category: ''






 })
 const [isLoading, setLoading] = useState(false)

 useEffect(() => {

  const getProducts = async () => {

   setLoading(true)
   const result = await axios.get(`http://localhost:5000/products/${params.id}`)
    .then(res => setData(res.data))
    .catch(err => console.log(err))
   setLoading(false)

  }

  getProducts()
 }, [])

 const params = useParams()
 const uniq = Date.now()
 const [isApple, setIsApple] = useState(false)
 // const [data, setdata] = useState(

 //  {
 //   title: data.title,
 //   description: data.description,
 //   brand: data.brand,
 //   system: data.system,
 //   memory: data.memory,
 //   storage: data.storage,
 //   screen: data.screen,
 //   talk_time: data.talk_time,
 //   dimension: data.dimension,
 //   processor: data.processor,
 //   battery: data.battery,
 //   image: data.image,
 //   image1: data.title,
 //   image2: data.title,
 //   image3: data.title,
 //   image4: data.title,
 //   image5: data.title,
 //   rate: data.title,
 //   count: data.title,

 //   main: data.title,
 //   front: data.title,

 //   price: data.title,
 //   category: data.title






 //  }

 // )

 const handlChange = (e) => {

  console.log(e.target.value)

  const value = e.target.value

  setData({ ...data, [e.target.name]: value })

 }

 const handlSubmit = (e) => {

  e.preventDefault();

  const object = {

   title: data.title,
   description: data.description,
   brand: data.brand,
   system: data.system,
   memory: data.memory,
   storage: data.storage,
   screen: data.screen,
   talk_time: data.talk_time,
   dimension: data.dimension,
   processor: data.processor,
   battery: data.battery,
   image: data.image,
   images: [
    data.image1,
    data.image2,
    data.image3,
    data.image4,
    data.image5,
   ],
   category: data.category,

   rating: {
    rate: data.rating.rate,
    count: data.rating.count,
   },

   camera: {
    main: data.camera.main,
    front: data.camera.front,
   },

   price: Number(data.price)
  }

  console.log('this is finale', object)

  axios.put(`http://localhost:5000/products/update/${params.id}`, object)
   .then(res =>
    swal("Successfull", "Update successfully!", "success")


   )
   .then(res2 =>
    navigate("/products/list")
   )
   .catch(err => console.log(err))



 }

 const handlClick = (e) => {


  if (e === 'Iphone') {

   setIsApple(true)
   setData({ ...data, category: 'Iphone' })

  } else {
   setIsApple(false)
   setData({ ...data, category: 'Samsung' })

  }

  console.log(e)
  console.log(isApple)
 }

 console.log('this is data', data)

 return (
  <>
   {isLoading && (
    <div className="flex items-center justify-center h-screen">
     <img src={Svg} alt="" />
    </div>
   )}

   {data && (


    <form onSubmit={handlSubmit}>
     <div className='flex w-full bg-stone-100 justify-around'>



      <div className='mt-4 h-screen flex items-center  flex-col gap-4'>

       <div className=' w-[24rem] h-[32rem] pt-4 p-6 flex flex-col items-center gap-20 bg-white shadow-sm  relative'>


        <div>
         <img src={data.image} width="300px" className="object-contain h-[300px]" />
        </div>
        <div className=' w-full flex flex-col gap-2'>
         <div className='flex flex-col items-start gap-2 '>
          <h1 className='font-Signika text-left text-xl font-bold text-md text-stone-900 text-center	'>
           <input value={data.title} name="title" onChange={handlChange} type="text" placeholder='Product Name' />
          </h1>

         </div>
         <div className=' w-full  flex justify-between items-end '>
          <span className='font-bold text-xl text-stone-700 font-Signika'>$
           <input value={data.price} name="price" onChange={handlChange} type="text" placeholder='Price' />
          </span>

          <button className='bg-slate-200 px-[0.6rem] py-[0.5rem] rounded-md hover:bg-sky-600 hover:duration-700 hover:text-slate-50 uppercase font-bold text-slate-700' type='submit'>
           update
          </button>

         </div>
        </div>



       </div>
      </div>

      <div className='p-[60px] w-1/2 flex flex-col gap-4'>
       <div className='flex gap-2 font-Signika text-stone-700'>

        <label className='w-1/4' htmlFor="description">Description</label>
        <textarea value={data.description} onChange={handlChange} id="story" name="description"
         rows={6} cols={53}>
        </textarea>
        {/* <input type="text" /> */}
       </div>

       <div className=' flex flex-col gap-2'>


        <div className='flex gap-2 font-Signika text-stone-700 '>
         <label htmlFor="brand" className='w-1/4'>Brand</label>
         <input value={data.brand} name="brand" onChange={handlChange} type="text" />
        </div>

        <div className='flex gap-2 font-Signika text-stone-700'>
         <label className='w-1/4' htmlFor="system">system</label>
         <input value={data.system} name="system" onChange={handlChange} type="text" />
        </div>

        <div className='flex gap-2 font-Signika text-stone-700'>
         <label className='w-1/4' htmlFor="memory">memory</label>
         <input value={data.memory} name="memory" onChange={handlChange} type="text" />
        </div>

        <div className='flex gap-2 font-Signika text-stone-700'>
         <label className='w-1/4' htmlFor="storage">storage</label>
         <input value={data.storage} name="storage" onChange={handlChange} type="text" />
        </div>

        <div className='flex gap-2 font-Signika text-stone-700'>
         <label className='w-1/4' htmlFor="screen">screen</label>
         <input value={data.screen} name="screen" onChange={handlChange} type="text" />
        </div>

        <div className='flex gap-2 font-Signika text-stone-700'>
         <label className='w-1/4' htmlFor="talk_time">talk_time</label>
         <input value={data.talk_time} name="talk_time" onChange={handlChange} type="text" />
        </div>

        <div className='flex gap-2 font-Signika text-stone-700'>
         <label className='w-1/4' htmlFor="dimension">dimension</label>
         <input value={data.dimension} name="dimension" onChange={handlChange} type="text" />
        </div>
       </div>

       <div className='flex flex-col gap-2'>

        <div className='flex gap-2 font-Signika text-stone-700'>
         <label className='w-1/4' htmlFor="processor">processor</label>
         <input value={data.processor} name="processor" onChange={handlChange} type="text" />
        </div>

        <div className='flex gap-2 font-Signika text-stone-700'>
         <label className='w-1/4' htmlFor="battery">battery</label>
         <input value={data.battery} name="battery" onChange={handlChange} type="text" />
        </div>

        <div className='flex gap-2 font-Signika text-stone-700'>
         <label className='w-1/4' htmlFor="image">image</label>
         <input value={data.image} name="image" onChange={handlChange} type="text" />
        </div>

        <div className='flex gap-2 font-Signika text-stone-700'>
         <label className='w-1/4'>images</label>
         <div className='flex flex-col gap-4'>
          <input value={data.images[0]} name="image1" onChange={handlChange} type="text" />
          <input value={data.images[1]} name="image2" onChange={handlChange} type="text" />
          <input value={data.images[2]} name="image3" onChange={handlChange} type="text" />
          <input value={data.images[3]} name="image4" onChange={handlChange} type="text" />
          <input value={data.images[4]} name="image5" onChange={handlChange} type="text" />
         </div>
        </div>

        <div className='flex gap-2 font-Signika text-stone-700'>
         <label className='w-1/4' htmlFor="rating">rating ={'>'} </label>
         rate: <input value={data.rating.rate} name="rate" onChange={handlChange} type="text" />
         count: <input value={data.rating.count} name="count" onChange={handlChange} type="text" />
        </div>

        <div className='flex gap-2 font-Signika text-stone-700'>
         <label className='w-1/4' htmlFor="camera">camera  ={'>'}</label>
         main: <input value={data.camera.main} name="main" onChange={handlChange} type="text" />
         front: <input value={data.camera.front} name="front" onChange={handlChange} type="text" />

        </div>

       </div>







      </div>

     </div>
    </form>

   )}
  </>
 )
}

export default EditProducts