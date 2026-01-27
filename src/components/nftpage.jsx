import React from 'react'
import topimg from '../assets/nftpage/topfirstimage.png'
const nftpage = () => {
  return (
    <div className='flex flex col'>
      <div className=''>
        <img src={topimg} className="h-auto w-auto object-cover" alt={topimg} />

        </div>  
    </div>
  )
}

export default nftpage