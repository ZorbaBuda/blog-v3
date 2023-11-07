import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
};

export const Button: React.FC<Props> = ({ href, children }) => {

  // https://codepen.io/ekaj2/pen/bGzwKoE
  return (
   
<Link className='no-underline' href={href}>
      <button
        aria-label="button"
        type="button"
        className="  mt-5 border-[1px] border-slate-400 rounded-sm text-sm 
      tracking-wider  dark:text-slate-400 text-black flex px-6 py-3 
      hover:bg-[#FB5148] hover:text-black dark:hover:text-black
      "
      >
        <div className="">
        {children}
        </div>
      </button>
   
   </Link>
  )
};
    {/* <button className="
     );
    group mt-5 relative py-3 px-5 text-sm
                 hover:bg-indigo-100
                 transition-all duration-100
                 text-indigo-50 hover:text-indigo-900
                   ">
       <!-- Right border --> 
      <span className="absolute top-0 bottom-0 right-0 w-0 border-r-2 h-0 border-slate-900
                   group-hover:h-full transition-all duration-500"></span>
      <!-- Left border --> 
      <span className="absolute bottom-0 left-0 w-0 border-l-2 h-0 border-slate-900
                   group-hover:h-full transition-all duration-500"></span>
       <!-- Top border --> 
      <span className="absolute top-0 right-0 w-0 border-t-2 h-0 border-slate-900
                   group-hover:w-full transition-all duration-500"></span>
     <!-- Bottom border --> 
      <span className="absolute bottom-0 left-0 w-0 border-b-2 h-0 border-slate-900
                   group-hover:w-full transition-all duration-500"></span>
      {children}
    </button> */}
 
 

 


