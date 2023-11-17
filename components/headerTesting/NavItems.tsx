import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import categoryData from '@/content/category-files.json'

 function NavItem({ href, text }) {
  
  const isActive = usePathname() === href;
  // console.log(usePathname().includes('category'))

  return (
    <Link className="group flex items-center" href={href} passHref>
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

function Items({href, text, index, hasChildren}) {
  const isActive = usePathname() === href;
  return (
    <React.Fragment key={`menu-${index}`}>
      {hasChildren ? (
        
    </React.Fragment>

  )
}

export default function NavItems() {
  const categoryKeys = Object.keys(categoryData)
  return (
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
  )
}
