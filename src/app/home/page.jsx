import Herosection from '@/component/Herosection/Hero';
import React from 'react';

const Homepage = () => {
    return (
        <div className='bg-base-200 w-full'>
        <div className='w-[85%] mx-auto '>
             <Herosection/>
            <h1 className='text-xl font-bold'>Your Friends</h1>
            </div>
            
            
        </div>
    );
};

export default Homepage;