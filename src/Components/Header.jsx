import React from 'react'
import logo from './../assets/Images/Nivaran.png'
import { BsYoutube } from "react-icons/bs";

const Header = () => {
  return (
    <div className='flex justify-between items-center m-2'>
        <img src={logo} className='w-[180px]' />
        <ul className='flex gap-4 md:gap-14'>
            <li className='hover:font-bold cursor-pointer'>Home</li>
            <li className='hover:font-bold cursor-pointer'>About Us</li>
            <li className='hover:font-bold cursor-pointer'>COntact Us</li>
        </ul>
        <button className='p-2 bg-red-500 rounded-full text-white flex items-center '>Subscribe <BsYoutube className='ml-3 text-[20px]'/> </button>
    </div>
  )
}

export default Header