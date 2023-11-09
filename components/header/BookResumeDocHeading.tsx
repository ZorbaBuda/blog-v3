import { Post } from "@/.contentlayer/generated";
import React from "react";
import Image from "next/image";
import getFormattedDate from "@/lib/getFormattedDate";
import Category from "../Category";
import  CategoryTag  from "../tags/CategoryTag";
import { FaRegCalendarAlt } from "react-icons/fa";

type Props = {
  post: Post;
};

export default function BookResumeDocHeading({ post }: Props) {
  const immUrl = `https://raw.githubusercontent.com/ZorbaBuda/blog-v3/main/public/${post.coverImage}`;
  const formattedDate = getFormattedDate(post.date);
  return (
    <article className="mx-auto antialiased flex text-white">
      <Image
        layout="intrinsic"
        className="rounded-md lg:ml-0 ml-3 object-cover my-0 w-[224px] h-[343px] lg:w-[354px] lg:h-[539px] md:w-[354px] md:h-[539px] "
        alt={immUrl}
        src={immUrl}
        width={354}
        height={539}
        loading="lazy"
      />

      <div className=" flex flex-col ml-8">
        {/* <div className=" text-sm">
          <div className=" flex flex-wrap ">
              <Category key={category} text={category} />
          </div>
        </div> */}

        {/* <div className=" mt-3 text-sm">
          <div className=" flex flex-wrap ">
            {tags.map((tag) => (
              <Tag key={tag} text={tag} />
            ))}
          </div>
        </div> */}
         <div className="lg:mt-0 mt-0">
          {" "}
          <CategoryTag text={post.category} />{" "}
        </div>
        <div className="flex  mt-5 text-sm  uppercase dark:text-slate-400 text-black">
            <FaRegCalendarAlt />
            <div className="tracking-wider  ml-3 ">{formattedDate}</div>
          </div>
     

        <div className="text-black dark:text-white lg:text-5xl text-3xl mt-5 font-semibold font-libre_baskerville">{post.title}</div>

        <div className="text-black dark:text-white lg:text-3xl text-xl mt-4 font-semibold font-libre_baskerville">Arthur Janov</div>
        <div className="text-black dark:text-white lg:mt-5 text-xl mt-2">Año de publicación: 1973</div>

        {/* <span className="mt-4 border-t-2 border-solid block w-10 border-slate-600"></span> */}

       
   
  
   </div>
    </article>

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
