import NavbarItem from './NavbarItem';
import MobileMenu from './MobileMenu';
import AccountMenu from './AccountMenu';
import { useState,useCallback  } from 'react';
import { BsChevronDown } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BsBell } from "react-icons/bs";
import { getRandomImage } from '@/utils/randomImg';
const randomImage = getRandomImage()
const Navbar = () => {
  const [showMobileMenu, setShowMobile] = useState(false)
  const [showAccountMenu, setShowAccount] = useState(false)

  const toggleMobileMenu= useCallback(()=>{
    setShowMobile((current)=>!current)
  },[])

  const toggleAccountMenu= useCallback(()=>{
    setShowAccount((current)=>!current)
  },[])


  return (
    <nav className='w-full fixed z-40'>
      <div
        className='
        px-4
        md:px-16
        py-6
        flex
        flex-row
        items-center
        transition
        duration-500
        bg-zinc-900
        bg-opacity-90
        '
      >
        <img
          className='h-4 lg:h-8'
          src='/images/logo.png'
          alt='Red Netflix logo'
        />

        <div
          className='
        flex-row
        ml-8
        gap-8
        hidden
        lg:flex
        '
        >
          <NavbarItem label='Home' />
          <NavbarItem label='Series'/>
          <NavbarItem label='Films'/>
          <NavbarItem label='New & popular' />
          <NavbarItem label='My list' />
          <NavbarItem label='Browse by languages'/>
        </div>
        <div onClick={toggleMobileMenu} className='lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative'>
          <p className='text-white text-sm'>
            Browse
          </p>
          <BsChevronDown className={`text-white transition ${showMobileMenu ? "rotate-180" : "rotate-0"}`} />
          <MobileMenu visible={showMobileMenu}/>
        </div>
        <div className='flex flex-row ml-auto gap-7 items-center'>
          <div className='text-gray-200 hover:text-gray- cursor-pointer transition'>
              <BsSearch />
          </div>
          <div className='text-gray-200 hover:text-gray- cursor-pointer transition'>
            <BsBell />
          </div>
          <div onClick={toggleAccountMenu} className="flex flex-row items-center gap-2 curosr-pointer relative ">
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              <img src={randomImage} alt="netflix default image" />
            </div>
            
          <BsChevronDown className={`text-white transition ${showAccountMenu ? "rotate-180" : "rotate-0"}`} />
          <AccountMenu visible={showAccountMenu}/>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
