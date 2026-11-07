import React from "react";
import thumbnail1 from "../../assets/thumbnail1.png"
import thumbnail2 from "../../assets/thumbnail2.png"
import thumbnail3 from "../../assets/thumbnail3.png"
import thumbnail4 from "../../assets/thumbnail4.png"
import thumbnail5 from "../../assets/thumbnail5.png"
import thumbnail6 from "../../assets/thumbnail6.png"
import thumbnail7 from "../../assets/thumbnail7.png"
import thumbnail8 from "../../assets/thumbnail8.png"

const Recomended = () => {
const image ="h-[10rem] w-[20rem] rounded-xl"
const title = "text-lg font-semibold w-full"
const channelname ="text-sm text-gray-400 "
const views ="text-[10px] text-gray-400"

  return <div className="flex-1 flex flex-col gap-2 min-w-0 ">
    <div className="flex px-5 py-3 gap-5">
      <img className={image} src={thumbnail1} alt="" />
      <div className=" flex flex-col flex-1 ">
        <h1 className={title}>title of thr video should be shifted into the next line</h1>
        <h1 className={channelname}>channel name</h1>
        <h1 className={views}>views</h1>
      </div>      
    </div>
     <div className="flex px-5 py-3 gap-5">
      <img className={image} src={thumbnail2} alt="" />
      <div className=" flex flex-col flex-1 ">
        <h1 className={title}>title of thr video should be shifted into the next line</h1>
        <h1 className={channelname}>channel name</h1>
        <h1 className={views}>views</h1>
      </div>      
    </div>
     <div className="flex px-5 py-3 gap-5">
      <img className={image} src={thumbnail3} alt="" />
      <div className=" flex flex-col flex-1 ">
        <h1 className={title}>title of thr video should be shifted into the next line</h1>
        <h1 className={channelname}>channel name</h1>
        <h1 className={views}>views</h1>
      </div>      
    </div>
     <div className="flex px-5 py-3 gap-5">
      <img className={image} src={thumbnail4} alt="" />
      <div className=" flex flex-col flex-1 ">
        <h1 className={title}>title of thr video should be shifted into the next line</h1>
        <h1 className={channelname}>channel name</h1>
        <h1 className={views}>views</h1>
      </div>      
    </div>
     <div className="flex px-5 py-3 gap-5">
      <img className={image} src={thumbnail5} alt="" />
      <div className=" flex flex-col flex-1 ">
        <h1 className={title}>title of thr video should be shifted into the next line</h1>
        <h1 className={channelname}>channel name</h1>
        <h1 className={views}>views</h1>
      </div>      
    </div>
     <div className="flex px-5 py-3 gap-5">
      <img className={image} src={thumbnail6} alt="" />
      <div className=" flex flex-col flex-1 ">
        <h1 className={title}>title of thr video should be shifted into the next line</h1>
        <h1 className={channelname}>channel name</h1>
        <h1 className={views}>views</h1>
      </div>      
    </div>
     <div className="flex px-5 py-3 gap-5">
      <img className={image} src={thumbnail7} alt="" />
      <div className=" flex flex-col flex-1 ">
        <h1 className={title}>title of thr video should be shifted into the next line</h1>
        <h1 className={channelname}>channel name</h1>
        <h1 className={views}>views</h1>
      </div>      
    </div>
     <div className="flex px-5 py-3 gap-5">
      <img className={image} src={thumbnail8} alt="" />
      <div className=" flex flex-col flex-1 ">
        <h1 className={title}>title of thr video should be shifted into the next line</h1>
        <h1 className={channelname}>channel name</h1>
        <h1 className={views}>views</h1>
      </div>      
    </div>
    </div>;
};

export default Recomended;
