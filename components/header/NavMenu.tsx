"use client";
import { useEffect, useState } from "react";

// import DarkLogo from 'public/bcoyerlogo_dark.svg';
// import { Dialog } from '@headlessui/react';
import Image from "next/image";
// import LightLogo from 'public/bcoyerlogo_white.svg';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import headerNavLinks from "@/data/headerNavLinks";
import MobileNav from "./MobileNav";
import ThemeSwitch from "../ThemeSwitch";
import SearchButton from "../SearchButton";
import categoryData from '@/lib/category-files.json'
import MenuDropdown from "./MenuDropdown";

function NavItem({ href, text }) {
  
  const isActive = usePathname() === href;

  return (
    <Link className="group" href={href} passHref>
    <span
      className={`${
        isActive
          ? "font-bold text-[#FB5148] dark:text-[#FB5148]" : " text-black dark:text-white font-semibold dark:font-normal"
      }  text-sm hidden md:inline-block  capitalize
       hover:text-[#FB5148] dark:hover:text-[#FB5148] transition-all 
       bg-left-bottom bg-gradient-to-r from-[#FB5148] to-[#FB5148] bg-[length:0%_4px] bg-no-repeat 
       group-hover:bg-[length:100%_2px]  duration-300 ease-out  

      `}
    >
      {text}
    </span>
  </Link>
  );
}

export function NavMenu({}) {
  const categoryKeys = Object.keys(categoryData)

  const [mounted, setMounted] = useState(false);
  let [isOpen, setIsOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // A flag to know when the page has mounted so the theme can be accessed
  useEffect(() => setMounted(true), []);

  //nabvar visible on scroll up
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className={`border-y-[1px] font-spartan border-[#383A3C] sticky ${visible ? 'top-0' : ''} z-50 w-full text-gray-900 bg-[#EFF4FF]  dark:bg-[#121212] dark:text-white  `}>
     
      <div className="text-sm tracking-wider flex items-center justify-between max-w-7xl px-4 py-7   mx-auto sm:px-6 md:space-x-10">
        
        {/* Left area */}
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <span className="sr-only">Profile Picture</span>
          <Link href="/" passHref>
            <span className="block font-libre_baskerville_bold">
              PRIMAL IDEAS
              {/* <Image
                alt="Braydon Coyer"
                height={38}
                width={38}
                src={DarkLogo}
                blurDataURL={DarkLogo}
                className="rounded-full"
              /> */}
            </span>
          </Link>
         
        </div>
        {/* <div className="-my-2 -mr-2 md:hidden" onClick={() => setIsOpen(true)}>
          <div className="bg-gray-200 dark:bg-midnight text-gray-600 dark:text-gray-300 rounded-full p-3.5 inline-flex items-center justify-center hover:text-gray-700 hover:bg-gray-300 cursor-pointer focus:outline-none general-ring-state">
            <span className="sr-only">Open menu</span>
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4.75 5.75H19.25"
              ></path>
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4.75 18.25H19.25"
              ></path>
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4.75 12H19.25"
              ></path>
            </svg>
          </div>
        </div> */}
       
       {/* Central area */}
        <nav className=" bg-slate-500  justify-between  font-spartan hidden space-x-8 text-lg md:flex mx-auto">
          <NavItem text={'blog'} href={`/category/blog`} />
          {categoryKeys.map((key, index) => (
            <NavItem key={index} text={key} href={`/category/${key}`} />
          ))}
        
             <NavItem text={'About'} href={'/about'} />
           
            
          

      
         
        </nav>
        

        {/* right area */}
       
            <div className="flex justify-between bg-slate-500">
           <ThemeSwitch />
            <MenuDropdown />
            </div>
      </div>
    </div>
  );
}
