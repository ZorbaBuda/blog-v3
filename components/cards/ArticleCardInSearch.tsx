import Image from "next/image";
import slugify from "slugify";
import { Post } from "@/.contentlayer/generated";
import getFormattedDate from "@/lib/getFormattedDate";
import Link from "next/link";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Button } from "../Button";
import Category from "../tags/Category";
import Tag from "../tags/Tag";

type Props = {
  post: SearchItem;
};

export type SearchItem = {
  slug: string;
  frontmatter: any;
  content: any;
};

function ArticleCard({ post }: Props) {
  const {  slug, frontmatter } = post;

  const slug1 = slugify(frontmatter.title).toLowerCase();
 
  return (
    <div className=" xl:max-w-[920px] pt-3  ">
    
        <div className=" flex flex-col   max-w-none ">
          <div className="flex flex-wrap gap-2">
          
          {/* <Category text={category} /> */}
          {post.frontmatter.tags.map((tag) => (
            <Tag key={tag} text={tag} />
          ))}
         </div>

          <Link className="no-underline" href={`/posts/${slug}`}>
            <div className="hover:underline mt-3 font-libre_baskerville_bold  tracking-tight text-2xl  text-black dark:text-white">
              {frontmatter.title}
            </div>
          </Link>

          <div className="font-libre_baskerville dark:text-white text-lg text-black mt-3">
            {" "}
            {frontmatter.bookAuthor ? frontmatter.bookAuthor : 'Anonymous'}
            {', '}
            {/* {post.bookYear ? post.bookYear : 'No year'} */}
          </div>

          <div className="dark:text-slate-400 text-black leading-normal  text-base mt-2 tracking-normal  ">
            {" "}
            {frontmatter.summary}
          </div>


        </div>
     </div>
    
  );
}

export default ArticleCard;

{
  /* <Link className="no-underline mx-auto md:mx-auto lg:mx-0 " href={`/document/${slug}`}>
<div
  className=" mt-0 overflow-hidden rounded-md border-5
shadow-xl    h-[273px] w-[348px]  max-h-[273px] max-w-[348px] p-
"
>
  <div
    className={` ${patternn} card-zoom-image   w-full h-full   
flex items-center justify-center  
transition-all duration-1000 group-hover:scale-110 transform-cpu 

   `}
  >
    <div className="flex items-center justify-center  h-[250px] w-[162px] backdrop:blur ">
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
</div>
</Link> */
}
