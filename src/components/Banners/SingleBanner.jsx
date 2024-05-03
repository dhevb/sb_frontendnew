import React from 'react'
import"./singlebanner.css";

const SingleBanner = ({bannerImage,heading}) => {
  return (
    <div className='singlebanner'>
      <div className='bannerimgfilter'></div>
      <img className='bannerimg' src={bannerImage} alt='noimage'/>
      <div className='bannerheading'>
       <h1>{heading}</h1> 
      </div>
     </div>
  )
}

export default SingleBanner