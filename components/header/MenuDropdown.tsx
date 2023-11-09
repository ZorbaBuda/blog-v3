import React from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import Link from 'next/link';
import categoryData from '@/lib/category-files.json'

function NavItem({ href, text }) {
  
  return (
    <Menu.Item>
    <Link className="group no-underline" href={href} passHref>
    <span
      className={`  text-sm hidden md:inline-block  capitalize
       hover:text-[#FB5148] dark:hover:text-[#FB5148] transition-all 
       bg-left-bottom bg-gradient-to-r from-[#FB5148] to-[#FB5148] bg-[length:0%_4px] bg-no-repeat 
       group-hover:bg-[length:100%_2px]  duration-300 ease-out  
      `}
    >
      {text}
    </span>
  </Link>
  </Menu.Item>
  );
}


export default function MenuDropdown() {
  const categoryKeys = Object.keys(categoryData)
  return (
    <div className="  ">
      <Menu as="div" className="">
        <div>
          <Menu.Button className="text-black inline-flex w-full justify-center   px-4 py-2 text-sm font-medium dark:text-white  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
            Menu
            <BsChevronDown
              className="ml-2 -mr-1 h-5 w-5 text-black dark:text-white hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
         
           
            <Menu.Items className=" flex flex-col  font-spartan absolute dark:bg-black dark:text-white right-0 mt-2 w-full md:w-56 lg:w-56 origin-top-right divide-y divide-gray-100  bg-white shadow-lg ring-1 ring-black/5 focus:outline-none ">
          {categoryKeys.map((key, index) => (
            <NavItem key={index} text={key} href={`/category/${key}`} />
          ))}
          {/* todo mobile navigation */}
         
        </Menu.Items>
            
     
              {/* </Menu.Item>
            </div> */}
         
        </Transition>
      </Menu>
    </div>
  )
}



