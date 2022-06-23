import React, { useState } from 'react'
import Slider from '@material-ui/core/Slider'




const SliderRange = ({ value, changePrice }) => {



  return (
    <>
      <div>
        <Slider
          value={value}
          onChange={changePrice}
          valueLabelDisplay="on"
          min={100}
          max={2000}
        />
      </div>

    </>
  )
}

export default SliderRange