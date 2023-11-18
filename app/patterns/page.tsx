"use client";
import React, { useEffect, useState } from "react";
import { Container } from "@/components/layouts/Container";
import { FaHome } from "react-icons/fa";
import { BsFillTagsFill } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import menu from './menu.json'
import social from './social.json'
import { useRouter } from "next/router";
 import './hovers.scss'

export default function page() {
 
  // distructuring the main menu from menu object
  const { main } = menu;

  // states declaration
  const [searchModal, setSearchModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  // Router
  //const router = useRouter();

  //stop scrolling when nav is open
  useEffect(() => {
    if (showMenu) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [showMenu]);
  
  
  return (
    <Container>
      <h1>My favorite link hover styles</h1>
<section className="links">

  <a className="link wipe" href="#">wipe</a>
<a className="link underline" href="#">underline</a>
<a className="link opacity" href="#">opacity</a>
  
</section>

    </Container>
  );
}
