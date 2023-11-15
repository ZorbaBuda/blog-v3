'use client'
import Link from 'next/link';
import React, { useState } from 'react'

export default function MenuDropdownTest() {

  const [isDropdownOpen, setIsDropdownOpen] = useState(true);

  return (
    <div>
        {/* <!-- toggler btn --> */}
    <button className="inline-flex items-center justify-center w-10 h-10 ml-auto text-white border rounded-md outline-none lg:hidden focus:outline-none"
        onClick={() => {
          setIsDropdownOpen(!isDropdownOpen);
        }}
     >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
     {/* <!-- toggler btn --> */}

     {/* <!-- dropdown --> */}
        <li className="relative list-none" x-data="{dropdownOpen:false}">
          <Link href="#" className="flex w-full px-4 py-2 font-medium text-white rounded-md outline-none focus:outline-none hover:bg-blue-800" 
           onClick={() => {
            setIsDropdownOpen(!isDropdownOpen);
          }}
          
          >
            Dropdown
          </Link>
           {/* <!-- dropdown menu --> */}
          <div className={`right-0 p-2 mt-1 bg-white rounded-md shadow lg:absolute
          ${!isDropdownOpen ? 'hidden' : 'flex flex-col' }
          `}

          // :className="{'hidden':!dropdownOpen,'flex flex-col':dropdownOpen}" 
          // @click.away="dropdownOpen = false"
          >
            <ul className="space-y-2 lg:w-48">
              <li>
                <a href="#" className="flex p-2 font-medium text-gray-600 rounded-md hover:bg-gray-100 hover:text-black">Categories</a>
              </li>
              <li>
                <a href="#" className="flex p-2 font-medium text-gray-600 rounded-md hover:bg-gray-100 hover:text-black">Inventories</a>
              </li>
              <li>
                <a href="#" className="flex p-2 font-medium text-gray-600 rounded-md hover:bg-gray-100 hover:text-black">Brands</a>
              </li>
            </ul>
          </div>
          {/* <!-- dropdown menu --> */}
        </li>
        {/* <!-- dropdown --> */}
        <li className='list-none'></li>
    </div>
  )
}
