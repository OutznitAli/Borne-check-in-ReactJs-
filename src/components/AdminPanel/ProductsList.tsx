import React, { useEffect, useState } from 'react'
import { UseFetch } from '../../hooks/useFetch'
import Svg from '../../Spinner.svg'
import axios from 'axios'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Rating from '@mui/material/Rating';
import { Link, useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';


const ProductsList = () => {



 const [isLoading, setLoading] = useState(false)
 const [data, setData] = useState([])
 const params = useParams()
 let navigate = useNavigate()


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


 const deleteClicked = (e) => {


  const id = e.target.id

  axios.delete(`http://localhost:5000/products/delete/${id}`)
   .then((res) => {

    swal({
     title: "Are you sure?",
     text: "Once deleted, you will not be able to recover this imaginary file!",
     icon: "warning",
     dangerMode: true,
    })
     .then((willDelete) => {
      if (willDelete) {
       swal("Poof! Your imaginary file has been deleted!", {
        icon: "success",
       });
      } else {
       swal("Your imaginary file is safe!");
      }
     });
   })
   .catch(err => console.log(err))
 }

 return (

  <>

   <div className='bg-stone-50 p-[70px]'>

    {isLoading && (
     <div className="flex items-center justify-center h-screen">
      <img src={Svg} alt="" />
     </div>
    )}

    <div className=' p-4 flex gap-10 items-center'>
     <div className=' font-semibold text-stone-700 uppercase font-Franklin'>
      <span className='text-2xl'>Edit Products</span>
     </div>

    </div>
    <div className='grid grid-cols-4 col-span-1'>

     {data && data.map(items => (


      <div key={items.id}>
       <div className=' w-[18rem] m-4 pt-4 p-6 flex flex-col items-center gap-0 bg-white  relative'>
        <div className='fav p-2 text-red-500 cursor-pointer'>

         <button id={items._id} onClick={deleteClicked}>
          Delete
         </button>

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

          <Link className='bg-slate-200 px-[1.9rem] py-[0.5rem] rounded-md hover:bg-sky-600 hover:duration-700 hover:text-slate-50 uppercase font-bold text-slate-700' to={`/products/edit/${items._id}`}>
           Edit
          </Link>

         </div>
        </div>



       </div>
      </div>






     ))}
    </div>


   </div>


  </>
 )
}

export default ProductsList