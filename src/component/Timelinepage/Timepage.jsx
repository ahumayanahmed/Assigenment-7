"use client";

import { useContext } from "react";
import { toast } from "react-toastify";
import { TimelinePageContext } from "@/context/timeline.context";
import { FaPhone, FaVideo } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

const Timepage = ({ frienddata }) => {
  const { timepage, settimepage } = useContext(TimelinePageContext);

  const handleAction = (type) => {
    const newData = {
      friend: frienddata,
      type,
      time: new Date().toLocaleString(),
    };

    settimepage([...timepage, newData]);

     toast.success(`${type.toUpperCase()} ADD SUSSESSFULY`);

  };
  

  return (
    <div className="flex justify-between">

      <div
        onClick={() => handleAction("call")}
        className="bg-base-200 w-40 h-20 cursor-pointer rounded-2xl flex flex-col justify-center items-center"
      >
        <FaPhone /> Call
      </div>

      <div
        onClick={() => handleAction("message")}
        className="bg-base-200 w-40 h-20 cursor-pointer rounded-2xl flex flex-col justify-center items-center"
      >
        <FaMessage /> Text
      </div>

      <div
        onClick={() => handleAction("video")}
        className="bg-base-200 w-40 h-20 cursor-pointer rounded-2xl flex flex-col justify-center items-center"
      >
        <FaVideo /> Video
      </div>

    </div>
  );
};

export default Timepage;