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
import categoryData from '@/content/category-files.json'
import NavItem from "./NavItem";
import { BsChevronDown } from "react-icons/bs";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";


// function NavItem({ href, text }) {
  
//   const isActive = usePathname() === href;
//   console.log(usePathname().includes('category'))

//   return (
//     <Link className="group" href={href} passHref>
//     <span
//       className={`${
//         isActive
//           ? "font-bold text-[#FB5148] dark:text-[#FB5148]" : " text-black dark:text-white font-semibold dark:font-normal"
//       }  text-sm hidden md:inline-block  capitalize
//        hover:text-[#FB5148] dark:hover:text-[#FB5148] transition-all 
//        bg-left-bottom bg-gradient-to-r from-[#FB5148] to-[#FB5148] bg-[length:0%_4px] bg-no-repeat 
//        group-hover:bg-[length:100%_2px]  duration-300 ease-out  

//       `}
//     >
//       {text}
//     </span>
//   </Link>
//   );
// }

export function NavMenu({}) {
  const categoryKeys = Object.keys(categoryData)

  const [mounted, setMounted] = useState(false);
  let [isOpen, setIsOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  const [companyMenu, setCompanyMenu] = useState(false);
  const handleCompanyMenu = () => {
    setCompanyMenu(!companyMenu);
   
  };

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

  //setting isActive for Category dropdown
  const isCategoryDropdownActive = usePathname().includes('category')
  

  return (
    <div className={`border-y-[1px] font-spartan border-[#383A3C] sticky ${visible ? 'top-0' : ''} z-50 w-full
     text-gray-900 bg-[#EFF4FF]  dark:bg-[#121212] dark:text-white  `}>
     
      <div className="text-sm tracking-wider flex  items-center justify-between max-w-7xl px-4 py-7   mx-auto sm:px-6 ">
        
        {/* Left area */}
        <div className="  ">
          {/* <span className="sr-only">Profile Picture</span> */}
          <Link href="/" passHref>
            <div className="inline-flex min-w-fit font-libre_baskerville_bold">
              PRIMAL IDEAS
              {/* <Image
                alt="Braydon Coyer"
                height={38}
                width={38}
                src={DarkLogo}
                blurDataURL={DarkLogo}
                className="rounded-full"
              /> */}
            </div>
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
        <nav className="  px-20    mx-auto justify-center items-center font-spartan hidden lg:flex md:flex space-x-12  text-lg  ">
          <NavItem text={'blog'} href={`/category/writings`} />
          <NavItem text={'libros'} href={`/posts`} />
          {/* {categoryKeys.map((key, index) => (
            <NavItem key={index} text={key} href={`/category/${key}`} />
          ))} */}
            <li className="list-none relative"
             onMouseLeave={handleCompanyMenu}
            onMouseEnter={handleCompanyMenu}
            >
              <div className="flex items-center">
          <button
            type="button"
            className={`  flex  gap-2 icon-menu
            ${
              isCategoryDropdownActive
                ? "font-bold text-[#FB5148] dark:text-[#FB5148]" : " text-black dark:text-white font-semibold dark:font-normal"
            }  text-sm hidden md:inline-block  capitalize
            hover:text-[#FB5148] dark:hover:text-[#FB5148] transition-all 
            bg-left-bottom bg-gradient-to-r from-[#FB5148] to-[#FB5148] bg-[length:0%_4px] bg-no-repeat 
            hover:bg-[length:100%_2px]  duration-300 ease-out 
            `}
            aria-haspopup="true"
            aria-expanded={companyMenu}
            aria-controls="company-menu"
           
          >
            Categorías
           
          </button>
              {/* <BsChevronDown
              className="ml-2  h-4 w-4 text-black dark:text-white hover:text-violet-100"
              aria-hidden="true"
            /> */}
          </div>
          {/* START company sub-menu */}
          <ul
            id="company-menu"
            className={`lg:absolute md:absolute  lg:p-8 lg:top-5 md:top-5 md:p-8
             transition-[120px] duration-500 ease-out
             ${
              companyMenu
                ? "visible p-4 pb-0  "
                : "hidden"
            }   flex w-max flex-col gap-4 p-10 rounded-md leading-none lg:left-0  bg-white  dark:bg-black`}
          >
            
            {categoryKeys.map((key, index) => (
            <NavItem key={index} text={key} href={`/category/${key}`} />
          ))}
            {/* {[["History"], ["Our Team"], ["Blog"]].map(([text], index) => (
              <li key={`company-${index}`}>
                <a
                  href="#"
                  className={`${'transition duration-300 ease-in-out'} block hover:text-almost-black dark:hover:text-gray-400`}
                >
                  {text}
                </a>
              </li>
            ))} */}
            {/* END company Sub-menu */}
          </ul>
        </li>
           
             <NavItem text={'Acerca'} href={'/about'} />
      
          

      
         
        </nav>
        

        {/* right area */}
       
            <div className="flex justify-end items-center  ">
              
           <ThemeSwitch />
           {/* <ThemeSwitcher/> */}
           {/* <MobileNav /> */}
           
            
            </div>
      </div>
    </div>
  );
}
