import React from "react";
import Image from "next/image";
import Link from "next/link";
const Friends = ({ item }) => {
  const {
    id,
    name,
    picture,
    days_since_contact,
    status,
    tags,
  } = item;

  //  Status Style
  const statusStyle = {
    "overdue": "bg-red-500 text-white",
    "almost due": "bg-orange-400 text-white",
    "on-track": "bg-green-700 text-white",
  };

  return (

<Link href={`/home/${id}`}>
  <div className="cursor-pointer">
    <div className="bg-gray-100 rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition duration-300 w-full">
      
      {/* Image */}
          <Image

           src={picture}
        alt={name}
           width={80}
            height={80}
            className="mx-auto rounded-full object-cover"
/> 


      {/* Name */}
      <h2 className="mt-4 text-lg font-semibold text-gray-800">
        {name}
      </h2>

      {/* Days */}
      <p className="text-sm text-gray-400 mt-1">
        {days_since_contact}d ago
      </p>

      {/* Tags */}
      <div className="flex justify-center gap-2 mt-2 flex-wrap">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium"
          >
            {tag.toUpperCase()}
          </span>
        ))}
      </div>

      {/* Status Badge */}
      <div className="mt-3">
        <span
          className={`px-4 py-1 text-xs rounded-full font-semibold ${
            statusStyle[status]
          }`}
        >
          {status === "on-track"
            ? "On-Track"
            : status === "almost due"
            ? "Almost Due"
            : "Overdue"}
        </span>
      </div>
    </div>
  </div>
</Link>
  );
};

export default Friends;