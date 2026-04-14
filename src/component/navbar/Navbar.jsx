"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaChartPie, FaClock, FaHome } from 'react-icons/fa';

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path) =>
    pathname === path ? "bg-green-500 text-white" : "";

  return (
    <div className="navbar bg-base-200 shadow-sm">

      <div className="navbar-start">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            ☰
          </div>

          <ul className="menu menu-sm space-y-3 dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">

            <li>
              <Link className={isActive("/")} href="/">
               <span className="flex gap-1 items-center">
            <FaHome/> Home
          </span>
              </Link>
            </li>

            <li>
              <Link className={isActive("/timeline")} href="/timeline">
                <span className="flex gap-1 items-center">
            <FaClock/> Timeline
          </span>
              </Link>
            </li>

            <li>
              <Link className={isActive("/stats")} href="/stats">
                <span className="flex gap-1 items-center">
            <FaChartPie/> Stats
          </span>
              </Link>
            </li>

          </ul>
        </div>

        <a className="btn btn-ghost text-xl">KeenKeeper</a>
      </div>

      <div className="navbar-end  hidden lg:flex">
        <ul className="menu space-x-4 menu-horizontal px-10">

          <li>
              <Link className={isActive("/")} href="/">
               <span className="flex gap-1 items-center">
            <FaHome/> Home
          </span>
              </Link>
            </li>

            <li>
              <Link className={isActive("/timeline")} href="/timeline">
                <span className="flex gap-1 items-center">
            <FaClock/> Timeline 
          </span>
              </Link>
            </li>

            <li>
              <Link className={isActive("/stats")} href="/stats">
                <span className="flex gap-1 items-center">
            <FaChartPie/> Stats
          </span>
              </Link>
            </li>
        </ul>
      </div>

    </div>
  );
};

export default Navbar;