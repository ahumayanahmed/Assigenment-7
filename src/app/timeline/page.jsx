import React from 'react';

const Timelinepage = () => {
    return (
    <div className=" pt-5 bg-base-200 w-full">
        <div className='space-y w-[85%] mx-auto'>
        <h1 className='text-3xl font-bold'>Timeline</h1>
            <div className="dropdown dropdown-start">
  <div tabIndex={0} role="button" className="btn m-1">Filter timeline ⬇️</div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Call</a></li>
    <li><a>message</a></li>
    <li><a>Video</a></li>
  </ul>
</div>
    </div>
    </div>
    
    );
};

export default Timelinepage;