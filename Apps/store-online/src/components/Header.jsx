import React, { useState } from 'react';
import { RiShoppingCart2Line, RiHeart3Line, RiMenu2Line, RiCloseLine } from 'react-icons/ri';

const Header = () => {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className='h-[7vh] lg:h-[10vh] text-gray-400 py-4 px-10 flex items-center justify-between z-40'>

      {/* Responsive Button */}
      <button onClick={() => setShowMenu(!showMenu)} className='lg:hidden text-2xl'>
        <RiMenu2Line />
      </button>

      <div className={`fixed left-0 bg-[#181A20] w-full h-full z-50 transition-all ${showMenu ? "top-0" : "-top-full"}`}>

        <button onClick={() => setShowMenu(!showMenu)} className="text-3xl p-4">
          <RiCloseLine />
        </button>

        <ul className='mt-20'>
          <li>
            <a href='#' className='text-4xl block text-center p-4'>Home</a>
          </li>

          <li>
            <a href='#' className='text-4xl block text-center p-4'>Streams</a>
          </li>

          <li>
            <a href='#' className='text-4xl block text-center p-4'>Game Store</a>
          </li>

          <li>
            <a href='#' className='text-4xl block text-center p-4'>News</a>
          </li>
        </ul>
      </div>

      {/* MENU */}
      <ul className='hidden lg:flex items-center gap-6'>
        <li>
          <a href='#' className='hover:text-[#E58D27] trasition-colors'>Home</a>
        </li>

        <li>
          <a href='#' className='hover:text-[#E58D27] trasition-colors'>Streams</a>
        </li>

        <li>
          <a href='#' className='hover:text-[#E58D27] trasition-colors'>Game Store</a>
        </li>

        <li>
          <a href='#' className='hover:text-[#E58D27] trasition-colors'>News</a>
        </li>
      </ul>

      {/* USER MENU */}
      <ul className='flex items-center gap-6 text-xl'>
        <li>
          <button className='hover:text-[#E58D27] trasition-colors'><RiShoppingCart2Line /></button>
        </li>

        <li>
          <button className='hover:text-[#E58D27] trasition-colors'><RiHeart3Line /></button>
        </li>

        <li>
          <button><img src='https://netstorage-briefly.akamaized.net/images/f6da83a1fe492e57.jpg' className='w-8 h-8 object-cover rounded-full ring-2 ring-[#E58D27]' /></button>
        </li>
      </ul>
    </header>
  );
}

export default Header
