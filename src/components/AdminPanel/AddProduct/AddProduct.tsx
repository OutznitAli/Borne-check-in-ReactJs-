import React, { useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Link, useParams } from 'react-router-dom';
import apple from '../../../iphoneLogo.png'
import samsung from '../../../samsungLogo.png'
import { Button } from '@mui/material';
import axios from 'axios';
import swal from 'sweetalert';




function AddProduct() {


  const uniq = Date.now()

  const [isApple, setIsApple] = useState(false)
  const [productInfo, setProductInfo] = useState(

    {
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
      image1: '',
      image2: '',
      image3: '',
      image4: '',
      image5: '',
      rate: '',
      count: '',

      main: '',
      front: '',

      price: '',
      category: ''






    }

  )



  const handlClick = (e) => {


    if (e === 'Iphone') {

      setIsApple(true)
      setProductInfo({ ...productInfo, category: 'Iphone' })

    } else {
      setIsApple(false)
      setProductInfo({ ...productInfo, category: 'Samsung' })

    }

    console.log(e)
    console.log(isApple)
  }

  const handlSubmit = (e) => {

    e.preventDefault();

    const data = {

      id: uniq,
      title: productInfo.title,
      description: productInfo.description,
      brand: productInfo.brand,
      system: productInfo.system,
      memory: productInfo.memory,
      storage: productInfo.storage,
      screen: productInfo.screen,
      talk_time: productInfo.talk_time,
      dimension: productInfo.dimension,
      processor: productInfo.processor,
      battery: productInfo.battery,
      image: productInfo.image,
      images: [
        productInfo.image1,
        productInfo.image2,
        productInfo.image3,
        productInfo.image4,
        productInfo.image5,
      ],
      category: productInfo.category,

      rating: {
        rate: Number(productInfo.rate),
        count: Number(productInfo.count),
      },

      camera: {
        main: productInfo.main,
        front: productInfo.front,
      },

      price: Number(productInfo.price)
    }

    axios.post('http://localhost:5000/products/add', data)
      .then(res => swal("Successfull", "Product Added!", "success"))
      .then(res => navigate("/"))
      .catch(err => console.log(err))


  }

  const handlChange = (e) => {

    console.log(e.target.value)

    const value = e.target.value

    setProductInfo({ ...productInfo, [e.target.name]: value })

  }

  const click = (e) => {

    console.log(e)
  }


  return (
    <>

      <form onSubmit={handlSubmit}>
        <div className='flex w-full bg-stone-100 justify-around'>



          <div className='mt-4 h-screen flex items-center  flex-col gap-4'>
            <div className='flex gap-4'>
              <span onClick={() => handlClick('Iphone')} className=' cursor-pointer inline-block px-6 py-2 border-2 border-sky-600 text-sky-600 font-medium text-xs leading-tight uppercase rounded hover:bg-sky-500 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'>Iphone</span>
              <span onClick={() => handlClick('samsung')} className=' cursor-pointer inline-block px-6 py-2 border-2 border-sky-600 text-sky-600 font-medium text-xs leading-tight uppercase rounded hover:bg-sky-500 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'>Samsung</span>
            </div>
            <div className=' w-[24rem] h-[28rem] pt-4 p-6 flex flex-col items-center gap-20 bg-white shadow-sm  relative'>

              <div className='fav p-2 text-stone-700'>
                <FavoriteBorderIcon />
              </div>

              <div>
                <img src={isApple ? apple : samsung} className="object-contain w-[250px] h-[200px]" />
              </div>
              <div className=' w-full flex flex-col gap-2'>
                <div className='flex flex-col items-start gap-2 '>
                  <h1 className='font-Signika text-left text-xl font-bold text-md text-stone-900 text-center	'>
                    <input value={productInfo.title} name="title" onChange={handlChange} type="text" placeholder='Product Name' />
                  </h1>

                </div>
                <div className=' w-full  flex justify-between items-end '>
                  <span className='font-bold text-xl text-stone-700 font-Signika'>$
                    <input value={productInfo.price} name="price" onChange={handlChange} type="text" placeholder='Price' />
                  </span>

                  <button className='bg-slate-200 px-[1.9rem] py-[0.5rem] rounded-md hover:bg-sky-600 hover:duration-700 hover:text-slate-50 uppercase font-bold text-slate-700' type='submit'>
                    Add
                  </button>

                </div>
              </div>



            </div>
          </div>

          <div className='p-[60px] w-1/2 flex flex-col gap-4'>
            <div className='flex gap-2 font-Signika text-stone-700'>

              <label className='w-1/4' htmlFor="description">Description</label>
              <textarea value={productInfo.description} onChange={handlChange} id="story" name="description"
                rows={6} cols={53}>
              </textarea>
              {/* <input type="text" /> */}
            </div>

            <div className=' flex flex-col gap-2'>


              <div className='flex gap-2 font-Signika text-stone-700 '>
                <label htmlFor="brand" className='w-1/4'>Brand</label>
                <input value={productInfo.brand} name="brand" onChange={handlChange} type="text" />
              </div>

              <div className='flex gap-2 font-Signika text-stone-700'>
                <label className='w-1/4' htmlFor="system">system</label>
                <input value={productInfo.system} name="system" onChange={handlChange} type="text" />
              </div>

              <div className='flex gap-2 font-Signika text-stone-700'>
                <label className='w-1/4' htmlFor="memory">memory</label>
                <input value={productInfo.memory} name="memory" onChange={handlChange} type="text" />
              </div>

              <div className='flex gap-2 font-Signika text-stone-700'>
                <label className='w-1/4' htmlFor="storage">storage</label>
                <input value={productInfo.storage} name="storage" onChange={handlChange} type="text" />
              </div>

              <div className='flex gap-2 font-Signika text-stone-700'>
                <label className='w-1/4' htmlFor="screen">screen</label>
                <input value={productInfo.screen} name="screen" onChange={handlChange} type="text" />
              </div>

              <div className='flex gap-2 font-Signika text-stone-700'>
                <label className='w-1/4' htmlFor="talk_time">talk_time</label>
                <input value={productInfo.talk_time} name="talk_time" onChange={handlChange} type="text" />
              </div>

              <div className='flex gap-2 font-Signika text-stone-700'>
                <label className='w-1/4' htmlFor="dimension">dimension</label>
                <input value={productInfo.dimension} name="dimension" onChange={handlChange} type="text" />
              </div>
            </div>

            <div className='flex flex-col gap-2'>

              <div className='flex gap-2 font-Signika text-stone-700'>
                <label className='w-1/4' htmlFor="processor">processor</label>
                <input value={productInfo.processor} name="processor" onChange={handlChange} type="text" />
              </div>

              <div className='flex gap-2 font-Signika text-stone-700'>
                <label className='w-1/4' htmlFor="battery">battery</label>
                <input value={productInfo.battery} name="battery" onChange={handlChange} type="text" />
              </div>

              <div className='flex gap-2 font-Signika text-stone-700'>
                <label className='w-1/4' htmlFor="image">image</label>
                <input value={productInfo.image} name="image" onChange={handlChange} type="text" />
              </div>

              <div className='flex gap-2 font-Signika text-stone-700'>
                <label className='w-1/4'>images</label>
                <div className='flex flex-col gap-4'>
                  <input value={productInfo.image1} name="image1" onChange={handlChange} type="text" />
                  <input value={productInfo.image2} name="image2" onChange={handlChange} type="text" />
                  <input value={productInfo.image3} name="image3" onChange={handlChange} type="text" />
                  <input value={productInfo.image4} name="image4" onChange={handlChange} type="text" />
                  <input value={productInfo.image5} name="image5" onChange={handlChange} type="text" />
                </div>
              </div>

              <div className='flex gap-2 font-Signika text-stone-700'>
                <label className='w-1/4' htmlFor="rating">rating ={'>'} </label>
                rate: <input onClick={click} value={productInfo.rate} name="rate" onChange={handlChange} type="text" />
                count: <input value={productInfo.count} name="count" onChange={handlChange} type="text" />
              </div>

              <div className='flex gap-2 font-Signika text-stone-700'>
                <label className='w-1/4' htmlFor="camera">camera  ={'>'}</label>
                main: <input value={productInfo.main} name="main" onChange={handlChange} type="text" />
                front: <input value={productInfo.front} name="front" onChange={handlChange} type="text" />

              </div>

            </div>







          </div>

        </div>
      </form>


    </>
  )
}

export default AddProduct