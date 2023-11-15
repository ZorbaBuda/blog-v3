"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Children, Fragment, useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

import React from "react";

type breadcrumb = {
  href: string;
  label: string;
};

const BreadcrumbComponent = () => {
  const [breadcrumbs, setBreadcrumbs] = useState<breadcrumb[]>(null);
  const router = usePathname();

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
  // console.log("label ", breadcrumbs);
  return (
    <Breadcrumb>
      <BreadcrumbItem href="/">
        <div className="flex  items-center gap-x-2">
         
       <div className="mb-1"  >  <FaHome /></div> 
         
          <div className="">Primal Ideas</div>
        </div>
      </BreadcrumbItem>

      {breadcrumbs &&
        breadcrumbs.map((breadcrumb) => (
          <BreadcrumbItem key={breadcrumb.href} href={breadcrumb.href}>
            {breadcrumb.label}
          </BreadcrumbItem>
        ))}
    </Breadcrumb>
  );
};

const Breadcrumb = ({ children }) => {
  const childrenArray = Children.toArray(children);
  console.log(childrenArray);

  // console.log(childrenArray);

  const childrenWtihSeperator = childrenArray.map((child, index) => {
    if (index !== childrenArray.length - 1) {
      return (
        <Fragment key={index}>
          {child}
          {childrenArray.length > 1 && <MdKeyboardArrowRight />}
        </Fragment>
      );
    }
    return child;
  });

  return (
    <nav className=" flex   py-3 text-gray-700   ">
      <ol className=" list-none inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        {childrenWtihSeperator}
      </ol>
    </nav>
  );
};

const BreadcrumbItem = ({ children, href, ...props }) => {
  return (
    <li {...props} className="inline-flex items-center">
      <Link
        className=" hover:text-[#FB5148] dark:hover:text-[#FB5148]
       text-black dark:text-slate-500 capitalize text-sm no-underline 
       font-roboto "
        href={href}
        passHref
      >
        {children}
      </Link>
    </li>
  );
};

export default BreadcrumbComponent;
