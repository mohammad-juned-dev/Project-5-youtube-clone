import React, { useEffect, useState } from "react";
import thumbnail1 from "../../assets/thumbnail1.png";
import thumbnail2 from "../../assets/thumbnail2.png";
import thumbnail3 from "../../assets/thumbnail3.png";
import thumbnail4 from "../../assets/thumbnail4.png";
import thumbnail5 from "../../assets/thumbnail5.png";
import thumbnail6 from "../../assets/thumbnail6.png";
import thumbnail7 from "../../assets/thumbnail7.png";
import thumbnail8 from "../../assets/thumbnail8.png";
import { API_KEY } from "../../../data2";
import { value_converter } from "../../data";
import moment from "moment"
import { Link } from "react-router-dom";

const Recomended = ({ categoryId }) => {
  const [apiData, setApiData] = useState([]);
  const fetchrelatedvideos = async () => {
    const relatedvideos = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;

    await fetch(relatedvideos)
      .then((res) => res.json())
      .then((data) => setApiData(data.items));
  };

  useEffect(() => {
    fetchrelatedvideos();
  }, []);

  const image = "h-[10rem] w-[17rem] rounded-xl";
  const title = "text-lg font-semibold w-full";
  const channelname = "text-sm text-gray-400 ";
  const views = "text-[10px] text-gray-400";

  return (
    <div className="flex-1 flex flex-col gap-2 min-w-0 ">
      {apiData.map((item, index) => {
        return(
          <Link to={`/video/${item.snippet.categoryId}/${item.id}`}>
        <div key={index} className="flex px-5 py-3 gap-5">
          <img className={image} src={item?item.snippet.thumbnails.default.url:""} alt="" />
          <div className=" flex flex-col flex-1 ">
            <h1 className={title}>
              {item?item.snippet.title:""}
            </h1>
            <h1 className={channelname}>{item?item.snippet.channelTitle:""}</h1>
            <h1 className={views}>{item ? moment(item.snippet.publishedAt).fromNow() : ""} : {item ? value_converter(item.statistics.viewCount) : "0"} views</h1>
          </div>
        </div>
        </Link>
        )
      })}
    </div>
  );
};

export default Recomended;
