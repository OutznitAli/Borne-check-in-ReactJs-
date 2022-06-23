import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Svg from '../Spinner.svg'
import { UseFetch } from '../hooks/useFetch'
import ProductImageSlider from './ProductImageSlider'
import "./Product.css"
import Rating from '@mui/material/Rating';
import CheckIcon from '@mui/icons-material/Check';
import { Dropdown } from './Dropdown'
import payment from '../payment.jpg'
import axios from 'axios'



const Product = () => {

  const [count, setCount] = useState(0)
  const params = useParams()

  const { data, isLoading } = UseFetch(`http://localhost:5000/products/${params.id}`)

  // useEffect(() => {

  //   const getProducts = async () => {

  //     setLoading(true)
  //     const result = await axios.get(`http://localhost:5000/products/${params.id}`)
  //       .then(res => setData(res.data))
  //       .catch(err => console.log(err))
  //     setLoading(false)

  //     console.log('this is res', result)
  //   }

  //   getProducts()
  // }, [])

  // const [data, setData] = useState<any>([])
  const [loading, setLoading] = useState(false)





  return (

    <>
      <div>

        {isLoading && (
          <div className="flex items-center justify-center h-screen">
            <img src={Svg} alt="" />
          </div>
        )}
        {data && (
          <div>
            <div className=' h-[4rem] flex items-end justify-end pr-8'>
              <Link to={'/'} className='inline-block px-8 py-3 border-2 border-sky-600 text-sky-600 font-medium text-xs leading-tight uppercase rounded hover:text-white hover:bg-sky-600 focus:outline-none focus:ring-0 transition duration-150 ease-in-out  '>
                retourn
              </Link>
            </div>
            <div className='flex  justify-center items-center  m-[40px]'>
              <div className=' images-container flex'>
                <ProductImageSlider key={data.id} data={data} />
              </div>

              <div className=' details-container '>
                <div className="flex flex-col gap-6">
                  <h1 className="text-5xl font-bold font-Signika text-stone-700">{data.title}</h1>
                  <div>
                    <div className='flex'>
                      <Rating name="half-rating-read" defaultValue={data?.rating.rate} precision={0.5} readOnly />
                      <span className='font-semibold text-stone-600'>({data?.rating.count})</span>
                    </div>
                    <h1 className="pb-2 my-4 text-[15px] font-Signika text-stone-600 font-bold text-sm">Description:</h1>
                    <h1 className='text-stone-500 '>{data?.description}</h1>
                  </div>
                  <div className='flex gap-10'>
                    <div className='flex'>
                      <span className='leading-2 font-semibold text-stone-600'>$</span>
                      <span className='font-bold text-5xl font-Signika text-stone-700'>{data?.price}</span>
                    </div>
                    <button className='px-[80px] py-2 bg-sky-500 rounded-[45px] uppercase font-semibold text-stone-50 font-Signika hover:bg-sky-400 hover:duration-300'>buy now</button>
                  </div>
                  <div className='flex gap-8'>
                    <div className='flex flex-col items-center'>
                      <label className='text-[1.3rem] font-semibold font-Franklin text-stone-700' >Screen</label>
                      <span className='font-bold text-stone-700 font-Signika text-4xl'>{data?.screen}<span className='font-Franklin uppercase text-xl'>in</span></span>
                    </div>
                    <div className='flex flex-col items-center'>
                      <label className='text-[1.3rem]  font-semibold font-Franklin text-stone-700'>Camera</label>
                      <span className='font-bold text-stone-700 font-Signika text-4xl'>{data?.camera.main}<span className='font-Franklin uppercase text-xl'>mp</span></span>
                    </div>
                    <div className='flex flex-col items-center'>
                      <label className='text-[1.3rem] font-semibold font-Franklin text-stone-700'>Talk Time</label>
                      <span className='font-bold text-stone-700 font-Signika text-4xl'>{data?.talk_time}<span className='font-Franklin uppercase text-xl'>hrs</span></span>
                    </div>
                    <div className='flex flex-col items-center'>
                      <label className='text-[1.3rem] font-semibold font-Franklin text-stone-700'>Storage</label>
                      <span className='font-bold text-stone-700 font-Signika text-4xl'>{data?.storage}<span className='font-Franklin uppercase text-xl'>gb</span></span>
                    </div>
                    <div className='flex flex-col items-center'>
                      <label className='text-[1.3rem] font-semibold font-Franklin text-stone-700'>{data?.category}</label>
                      <span className='font-bold text-stone-700 font-Signika text-4xl'><span className='font-Franklin uppercase text-xl'>ios </span>{data?.system}</span>
                    </div>
                  </div>
                  <div>
                    <h1 className="pb-2 my-4 text-[15px] font-Signika text-stone-600 font-bold text-sm">Professional customer service: </h1>
                    <ul className='text-stone-500'>

                      <li className=' flex gap-2'>
                        <span className='text-amber-500'><CheckIcon /></span>
                        <span>Free Shipping on orders over $25.00</span>
                      </li>

                      <li className=' flex gap-2'>
                        <span className='text-amber-500'><CheckIcon /></span>
                        <span>No Import Fees Deposit & 15 Days Returns</span>
                      </li>

                      <li className=' flex gap-2'>
                        <span className='text-amber-500'><CheckIcon /></span>
                        <span>Standard Shipping and Express Shipping</span>
                      </li>
                    </ul>
                  </div>
                  <div className=' w-[350px] bg-lime-500  rounded-xl overflow-hidden	'>
                    <img src={payment} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        )}
        <Dropdown data={data} />
      </div>
    </>



  )
}

export default Product
