'use client'
import { Container } from "@/components/layouts/Container";
import {  allAbouts } from "@/.contentlayer/generated";
import MDXComponents from "@/components/mdx-component";
import { About } from "@/.contentlayer/generated";
import Link from "next/link";
import React from "react";
import { TbPointFilled } from "react-icons/tb";

export default function About() {

 
  return (
    <Container title="About Me - Braydon Coyer">
      <div className="flex items-center space-x-5">
            <div className="text-black dark:text-white font-libre_baskerville text-3xl ">
              {" "}
              Acerca de
            </div>
            <div className="text-[#FB5148] dark:text-[#FB5148]">
              <TbPointFilled />
            </div>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>

     
     

      <article
        className="mt-10 text-black dark:text-white font-alliance1  prose-headings:font-spartan 
          prose lg:prose-xl md:prose-lg sm:prose-base 
          prose-headings:text-slate-800 dark:prose-headings:text-white  
          max-w-none md:px-5 sm:px-5 lg:px-0
          
          "
      >
        <MDXComponents code={allAbouts[0].body.code} />
        {/* <Component
                  components={
                    {
                      ...MDXComponents,
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    } as any
                  }
                /> */}
      </article>

      <Link href="/patterns" passHref>
        <span className="text-black dark:text-white text-3xl ml-3">
          PATTERNS
        </span>
      </Link>

    </Container>
  );
}
