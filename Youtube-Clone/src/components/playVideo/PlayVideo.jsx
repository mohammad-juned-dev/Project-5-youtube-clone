import React from "react";
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";

const PlayVideo = () => {
  return (
    <div className="basis-3/5 p-3">
      <video className="w-[100%] rounded-xl" src={video1} controls autoPlay muted></video>
      <h2 className="text-xl font-semibold mx-1">video name</h2>
      <div className="flex justify-between mb-4 mx-1">
        <p className="text-[13px] text-gray-500">125 views : 2days ago</p>
        <div className="flex gap-5 items-center justify-center">
          <div className="flex gap-2 items-center justify-center border-[1.5px] px-2 py-1 rounded-full border-black ">
            <img className="h-[1.5rem]" src={like} alt="" />
            <h6 className="text-[12px]">1232</h6>
        </div>
          <div className="flex gap-2 items-center justify-center border-[1.5px] px-2 py-1 rounded-full border-black ">
            <img className="h-[1.5rem]" src={dislike} alt="" />
              <h6 className="text-[12px]">1232</h6>
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
          <img className="rounded-full h-10 w-10 cursor-pointer" src={jack} alt="" />
         <div className="flex flex-col " >
          <p className="font-semibold text-xl">channel name</p>
          <span className="text-[10px] text-gray-400">1M Subscribers</span>
         </div>          
        </div>
        <button className=" border-black text-white font-medium shadow-xl hover:bg-white/20 hover:border-white/30 transition-all duration-300 border-2 px-5 py-0.2 rounded-lg text-sm bg-white/10 backdrop-blur-md  border-white/20">Subscribe</button>
      </div>
      <div className=" px-5 py-3">
        <p className="text-[12px] ">greatest channel to learn coding</p>
        <p className="text-[12px] ">subscribe for more videos</p>
        <hr />
        <h4 className="text-xl font-semibold">140 comments</h4>
        <div className=" flex gap-5 items-center">
           <img className="rounded-full h-10 w-10 " src={user_profile} alt="" />
           <div  className="flex flex-col gap-2">
            <h3 className="text-md ">Jack nick <span className="text-[10px] text-gray-400">1day ago</span></h3>
            <p className="text-[10px]">qawesrxdctfvgbhunjimok,sexdrctvgbhnjimk,lazsexdrcfvgbhnjmawzsexdcfvgbh</p>
            <div className="flex items-center">
                <img className="rounded-full h-5 w-5 object-cover object-center mr-2 "  src={like} alt="" />
                <span className="text-[10px] text-gray-400 mr-7" >8745</span>
                <img className="rounded-full h-5 w-5 object-cover object-center mr-2"  src={dislike} alt="" />
                <span className="text-[10px] text-gray-400">8745</span>
            </div>

           </div>

        </div>
         <div className=" flex gap-5 items-center">
           <img className="rounded-full h-10 w-10 " src={user_profile} alt="" />
           <div  className="flex flex-col gap-2">
            <h3 className="text-md ">Jack nick <span className="text-[10px] text-gray-400">1day ago</span></h3>
            <p className="text-[10px]">qawesrxdctfvgbhunjimok,sexdrctvgbhnjimk,lazsexdrcfvgbhnjmawzsexdcfvgbh</p>
            <div className="flex items-center">
                <img className="rounded-full h-5 w-5 object-cover object-center mr-2 "  src={like} alt="" />
                <span className="text-[10px] text-gray-400 mr-7" >8745</span>
                <img className="rounded-full h-5 w-5 object-cover object-center mr-2"  src={dislike} alt="" />
                <span className="text-[10px] text-gray-400">8745</span>
            </div>

           </div>

        </div>
         <div className=" flex gap-5 items-center">
           <img className="rounded-full h-10 w-10 " src={user_profile} alt="" />
           <div  className="flex flex-col gap-2">
            <h3 className="text-md ">Jack nick <span className="text-[10px] text-gray-400">1day ago</span></h3>
            <p className="text-[10px]">qawesrxdctfvgbhunjimok,sexdrctvgbhnjimk,lazsexdrcfvgbhnjmawzsexdcfvgbh</p>
            <div className="flex items-center">
                <img className="rounded-full h-5 w-5 object-cover object-center mr-2 "  src={like} alt="" />
                <span className="text-[10px] text-gray-400 mr-7" >8745</span>
                <img className="rounded-full h-5 w-5 object-cover object-center mr-2"  src={dislike} alt="" />
                <span className="text-[10px] text-gray-400">8745</span>
            </div>

           </div>

        </div>
         <div className=" flex gap-5 items-center">
           <img className="rounded-full h-10 w-10 " src={user_profile} alt="" />
           <div  className="flex flex-col gap-2">
            <h3 className="text-md ">Jack nick <span className="text-[10px] text-gray-400">1day ago</span></h3>
            <p className="text-[10px]">qawesrxdctfvgbhunjimok,sexdrctvgbhnjimk,lazsexdrcfvgbhnjmawzsexdcfvgbh</p>
            <div className="flex items-center">
                <img className="rounded-full h-5 w-5 object-cover object-center mr-2 "  src={like} alt="" />
                <span className="text-[10px] text-gray-400 mr-7" >8745</span>
                <img className="rounded-full h-5 w-5 object-cover object-center mr-2"  src={dislike} alt="" />
                <span className="text-[10px] text-gray-400">8745</span>
            </div>

           </div>

        </div>
         <div className=" flex gap-5 items-center">
           <img className="rounded-full h-10 w-10 " src={user_profile} alt="" />
           <div  className="flex flex-col gap-2">
            <h3 className="text-md ">Jack nick <span className="text-[10px] text-gray-400">1day ago</span></h3>
            <p className="text-[10px]">qawesrxdctfvgbhunjimok,sexdrctvgbhnjimk,lazsexdrcfvgbhnjmawzsexdcfvgbh</p>
            <div className="flex items-center">
                <img className="rounded-full h-5 w-5 object-cover object-center mr-2 "  src={like} alt="" />
                <span className="text-[10px] text-gray-400 mr-7" >8745</span>
                <img className="rounded-full h-5 w-5 object-cover object-center mr-2"  src={dislike} alt="" />
                <span className="text-[10px] text-gray-400">8745</span>
            </div>

           </div>

        </div>
         <div className=" flex gap-5 items-center">
           <img className="rounded-full h-10 w-10 " src={user_profile} alt="" />
           <div  className="flex flex-col gap-2">
            <h3 className="text-md ">Jack nick <span className="text-[10px] text-gray-400">1day ago</span></h3>
            <p className="text-[10px]">qawesrxdctfvgbhunjimok,sexdrctvgbhnjimk,lazsexdrcfvgbhnjmawzsexdcfvgbh</p>
            <div className="flex items-center">
                <img className="rounded-full h-5 w-5 object-cover object-center mr-2 "  src={like} alt="" />
                <span className="text-[10px] text-gray-400 mr-7" >8745</span>
                <img className="rounded-full h-5 w-5 object-cover object-center mr-2"  src={dislike} alt="" />
                <span className="text-[10px] text-gray-400">8745</span>
            </div>

           </div>

        </div>

      </div>
    </div>
  );
};

export default PlayVideo;
