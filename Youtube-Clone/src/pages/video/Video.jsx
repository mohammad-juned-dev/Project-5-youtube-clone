import React from 'react'
import PlayVideo from '../../components/playVideo/PlayVideo'
import Recomended from '../../components/recomended/Recomended'
 


const Video = () => {
  return (
    <div className='flex bg-red-500 '>
      <PlayVideo/>
      <Recomended/>
      
    </div>
  )
}

export default Video