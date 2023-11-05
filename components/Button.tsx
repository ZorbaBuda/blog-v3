import Link from 'next/link';
import { ReactNode } from 'react';

type Props = {
  href: string
  children: ReactNode
};

export const Button: React.FC<Props> = ({
  href,
  children
}) => {
  return (
    <Link
    href={href} >
    <button
      aria-label="button"
      type="button"
      className="mt-5 border-[1px] border-slate-400 rounded-sm text-sm 
      tracking-wider  dark:text-slate-400 text-black
      px-6 py-3
      "
       
    >
      {children}
      <svg
        className=" ml-2 -mr-1 stroke-2"
        fill="none"
         width="1"
         height="1"
        viewBox="0 0 10 10"
        aria-hidden="true"
      >
        <path
          className="transition opacity-0 group-hover:opacity-100"
          d="M0 5h7"
        ></path>
        <path
          className="transition group-hover:translate-x-[3px]"
          d="M1 1l4 4-4 4"
        ></path>
      </svg>
    </button>
    </Link>
  );
};
