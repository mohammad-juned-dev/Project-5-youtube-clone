import React  from 'react'
import PlayVideo from '../../components/playVideo/PlayVideo'
import Recomended from '../../components/recomended/Recomended'
import { useParams } from 'react-router-dom';


const Video = () => {
const {videoId , categoryId}=useParams()

  return (
    <div className='flex bg-red-500 '>
      <PlayVideo  videoId={videoId}/>
      <Recomended categoryId={categoryId}/>
      
    </div>
  )
}

export default Video