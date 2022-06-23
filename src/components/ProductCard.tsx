import React, { useEffect, useState } from 'react'
import Svg from '../Spinner.svg'
import { UseFetch } from '../hooks/useFetch';
import Rating from '@mui/material/Rating';
import ReactPaginate from 'react-paginate';
import { Link, useParams, useNavigate } from "react-router-dom";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import "./Product.css"
import SliderRange from './SliderRange';
import Box from '@mui/material/Box';
import axios from 'axios';



export default function ProductCard() {

  // useEffect(() => {

  //   const getProducts = async () => {

  //     setLoading(true)
  //     const response = await fetch('http://localhost:4000/products')

  //     setData(await response.clone().json())
  //     setLoading(false)


  //   }
  //   getProducts()
  // }, [])

  useEffect(() => {

    const getProducts = async () => {

      setLoading(true)
      const result = await axios.get('http://localhost:5000/products')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
      setLoading(false)

    }

    getProducts()
  }, [])

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [filterList, setFilterList] = useState([])
  const [isFilterClicked, setIsFilterClicked] = useState(false)
  const [selectedPrice, setSelectedPrice] = useState([100, 2000])
  const [pageNumber, setPageNumer] = useState(0)

  const productPerPage = 6
  const pagesVisited = pageNumber * productPerPage
  const pageCount = Math.ceil(data.length / productPerPage)
  const displayProduct = data.slice(pagesVisited, pagesVisited + productPerPage)

  console.log(data)




  const listingProduct = displayProduct.map((items) => {

    return (

      <>
        <div key={items.id}>
          <div className=' w-[18rem] m-4 pt-4 p-6 flex flex-col items-center gap-6 bg-white  relative'>

            <div className='fav p-2 text-stone-700'>
              <FavoriteBorderIcon />
            </div>

            <div>
              <img src={items.image} className="object-contain w-[250px] h-[200px]" />
            </div>
            <div className=' w-full flex flex-col gap-2'>
              <div className='flex flex-col items-start gap-2 '>
                <h1 className='font-Signika text-left text-xl font-bold text-md text-stone-900 text-center	'>{items.title}</h1>
                <div className='flex items-center gap-2'>
                  <Rating name="half-rating-read" defaultValue={items.rating.rate} precision={0.5} readOnly size='small' />
                  <span className='font-semibold text-[0.9rem]'>({items.rating.count})</span>
                </div>
              </div>
              <div className=' w-full  flex justify-between items-end '>
                <span className='font-bold text-xl text-stone-700 font-Signika'>${items.price}</span>

                <Link className='bg-slate-200 px-[1.9rem] py-[0.5rem] rounded-md hover:bg-sky-600 hover:duration-700 hover:text-slate-50 uppercase font-bold text-slate-700' to={`/products/${items._id}`}>
                  Buy
                </Link>

              </div>
            </div>



          </div>
        </div>


      </>
    )

  })


  const listingFilter = filterList.map((items) => {
    return (

      <>
        <div key={items.id}>
          <div className=' w-[18rem] m-4 pt-4 p-6 flex flex-col items-center gap-6 bg-white  relative'>

            <div className='fav p-2 text-stone-700'>
              <FavoriteBorderIcon />
            </div>

            <div>
              <img src={items.image} className="object-contain w-[250px] h-[200px]" />
            </div>
            <div className=' w-full flex flex-col gap-2'>
              <div className='flex flex-col items-start gap-2 '>
                <h1 className=' text-left font-Signika text-xl font-bold text-md text-stone-900 text-center	'>{items.title}</h1>
                <div className='flex items-center gap-2'>
                  <Rating name="half-rating-read" defaultValue={items.rating.rate} precision={0.5} readOnly size='small' />
                  <span className='font-semibold text-[0.9rem]'>({items.rating.count})</span>
                </div>
              </div>
              <div className=' w-full  flex justify-between items-end '>
                <span className='font-bold text-xl text-stone-700 font-Signika'>${items.price}</span>

                <Link className='bg-slate-200 px-[1.9rem] py-[0.5rem] rounded-md hover:bg-sky-600 hover:duration-700 hover:text-slate-50 uppercase font-bold text-slate-700' to={`/products/${items._id}`}>
                  Buy
                </Link>

              </div>
            </div>



          </div>
        </div>


      </>
    )

  })



  const changePage = ({ selected }) => {

    setPageNumer(selected)
    setIsFilterClicked(false)
    setSelectedCategory(null)

  }



  const HandlSelectCategory = (value) => {
    !value ? null : setSelectedCategory(value)
    setIsFilterClicked(true)
  }


  const applyFilter = () => {

    let updateList = displayProduct


    if (selectedCategory) {

      updateList = updateList.filter(items => items.category === selectedCategory)
    }

    const minprice = selectedPrice[0]
    const maxprice = selectedPrice[1]

    updateList = updateList.filter((items) => items.price >= minprice && items.price <= maxprice)

    setFilterList(updateList)
  }

  const changePrice = (event, value) => {

    setIsFilterClicked(true)
    setSelectedPrice(value)
    console.log('filter list on change', filterList)
  }

  useEffect(() => {
    applyFilter()
    console.log('filter list on effect', filterList)
  }, [selectedCategory, selectedPrice])




  return (
    <>
      <div className='bg-stone-100 p-10'>
        {<div>
          {loading && (
            <div className="flex items-center justify-center h-screen">
              <img src={Svg} alt="" />
            </div>
          )}
          <div className=' p-4 flex gap-10 items-center'>
            <div className=' font-semibold text-stone-700 uppercase font-Franklin'>
              <span className=''>showing 1-{productPerPage} of {data.length} results</span>
            </div>

          </div>
          <div className=' overflow-hidden grid grid-cols-4	'>
            <div className='grid grid-cols-3 col-span-3' key={1}>
              {isFilterClicked ? listingFilter : listingProduct}
            </div>
            <div className='p-4 flex flex-col'>
              <span className='uppercase font-Franklin text-md font-bold text-stone-800'>filter by category</span>
              <div className='flex flex-col items-start  gap-4 py-4'>
                <button onClick={() => HandlSelectCategory('IPhone')} className=' inline-block px-6 py-2 border-2 border-sky-600 text-sky-600 font-medium text-xs leading-tight uppercase rounded hover:bg-sky-500 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'>Iphone</button>
                <button onClick={() => HandlSelectCategory('Samsung')} className='inline-block px-6 py-2 border-2 border-sky-600 text-sky-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'>Samsung</button>
              </div>
              <div className='flex flex-col gap-[3rem]'>
                <span className='uppercase font-Franklin text-md font-bold text-stone-800'>filter by category</span>

                <div className='w-[15rem]'>
                  <SliderRange value={selectedPrice} changePrice={changePrice}
                  />
                </div>
              </div>
            </div>

          </div>
          <div className=' flex justify-center items-center  p-4 '>
            <ReactPaginate

              previousLabel={<NavigateBeforeIcon />}
              nextLabel={<NavigateNextIcon />}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationBttns"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />
          </div>
        </div>
        }
      </div>
    </>
  )
}
// inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out
// return (

//       <>


//         <div key={items.id}>
//           <div className=' w-[300px] h-full m-4 pt-4 p-6 flex flex-col items-center gap-6 bg-white shadow-lg rounded-xl relative'>

//             <div className='fav p-2 text-stone-700'>
//               <FavoriteBorderIcon />
//             </div>

//             <div>
//               <img src={items.image} className="object-contain w-[250px] h-[200px]" />
//             </div>
//             <div className='flex flex-col items-center justify-center gap-2 '>
//               <h1 className='font-bold text-md text-slate-800 text-center	'>{items.title}</h1>
//               <span className='font-bold text-lg text-sky-500'>${items.price}</span>
//               <Rating name="half-rating-read" defaultValue={items.rating.rate} precision={0.5} readOnly size='small' />
//             </div>

//             <div>
//               <button>
//                 <Link className='bg-slate-200 px-[100px] py-[10px] rounded-md hover:bg-sky-400 hover:duration-700 hover:text-slate-50 uppercase font-bold text-slate-700' to={`/products/${items.id}`}>
//                   Buy
//                 </Link>
//               </button>
//             </div>

//           </div>
//         </div>


//       </>
//     )