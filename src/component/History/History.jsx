"use client"

import { TimelinePageContext } from '@/context/timeline.context';
import React, { useContext } from 'react';
import { FaHistory } from 'react-icons/fa';
import Image from "next/image";
const History = () => {
    const {timepage,settimepage}=useContext(TimelinePageContext)
    return (
  
<div>
      <div className="flex justify-between">
  <h1 className="text-2xl"> Recent Interactions</h1>
  <button className="btn"><FaHistory/> Ful History</button>
</div>



<div className="space-y-4">
      {timepage.map((item, index) => (
        <div
          key={index}
          className="bg-base-100 p-4 rounded-xl shadow"
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
                {item.type === "call" && "📞"}
                {item.type === "message" && "💬"}
                {item.type === "video" && "🎥"}{" "}
                {item.type}
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

export default History;