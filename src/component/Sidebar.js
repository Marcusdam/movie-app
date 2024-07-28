import React from "react";
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="w-56 h-screen  fixed z-10 hidden">
      <ul className=" flex flex-col bg-gray-900 space-y-6 text-white p-6">

        <Link to='/' className="hover:bg-red-600 px-5 py-2 rounded-md">Home</Link>
        <Link to='/Upcoming' className="hover:bg-red-600 px-5 py-2 rounded-md">Upcoming</Link>
        <Link to='/Popular' className="hover:bg-red-600 px-5 py-2 rounded-md">Popular</Link>
        <Link to='/Top' className="hover:bg-red-600 px-5 py-2 rounded-md">Top Rated</Link>
        <Link to='Trending' className="hover:bg-red-600 px-5 py-2 rounded-md">Trending Now</Link>
        <Link to='/Action' className="hover:bg-red-600 px-5 py-2 rounded-md">Action</Link>
        <Link to='/Comedy' className="hover:bg-red-600 px-5 py-2 rounded-md">Comedies</Link>
        <Link to='/Romance' className="hover:bg-red-600 px-5 py-2 rounded-md">Romance</Link>
        <Link to='/Horror' className="hover:bg-red-600 px-5 py-2 rounded-md">Horror</Link>
        <Link to='/Documentary' className="hover:bg-red-600 px-5 py-2 rounded-md">Documentries</Link>
      </ul>
      
    </div>
  );
};

export default Sidebar;
