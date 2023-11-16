'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

export default function NavItem({ href, text }) {
  
  const isActive = usePathname() === href;
  console.log(usePathname().includes('category'))

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
