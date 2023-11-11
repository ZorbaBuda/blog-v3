"use client";
import Footer from "@/components/Footer";
import Head from "next/head";
import { PageTransition } from "@/components/PageTransition";
import { NavMenu } from "../header/NavMenu";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import BreadcrumbItem from "../breadcrumb/BreadcrumbItem";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import React from "react";

type breadcrumb = {
  href: string,
  label: string
}

export const Container = (props) => {
  const { children, ...customMeta } = props;

  
  const [breadcrumbs, setBreadcrumbs] = useState<breadcrumb[]>(null);
  const router = usePathname()

  // https://github.com/marketsystems/nextjs13-appdir-breadcrumbs/blob/main/src/index.tsx
  useEffect(() => {
    const linkPath = router.split("/");
      linkPath.shift();

      const pathArray = linkPath.map((path, i) => {
        return {
          label: path,
          href: "/" + linkPath.slice(0, i + 1).join("/"),
        };
      });

      setBreadcrumbs(pathArray);
   
  }, [router]);

  // useEffect(() => {
  //   const pathWithoutQuery = usePathname().split("?")[0];
  //   let pathArray = pathWithoutQuery.split("/");
  //   pathArray.shift();

  //   pathArray = pathArray.filter((path) => path !== "");

  //   const breadcrumbs = pathArray.map((path, index) => {
  //     const href = "/" + pathArray.slice(0, index + 1).join("/");
  //     return {
  //       href,
  //       label: path.charAt(0).toUpperCase() + path.slice(1),
  //     };
  //   });

  //   setBreadcrumbs(breadcrumbs);
  // }, [usePathname]);

  // const meta = {
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
        className={`flex flex-col mx-auto max-w-7xl justify-center px-4  prose prose-lg dark:prose-dark relative pt-24`}
      >
        <div className="z-10">

          <PageTransition>
            <div className="text-black dark:text-white text-xl py-8">
            <Breadcrumb>
        <BreadcrumbItem href="/">Primal Ideas</BreadcrumbItem>
        {breadcrumbs &&
          breadcrumbs.map((breadcrumb) => (
            <BreadcrumbItem key={breadcrumb.href} href={breadcrumb.href}>
              {breadcrumb.label}
            </BreadcrumbItem>
          ))}
      </Breadcrumb>
            </div>
            {children}
          </PageTransition>
          <Footer />
        </div>
      </main>
    </div>
  );
}


