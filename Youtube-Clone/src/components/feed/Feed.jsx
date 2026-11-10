import React, { useEffect , useState} from 'react'
import thumbnail1 from "../../assets/thumbnail1.png"
import thumbnail2 from "../../assets/thumbnail2.png"
import thumbnail3 from "../../assets/thumbnail3.png"
import thumbnail4 from "../../assets/thumbnail4.png"
import thumbnail5 from "../../assets/thumbnail5.png"
import thumbnail6 from "../../assets/thumbnail6.png"
import thumbnail7 from "../../assets/thumbnail7.png"
import thumbnail8 from "../../assets/thumbnail8.png"
import {Link} from "react-router-dom"
import {API_KEY} from "../../../data2.js"
import {value_converter} from "../../data.js"

const Feed = ({category}) => {
const [data, setData] = useState([])
  const videoname = "text-md font-semibold w-full px-3"
  const channel = "text-sm text-gray-400 w-full px-3"
  const views ='text-[10px] text-gray-400 px-3 w-full'
 
  const fetchdata= async()=>{
 const videolist_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`

 await fetch(videolist_url).then(response=>response.json()).then(data=>setData(data.items))
  }

  useEffect(()=>{
    fetchdata()
  },[category])
  
  return (
    <div className="grid w-full min-w-0 grid-cols-1 gap-3 sm:grid-cols-3 2xl:grid-cols-3">
        {data.map((item , index)=>{
return( <div  className="min-w-0">
          <Link to={`video/${item.snippet.categoryId}/${item.id}`}>
            <img className="aspect-video w-full rounded-xl object-cover" src={item.snippet.thumbnails.medium.url} alt="" />
            <h2 className={videoname}>{item.snippet.title}</h2>
            <h3 className={channel}>{item.snippet.channelTitle}</h3>
            <p className={views}>{value_converter(item.statistics.viewCount)} views : {item.snippet.publishedAt} ago</p> 
            </Link>
        </div>)
        })}
       
    </div>
  )
}

export default Feed
