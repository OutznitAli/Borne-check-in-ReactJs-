import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import "./Product.css"
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'
import { ConstructionOutlined, Preview } from '@mui/icons-material'


const ProductImageSlider = ({data,key}) => {



  const renderVideo = (item) =>{

      return(

      <>
          <div className='text-center bg-lime-500 h-[400px]'>
            <iframe
              width='560'
              height='315'
              src={item.embedUrl}
              frameBorder='0'
              allowFullScreen
            ></iframe>
          </div> 
      </>
    

      )

  }


  const ImagesData = data.images.map((val : string ,index: number )=>{

    

    return  index === 1 ? {
        thumbnail: val,
        original: val,
        embedUrl: '',
        renderItem: renderVideo.bind(this),
      } 
      : {
        thumbnail: val,
        original: val,
      }
  })


  return (
    <>
          <div className=' w-[500px]'>
          <ImageGallery items={ImagesData} showPlayButton={false} />
          </div>  
    </>
  )
}

export default ProductImageSlider

