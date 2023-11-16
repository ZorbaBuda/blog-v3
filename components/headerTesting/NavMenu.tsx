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
import menu from './menu.json'
import { useRouter } from "next/router";
import {IoSearch } from 'react-icons/io5'
import React from "react";




export function NavMenu({}) {
  // distructuring the main menu from menu object
  const { main } = menu;

  // states declaration
  const [searchModal, setSearchModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  // Router
  // const router = useRouter();
  // const isActive = usePathname() === href;
  const isActive = usePathname()

  //stop scrolling when nav is open
  useEffect(() => {
    if (showMenu) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [showMenu]);
   
  


  //not part of Gekky
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
    <header className={`header ${visible ? 'top-0' : ''}`}>
         <nav className="navbar container px-1 sm:px-8">
        <div className="border-0">
          {/* <Logo /> */} LOGO_IMAGE
        </div>
        <div className="flex items-center justify-center space-x-4 xl:space-x-8">
          <div
            className={`collapse-menu ${
              !showMenu && "translate-x-full"
            } lg:flex lg:translate-x-0`}
          >
            <button
              className="absolute right-6 top-11 lg:hidden"
              onClick={() => setShowMenu(false)}
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                <title>Menu Close</title>
                <polygon
                  points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
                  transform="rotate(45 10 10)"
                />
              </svg>
            </button>
            <ul
              id="nav-menu"
              className="navbar-nav w-full md:w-auto md:space-x-1 lg:flex xl:space-x-2"
            >
              {main.map((menu, i) => (
                <React.Fragment key={`menu-${i}`}>
                  {menu.hasChildren ? (
                    <li className="nav-item nav-dropdown group relative">
                      <span
                        className={`nav-link ${
                          menu.children
                            .map((c) => c.url)
                            // .includes(router.asPath) && "active"
                        } inline-flex items-center`}
                      >
                        {menu.name}
                        <svg
                          className="h-4 w-4 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </span>
                      <ul className="nav-dropdown-list hidden transition-all duration-300 group-hover:top-[46px] group-hover:block md:invisible md:absolute md:top-[60px] md:block md:opacity-0 md:group-hover:visible md:group-hover:opacity-100">
                        {menu.children.map((child, i) => (
                          <li
                            className="nav-dropdown-item"
                            key={`children-${i}`}
                          >
                             <Link
                              href={child.url}
                              className={`nav-dropdown-link block `}
                            >
                              {child.name}
                            </Link>
                            {/* <Link
                              href={child.url}
                              className={`nav-dropdown-link block ${
                                router.asPath === child.url && "active"
                              }`}
                            >
                              {child.name}
                            </Link> */}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ) : (
                    <li className="nav-item">
                      <Link
                        href={menu.url}
                        className={`nav-link block `}
                      >
                        {menu.name}
                      </Link>
                      {/* <Link
                        href={menu.url}
                        className={`nav-link block ${
                          router.asPath === menu.url && "active"
                        }`}
                      >
                        {menu.name}
                      </Link> */}
                    </li>
                  )}
                </React.Fragment>
              ))}
            </ul>
            {/* header social */}
            {/* <Social source={socical} className="socials" /> */}
          </div>
          {/* <ThemeSwitcher /> */}
          {/* Header search */}
          <div
            className="search-icon"
            onClick={() => {
              setSearchModal(true);
            }}
          >
            <IoSearch />
          </div>
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white lg:hidden"
          >
            {showMenu ? (
              <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                <title>Menu Close</title>
                <polygon
                  points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
                  transform="rotate(45 10 10)"
                />
              </svg>
            ) : (
              <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                <title>Menu Open</title>
                <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z" />
              </svg>
            )}
          </button>
        </div>

        {/* <SearchModal
          searchModal={searchModal}
          setSearchModal={setSearchModal}
        /> */}
      </nav>
    </header>
   
  );
}
