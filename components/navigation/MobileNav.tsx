"use client"
import React, { useState } from 'react'
import SiteMenu from './SiteMenu';

const MobileNav = () => {

  const [isMenuOpen, setMenuOpen] = useState(false);

	// Function to toggle the menu state
	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};

  const closeMenu = () => {
		setMenuOpen(false);
	};


  return (
   <> 
   
      <div className=" w-screen fixed top-0 z-50 border-b border-orange-950 shadow-sm border-opacity-10 flex md:hidden navbar bg-yellow-50">
    <div className="flex-none">
      
    </div>
    <div className="flex-1">
          <a href="/"
            className="logov btn btn-ghost text-black text-xl">MinnaFinder</a>
    </div>
    <div className="flex-none">
    <button
          className="btn btn-square btn-ghost"
          onClick={() => {
            toggleMenu();
          }}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-7 h-7 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-7 h-7 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          )}
        </button>
    </div>
  </div>

      
				{isMenuOpen && (
				<SiteMenu closeMenu={closeMenu} />
			)}

  </>
  )
}

export default MobileNav