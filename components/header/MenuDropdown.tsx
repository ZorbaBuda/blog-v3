import React from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import Link from 'next/link';
import categoryData from '@/lib/category-files.json'

function NavItem({ href, text }) {
  
  return (
    <Menu.Item >
    <Link className="group no-underline text-black" href={href} passHref>
    <span
      className=" hover:text-[#FB5148] dark:hover:text-[#FB5148] text-black font-semibold dark:font-normal dark:text-white ml-4 mt-8 font-spartan text-sm  inline-block  capitalize"
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
      <Menu as="div" className="relative inline-block">
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
         
           
            <Menu.Items className=" visible   lg:hidden flex flex-col  
            font-spartan absolute dark:bg-black dark:text-white right-0 mt-2 w-full 
            md:w-80  sm:min-w-max origin-top-right   bg-white shadow-lg ring-1
             ring-black/5 focus:outline-none  border-[#383A3C] border-[1px] ">
               <Menu.Item >
    <Link className=" no-underline text-black divide-y-2 divide-gray-100" href={`/category/blog`} >
    <span
      className="text-black mt-8 inline-block font-semibold dark:font-normal 
      divide-y-2 divide-gray-100 dark:text-white ml-4  font-spartan text-sm   capitalize"
    >
      Blog
    </span>
  </Link>
  </Menu.Item>
          {categoryKeys.map((key, index) => (
            <NavItem key={index} text={key} href={`/category/${key}`} />
          ))}
          {/* todo mobile navigation */}
          <Menu.Item >
    <Link className="pb-10  no-underline text-black divide-y-2 divide-gray-100" href={`/about`} >
    <span
      className="text-black mt-12 inline-block font-semibold dark:font-normal 
      divide-y-2 divide-gray-100 dark:text-white ml-4  font-spartan text-sm   capitalize"
    >
      About
    </span>
  </Link>
  </Menu.Item>
         
        </Menu.Items>
            
     
              {/* </Menu.Item>
            </div> */}
         
        </Transition>
      </Menu>
    </div>
  )
}



