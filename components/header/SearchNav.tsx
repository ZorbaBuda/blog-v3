'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import headerNavLinks from '@/data/headerNavLinks'
import { IoSearch } from "react-icons/io5";
import { FaSearch } from 'react-icons/fa';

const SearchNav = () => {
  const [navShow, setNavShow] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null);
  const [inputVal, setInputVal] = useState("");

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputVal(e.currentTarget.value);
  };

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto'
      } else {
        // Prevent scrolling
        document.body.style.overflow = 'hidden'
      }
      return !status
    })
  }

  return (
    <>
      <button aria-label="Toggle Menu" onClick={onToggleNav} className="">
       <IoSearch />
      </button>
      <div
        className={`fixed left-0 top-0 z-10 h-full w-full transform opacity-95 dark:opacity-[0.98] bg-white duration-1000 ease-in-out dark:bg-gray-950 ${
          navShow ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex justify-end">
          <button className="mr-8 mt-11 h-8 w-8" aria-label="Toggle Menu" onClick={onToggleNav}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="text-gray-900 dark:text-gray-100"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-nowrap">
              <input
                className="form-input rounded-r-none"
                placeholder="Search posts"
                type="search"
                name="search"
                value={inputVal}
                onChange={handleChange}
                autoComplete="on"
                autoFocus
                ref={inputRef}
              />
              <button className=" mt-5 border-[1px] border-slate-400 rounded-sm text-sm 
      tracking-wider  dark:text-slate-400 text-dark flex px-6 py-3 uppercase
      hover:bg-[#f02b2b] hover:text-black group-dark:hover:text-black" type="submit">
                <FaSearch />
              </button>
            </div>
            <Link  onClick={onToggleNav} href={{ pathname: '/', query: { s: 'Janov' } }}>SearchUrl</Link>
            {/* <Link href={'/'}>ir</Link> */}
      </div>
    </>
  )
}

export default SearchNav
