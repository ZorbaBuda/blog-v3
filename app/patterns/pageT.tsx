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
//  import './hovers.scss'
 import Photo from '@/public/service-2.png'
//  import { FaCheck } from "react-icons/fa/index.js";
import { FaCheck } from "react-icons/fa";
import { markdownify } from "@/lib//textConverter";




export default function page() {

  const switcher = true

  const data = {
    title : "Discover the Key Features Of Next",
    "image" : "/images/service-2.png",
    content: "Next is an all-in-one web framework for building fast, content-focused websites. It offers a range of exciting features for developers and website creators. Some of the key features are:",
    bulletpoints: [
       "Zero JS, by default: No JavaScript runtime overhead to slow you down.",
       "Customizable: Tailwind, MDX, and 100+ other integrations to choose from.",
       "UI-agnostic: Supports React, Preact, Svelte, Vue, Solid, Lit and more."
    ],
      button  : {
        enable: true,
        label: "Get Started Now",
        link: "https://github.com/zeon-studio/nextplate"
      }
    }
  
  return (
  <>

       <section
          className={`py-16 xl:py-20 ${switcher && "bg-gradient"}`}
        >
          <div className="mx-auto max-w-[1320px] px-4">
            <div className="flex flex-wrap flex-shrink-0 items-center justify-between">
              <div
                className={`mb:md-0 mb-6 md:col-5 ${
                  switcher && "md:order-2"
                }`}
              >
                <Image
                  src={Photo}
                  height={480}
                  width={520}
                  alt={data.title}
                />
              </div>
              <div
                className={`md:col-7 lg:col-6 ${
                  switcher  && "md:order-1"
                }`}
              >
                <h2
                  className="mb-4"
                  dangerouslySetInnerHTML={markdownify(data.title)}
                />
                <p
                  className="mb-8 text-lg"
                  dangerouslySetInnerHTML={markdownify(data.content)}
                />
                <ul>
                  {data.bulletpoints.map((bullet: string) => (
                    <li className="relative mb-4 pl-6" key={bullet}>
                      <FaCheck className={"absolute left-0 top-1.5"} />
                      <span dangerouslySetInnerHTML={markdownify(bullet)} />
                    </li>
                  ))}
                </ul>
                {data.button.enable && (
                  <a
                    className="btn btn-primary mt-5"
                    href={data.button.link}
                  >
                    {data.button.label}
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
      <h1 className="mt-10">My favorite link hover styles</h1>
<section className="links">

  <a className="link wipe" href="#">wipe</a>
<a className="link underline" href="#">underline</a>
<a className="link opacity" href="#">opacity</a>
  
</section>


    </>
  );
}
