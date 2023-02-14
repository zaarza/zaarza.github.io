/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const refMenu = useRef(null);

  const toggleMenu = () => {
    navigate('/');
    refMenu.current.classList.toggle('top-[-999px]');
    refMenu.current.classList.toggle('top-full');
  };

  return (
    <nav className="bg-white sticky top-0 w-full  px-5 py-3 flex justify-end gap-x-2 z-50 max-w-7xl mx-auto">
      <button onClick={toggleMenu} type="button" className="md:hidden w-[44px] h-[44px] flex justify-center items-center group">
        <svg className="fill-slate-700 group-hover:fill-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
        </svg>
      </button>
      <ul ref={refMenu} className="md:static md:bg-none md:shadow-none md:flex-row md:justify-end gap-x-12 md:p-2 w-full bg-white absolute flex top-[-999px] border-gray-700 left-0 flex-col pl-10 gap-y-14 pb-5 transition-all -z-20 ease-in-out duration-300 shadow-sm">
        <a onClick={toggleMenu} className="hover:text-blue-500" href="#"><li>Profile</li></a>
        <a onClick={toggleMenu} className="hover:text-blue-500" href="#projects"><li>Projects</li></a>
        <a onClick={toggleMenu} className="hover:text-blue-500" href="#skills"><li>Skills</li></a>
      </ul>
    </nav>
  );
}

export default Navbar;
