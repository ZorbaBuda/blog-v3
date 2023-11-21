"use client";

import { humanize } from "@/lib/textConverter";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaHome } from "react-icons/fa";

const Breadcrumbs = ({ className }: { className?: string }) => {
  const pathname = usePathname();

  const paths = pathname.split("/").filter((x) => x);
  // const searchParams = useSearchParams()
  // const searchQuery= searchParams.get('s')
  //  console.log("search params:", searchQuery)
  
  let parts = [
    {
      label: "Home",
      href: "/",
      "aria-label": pathname === "/" ? "page" : undefined,
    },
  ];

  paths.forEach((label: string, i: number) => {
    const href = `/${paths.slice(0, i + 1).join("/")}`;
    label !== "page" &&
      parts.push({
        label: humanize(label.replace(/[-_]/g, " ")) || "",
        href,
        "aria-label": pathname === href ? "page" : undefined,
      });
  });

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <div className="py-5 inline-flex items-center list-none" role="">
       <div className="text-black dark:text-white flex items-center"> <FaHome /></div>
        {parts.map(({ label, ...attrs }, index) => (
         
          <li className="mx-1 capitalize flex items-center" role="listitem" key={index}>
            {index > 0 && <span className=" inline-block mr-1"><MdKeyboardArrowRight/></span>}
            {index !== parts.length - 1 ? (
              <Link
                className="hover:text-[#FB5148] dark:hover:text-[#FB5148]
                text-sm no-underline text-black dark:text-white "
                {...attrs}
              >
                {label}
              </Link>
            ) : (
              <span className="text-sm text-[#FB5148] dark:text-[#FB5148] ">
                {label}
              </span>
            )}
          </li>
        ))}
      </div>
    </nav>
  );
};

export default Breadcrumbs;
