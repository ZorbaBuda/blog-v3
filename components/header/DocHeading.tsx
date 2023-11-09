import { Post } from "@/.contentlayer/generated";
import React from "react";
import Image from "next/image";
import getFormattedDate from "@/lib/getFormattedDate";
import Category from "../Category";
import Tag from "../tags/CategoryTag";
import Prisoner from "@/public/hero-image.png";
import "@/components/ui/bgPatterns.css";
import { FaRegCalendarAlt } from "react-icons/fa";



export default function DocHeading( props ) {
  const { coverImage,  date, title, summary } = props;

  const pattern = "pattern16";

  const imageUrl = `${process.env.GITHUB_URL_IMAGES}${props.coverImage}`;
  // const formattedDate = getFormattedDate(date);

  return (
    <div
      className={` ${pattern}      
    h-max w-full  min-h-[597px] min-w-max flex justify-center items-center  
    
    
    `}
    >
       <div
            className=" mt-0 overflow-hidden rounded-md border-5
       shadow-xl    h-3/4     w-2/3
       backdrop-blur 
        "
          >
            <div
              className={`  card-zoom-image   w-full h-full   
         flex items-center justify-center  
         transition-all duration-1000 group-hover:scale-110 transform-cpu 
        
             `}
            >
              <Image
                className=" p-5  object-fill  h-[250px] w-[162px]
                        rounded-xl overflow-hidden 
                         
                          "
                alt={coverImage}
                src={imageUrl}
                width={324}
                height={500}
                loading="lazy"
              />
            </div>
          </div>
      
      {/* <Image
        className=" mt-10 justify-self-center   object-fill my-0 h-[375px] w-[243px]
               rounded-xl overflow-hidden
                "
        alt={coverImage}
        src={imageUrl}
        width={486}
        height={750}
        loading="lazy"
      /> */}
      {/* <div className="ml-0 w-full bg-slate-700 bg-opacity-50 backdrop-blur  justify-self-start  flex flex-col  ">
        <Tag text={props.category} />
      

        <div className="mt-3 font-libre_baskerville_bold  tracking-tight text-3xl  text-black dark:text-white">
          {title}
        </div>

        <div className="flex  mt-5 text-sm  uppercase dark:text-slate-400 text-black">
          <FaRegCalendarAlt />
          <div className="tracking-wider  ml-3 ">{formattedDate}</div>
        </div>
      </div> */}
    </div>

    //   <article className="col-span-12 mt-12">
    //   <div className="space-y-16">
    //     <div>
    //       <h1 className="mb-5 text-3xl text-center font-headings md:text-5xl">
    //         {post.title}
    //       </h1>
    //       <div className="text-center">
    //         <div className="flex items-center justify-center mb-2 space-x-2 text-base">
    //           <p className="m-0">{new Date(post.date).toISOString()}</p>
    //           <p className="m-0">|</p>

    //         </div>

    //       </div>
    //     </div>
    //     <div>
    //       <div
    //         className="aspect-video lg:aspect-[2/1]"
    //         style={{ position: 'relative', overflow: 'hidden' }}
    //       >
    //         <Image
    //           className=""
    //           width={354}
    //           height={539}
    //           src={immUrl}
    //           alt={'article cover'}
    //           priority
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </article>
  );
}
