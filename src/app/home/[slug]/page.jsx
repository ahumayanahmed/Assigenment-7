
import Timelinepage from "@/app/timeline/page";
import History from "@/component/History/History";
import Timepage from "@/component/Timelinepage/Timepage";
import Image from "next/image";
import { FaHistory, FaPhone, FaVideo } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";


export async function generateMetadata({params}){
  const {slug}= await params;
    
    const res = await fetch("http://localhost:3000/friends.json")
    const data = await res.json();
    const frienddata = data.find((f) => f.id == slug);
     return {
    title: frienddata.name,
    description: frienddata.bio,
  }
}

const FriendDetails = async ({ params }) => {

    const {slug}= await params;
    
    const res = await fetch("https://assigenment-7.vercel.app/friends.json", {
    cache: "no-store",
  })
    const data = await res.json();
    const frienddata = data.find((f) => f.id == slug);

     
    
  const {
    id,
    name,
    picture,
    email,
    bio,
    days_since_contact,
    status,
    tags,
    goal,
    next_due_date,
  } = frienddata;

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">

        {/* LEFT */}
       <div className="">
        <div className="space-y-3 bg-white rounded-xl p-6 shadow text-center">
          <Image
            src={picture}
            alt={name}
            width={100}
            height={100}
            className="mx-auto rounded-full"
          />

          <h2 className="mt-4 text-xl font-semibold">{name}</h2>

          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs">
            {status}
          </span>

          <div className="flex justify-center gap-2 mt-3 flex-wrap">
            {tags.map((tag, i) => (
              <span key={i} className="bg-green-100 px-2 py-1 text-xs rounded">
                {tag}
              </span>
            ))}
          </div>

          <p className="text-gray-500 mt-4 italic">{bio}</p>
          <p className="text-xs mt-2 text-gray-400">{email}</p>
        </div>

        <div className="pt-5 flex flex-col gap-3">
          <button className="btn">⏰ Snooze 2 Weeks</button>
          <button className="btn">📦 Archive</button>
          <button className="btn text-red-500">🗑️ Delete</button>
        </div>
       </div>

        {/* RIGHT */}
        <div className="md:col-span-2 space-y-6">

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-xl shadow text-center">
              <h1 className="text-2xl font-bold">{days_since_contact}</h1>
              <p className="text-sm text-gray-500">Days Since Contact</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow text-center">
              <h1 className="text-2xl font-bold">{goal}</h1>
              <p className="text-sm text-gray-500">Goal (Days)</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow text-center">
              <h1 className="text-lg font-bold">{next_due_date}</h1>
              <p className="text-sm text-gray-500">Next Due</p>
            </div>

            <div className="flex justify-between bg-white col-span-3 p-4 rounded-xl shadow">
              <div className="">
              <h1 className="text-xl font-bold">Relationship Goal {goal}</h1>
              <p className="text-sm text-gray-500">Contuct every <span className="text-black font-bold">{days_since_contact} days</span></p>
            
            </div>
            <div>
              <button className="btn">Edit</button>
            </div>
            </div>

<div className=" bg-white col-span-3 p-4 rounded-xl shadow">
  <h3 className="">Quick Check-In</h3>
 {/* <div className="flex justify-between">
   <div className="bg-base-200 w-40 h-20 rounded-2xl flex flex-col justify-center items-center"><FaPhone/> Call</div>
  
  <div className="bg-base-200 w-40 h-20 rounded-2xl flex flex-col justify-center items-center"><FaMessage/>Text </div>
  <div className="bg-base-200 w-40 h-20 rounded-2xl flex flex-col justify-center items-center"><FaVideo/> Video</div>
 </div> */}
 <Timepage frienddata={frienddata}/>
</div>

<div className=" bg-white col-span-3 p-4 rounded-xl shadow">
{/* <div className="flex justify-between">
  <h1 className="text-2xl"> Recent Interactions</h1>
  <button className="btn"><FaHistory/> Ful History</button>
</div> */}

<History/>

<div>

</div>

</div>


          </div>

        </div>
      </div>
      
    </div>

  
  );
};

export default FriendDetails;