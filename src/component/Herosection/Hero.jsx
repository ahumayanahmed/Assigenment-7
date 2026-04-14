import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Herosection = ({friend}) => {
    return (
        <div className=' pt-40 pb-5 bg-base-200 text-center space-y-5'>
            <h1 className='text-6xl font-bold'>Friends to keep close in your life</h1>
            <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
relationships that matter most.</p>
<button className='btn bg-[#244D3F] text-white'>  <span className="flex gap-2 items-center">
      <FaPlus/> Add a Friend
    </span></button>

<div className="pt-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full">

  <div className="bg-white rounded-xl shadow p-6 text-center">
    <h1 className="text-3xl font-bold text-[#244D3F]">{friend.length}</h1>
    <p className="text-gray-500">Total Friends</p>
  </div>

  <div className="bg-white rounded-xl shadow p-6 text-center">
    <h1 className="text-3xl font-bold text-[#244D3F]">3</h1>
    <p className="text-gray-500">On Track</p>
  </div>

  <div className="bg-white rounded-xl shadow p-6 text-center">
    <h1 className="text-3xl font-bold text-[#244D3F]">6</h1>
    <p className="text-gray-500">Need Attention</p>
  </div>

  <div className="bg-white rounded-xl shadow p-6 text-center">
    <h1 className="text-3xl font-bold text-[#244D3F]">12</h1>
    <p className="text-gray-500">Interactions This Month</p>
  </div>

</div>

        </div>
    );
};

export default Herosection;