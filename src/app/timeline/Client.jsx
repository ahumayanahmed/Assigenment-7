"use client";
import { TimelinePageContext } from '@/context/timeline.context';
import React, { useContext, useState } from 'react';
import Image from "next/image";

const Timelinepage = () => {
    const {timepage}=useContext(TimelinePageContext)
    console.log("tomepage",timepage)

const [filter, setFilter] = useState("all");

// filter data
const filteredData = timepage.filter((item) => {
    if (filter === "all") return true;
    return item.type === filter;
});

if (timepage.length===0) {
    return (
      <div className="w-full h-40 flex justify-center items-center text-gray-500 text-xl">
       No Data Found Timeline Page
      </div>
    );
  }


    return (
    <div className=" pt-5 bg-base-200 w-full">
        <div className='space-y w-[85%] mx-auto'>
        <h1 className='text-3xl font-bold'>Timeline</h1>
            <div className="dropdown dropdown-start pt-5">

  <div tabIndex={0} role="button" className="btn m-1">
    {filter === "filtertimeline"
      ? "Filter Timeline"
      : filter === "call"
      ? "Call"
      : filter === "message"
      ? "Message"
      : "Filter Timeline"} ⬇️
  </div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
     <li><a onClick={() => setFilter("filtertimeline")}>Filter Timeline</a></li>
    <li><a onClick={() => setFilter("call")}>Call</a></li>
    <li><a onClick={() => setFilter("message")}>Message</a></li>
    <li><a onClick={() => setFilter("video")}>Video</a></li>
  </ul>
</div>
    </div>

<div className="space-y-4">
      {filteredData.map((item, index) => (
        <div
          key={index}
          className="bg-base-100 p-4 mt-5 rounded-xl shadow"
        >
          {/* Left side */}
          <div className="flex  gap-3">
            <Image
              src={item.friend.picture}
              alt={item.friend.name}
               width={30}
               height={30}
              className=" object-contain rounded-full"
            />

            <div>
                <div>
              <h2 className="font-semibold">
                {item.type === "call" && "📞 Call with"}
                {item.type === "message" && "💬 Message with"}
                {item.type === "video" && "🎥 Video call with"}{" "}
                {item.friend.name}
              </h2>

              
            </div>
             <div className="text-sm text-gray-400">
            {item.time}
          </div>
            </div>
          </div>

          {/* Right side */}
         
        </div>
      ))}
    </div>

    </div>
    
    );
};

export default Timelinepage;


