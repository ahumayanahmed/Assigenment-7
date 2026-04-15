import Link from 'next/link';
import React from 'react';

const Notfound = () => {
    return (
         <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-50">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-6">Oops! Page Not Found.</p>
      <Link

        href="/home"
        className="px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-600 transition"
      >
        Go Home
      </Link>
    </div>
    );
};

export default Notfound;