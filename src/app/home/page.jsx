import Friends from '@/component/FriendsCord/Friends';
import Herosection from '@/component/Herosection/Hero';
import React, { use } from 'react';
const friends= fetch("http://localhost:3000/friends.json").then(res=>res.json())

const Homepage =() => {
    const friend = use(friends)
    return (
        <div className='bg-base-200 w-full'>
        <div className='w-[85%] mx-auto '>
             <Herosection friend={friend}/>
            <h1 className='text-xl font-bold'>Your Friends</h1>
            <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {friend.map(item=>(
                <Friends key={item.id} item={item}/>
            ))}
            </div>
            </div>
            
            
        </div>
    );
};

export default Homepage;