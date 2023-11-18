"use client";
import Footer from "@/components/Footer";
import Head from "next/head";
import { PageTransition } from "@/components/PageTransition";
import { NavMenu } from "../headerTesting/NavMenu";
import React from "react";
import Breadcrumbs from "../breadcrumb/Breadcrumbs";


export const Container = (props) => {
  const { children, ...customMeta } = props;

 
  //   title: siteMetadata.title,
  //   description: siteMetadata.description,
  //   imageUrl: null,
  //   type: PageType.WEBSITE,
  //   twitterHandle: siteMetadata.twitterHandle,
  //   canonicalUrl: customMeta.sponsoredArticle
  //     ? customMeta.sponsoredUrl
  //     : `${siteMetadata.siteUrl}${router.asPath}`,
  //   date: null,
  //   isArticle: false,
  //   ...customMeta
  // };

  return (
    <div className={` min-h-full`}>
      {/* <Header /> */}
      <NavMenu />

      <main
        className={`flex flex-col mx-auto max-w-7xl justify-center px-4  prose prose-lg dark:prose-dark relative `}
      >
        <div className="z-10">
          <PageTransition>
             {/* <BreadcrumbComponent /> */}
             <Breadcrumbs />
            <div className="text-black dark:text-white text-xl mt-0 py-5">
             
               
            </div>
            {children}
          </PageTransition>
          <Footer />
        </div>
      </main>
    </div>
  );
};
