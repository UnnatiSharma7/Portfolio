import React from 'react'
import logo2 from '../assets/unnati2.png'
import {NAVIGATION_LINKS} from '../constants'
import {useState} from "react";
import {FaTimes,FaBars} from 'react-icons/fa'


const Navbar = () => {
    const [mobileDrawerOpen,setMobileDrawerOpen]= useState(false);
    const toggleNavbar =()=>{
        setMobileDrawerOpen(!mobileDrawerOpen);
    };


    const handleLinkClick=(e,href)=>{
      e.preventDefault();
      const targetElement = document.querySelector(href);
      if(targetElement){
        const offset=-85;
        const elementPosition=targetElement.
        getBoundingClientRect().top;
        const offsetPosition=elementPosition+
        window.scrollY+offset;
        window.scrollTo({
          top:offsetPosition,
          behavior:"smooth",
        })
      }
      setMobileDrawerOpen(false);
    }
  return (
  <div>
    <nav
    className="fixed left-0 right-0 top-4 z-50 ">
    {/*Desktop Menu*/}
  <div className="mx-auto hidden max-w-2xl
  items-center justify-center rounded-lg
  border border-stone-50/30 bg-black/20
  py-3 backdrop-blur-lg lg:flex">
    <div className="flex items-center
    justify-between gap-6">

      <div>
        <ul className="flex 
        items-center gap-4">
          {NAVIGATION_LINKS.map((item,index)=>(
            <li key={index}>
              <a className="text-sm
              hover:text-yellow-400"
              href={item.href} 
              onClick={(e)=>
                handleLinkClick(e,item.href)}>
                  {item.label}
                </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
  {/* Mobile Menu*/}
  <div className="rounded-lg backdrop-blur-md lg:hidden">
    <div className='flex items-center justify-between'>
      <div>
        <a href="#">
          <img src={logo2} alt="logo"
          width={150}
          className="m-2 rounded-full"
          ></img>
        </a>
      </div>
      <div className="flex
      items-center">
        <button className="focus:outline-none
        lg:hidden" onClick={toggleNavbar}>
          {mobileDrawerOpen? (
            <FaTimes className="m-2 h-6 w-5"></FaTimes>
          ):(
            <FaBars className="m-2 h-6 w-5"></FaBars>
          )}
        </button>
      </div>
    </div>
    {mobileDrawerOpen && (
      <ul className="ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md">
        {NAVIGATION_LINKS.map((item,index)=>(
          <li key={index}>
            <a href={item.href}
            className="block w-full
            text-lg" onClick={(e)=>
              handleLinkClick(e,item.href)
            }
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    )}
  </div>
    </nav>
  </div>
  )
}

export default Navbar