import React, { useEffect, useState } from "react";
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";
import { API_KEY } from "../../../data2.js";
import moment from "moment";
import { value_converter } from "../../data.js";

const PlayVideo = ({ videoId }) => {
  const [apidata, setApidata] = useState(null);
  const [channeldata, setChanneldata] = useState(null);
  const [commentsdata, setCommentsdata] = useState([]);

  const fetchapidata = async () => {
    const videodeatils = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;

    await fetch(videodeatils)
      .then((res) => res.json())
      .then((data) => setApidata(data.items[0]));
  };
  const fetchotherdata = async () => {
    const channeldetails = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apidata.snippet.channelId}&key=${API_KEY}`;

    await fetch(channeldetails)
      .then((res) => res.json())
      .then((data) => setChanneldata(data.items[0]));

    const commentdetails = ` https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;

    await fetch(commentdetails)
      .then((res) => res.json())
      .then((data) => setCommentsdata(data.items));
  };

  useEffect(() => {
    fetchapidata();
  }, []);

  useEffect(() => {
    fetchotherdata();
  }, [apidata]);
  return (
    <div className="basis-3/5 p-3">
      {/* <video className="w-[100%] rounded-xl" src={video1} controls autoPlay muted></video> */}

      <div className="w-full aspect-video overflow-hidden rounded-xl">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <h2 className="text-xl font-semibold mx-1">
        {apidata ? apidata.snippet.title : "title here "}
      </h2>
      <div className="flex justify-between mb-4 mx-1">
        <p className="text-[13px] text-gray-500">
          {apidata ? value_converter(apidata.statistics.viewCount) : "0"} views
          : {apidata ? moment(apidata.snippet.publishedAt).fromNow() : ""}
        </p>
        <div className="flex gap-5 items-center justify-center">
          <div className="flex gap-2 items-center justify-center border-[1.5px] px-2 py-1 rounded-full border-black ">
            <img className="h-[1.5rem]" src={like} alt="" />
            <h6 className="text-[12px]">
              {apidata ? value_converter(apidata.statistics.likeCount) : "0"}
            </h6>
          </div>
          <div className="flex gap-2 items-center justify-center border-[1.5px] px-2 py-1 rounded-full border-black ">
            <img className="h-[1.5rem]" src={dislike} alt="" />
            <h6 className="text-[12px]"></h6>
          </div>
          <div className="flex gap-2 items-center justify-center border-[1.5px] px-2 py-1 rounded-full border-black ">
            <img className="h-[1.5rem]" src={share} alt="" />
            <h6 className="text-[12px]">Share</h6>
          </div>
          <div className="flex gap-2 items-center justify-center border-[1.5px] px-2 py-1 rounded-full border-black ">
            <img className="h-[1.5rem]" src={save} alt="" />
            <h6 className="text-[12px]">Save</h6>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex justify-between w-full px-5 py-3">
        <div className="flex gap-2">
          <img
            className="rounded-full h-10 w-10 cursor-pointer"
            src={channeldata ? channeldata.snippet.thumbnails.default.url : ""}
            alt=""
          />
          <div className="flex flex-col ">
            <p className="font-semibold text-xl">
              {apidata ? apidata.snippet.channelTitle : ""}
            </p>
            <span className="text-[10px] text-gray-400">
              {channeldata
                ? value_converter(channeldata.statistics.subscriberCount)
                : ""}{" "}
              Subscribers
            </span>
          </div>
        </div>
        <button className=" border-black text-white font-medium shadow-xl hover:bg-white/20 hover:border-white/30 transition-all duration-300 border-2 px-5 py-0.2 rounded-lg text-sm bg-white/10 backdrop-blur-md  border-white/20">
          Subscribe
        </button>
      </div>
      <div className=" px-5 py-3">
        <p className="text-[12px] py-3 ">
          {apidata
            ? apidata.snippet.description.slice(0, 250)
            : "description here "}
        </p>
        <hr />
        <h4 className="text-xl font-semibold">
          {apidata ? value_converter(apidata.statistics.commentCount) : ""}{" "}
          comments
        </h4>
        {commentsdata.map((item,index)=>{

          return(
             <div key={index} className="my-5 flex gap-2 ">
          <img className="rounded-full h-7 w-7 " src={item?item.snippet.topLevelComment.snippet.authorProfileImageUrl:""} alt="" />
          <div className="flex flex-col gap-2">
            <h3 className="text-md ">
              {item?item.snippet.topLevelComment.snippet.authorDisplayName:""}{" "}
              <span className="text-[10px] text-gray-400">{item ? moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow() : ""}</span>
            </h3>
            <p className="text-[10px]">
              {item?item.snippet.topLevelComment.snippet.textDisplay:""}
            </p>
            <div className="flex items-center">
              <img
                className="rounded-full h-5 w-5 object-cover object-center mr-2 "
                src={like}
                alt=""
              />
              <span className="text-[10px] text-gray-400 mr-7"> {item ? value_converter(item.snippet.topLevelComment.snippet.likeCount) : ""}</span>
              <img
                className="rounded-full h-5 w-5 object-cover object-center mr-2"
                src={dislike}
                alt=""
              />
              <span className="text-[10px] text-gray-400"></span>
            </div>
          </div>
        </div>
          )
        }
      )}
        
      </div>
    </div>
  );
};

export default PlayVideo;
