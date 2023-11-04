import Footer from "@/components/Footer";
import Head from "next/head";
import { PageTransition } from "@/components/PageTransition";
import { NavMenu } from "../header/NavMenu";
import { ReactNode } from "react";

export const GlowEffect = ({
  children
}: {
  children: ReactNode;
}): JSX.Element => {
 
  return (


    <div className="relative group cursor-pointer">
    <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
    <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
      <div className="space-y-2">
       {children}
      </div>
    </div>
  </div>

    // <motion.div initial="initial" animate="enter" variants={variants}>
    //   {children}
    // </motion.div>
  );
};

export default GlowEffect
