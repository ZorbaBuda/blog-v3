import Image from "next/image";
import slugify from "slugify";
import { Post } from "@/.contentlayer/generated";
import getFormattedDate from "@/lib/getFormattedDate";
import Link from "next/link";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Button } from "./ButtonCard";
import Category from "../tags/Category";
import { TbPointFilled } from "react-icons/tb";
import { BsFillTagsFill } from "react-icons/bs";
import Tag from "../tags/Tag";

type Props = {
  post: Post;
};

function ArticleCard({ post }: Props) {
  const { coverImage, slug, date, title, summary, tags, category } = post;

  const slug1 = slugify(title).toLowerCase();
  const formattedDate = getFormattedDate(date);
  const imageUrl = `${process.env.GITHUB_URL_IMAGES}${coverImage}`;
  // console.log(imageUrl)
  // const immUrl = `https://raw.githubusercontent.com/ZorbaBuda/blog-v3/main/public/${coverImage}`;

  //const patternn = post.pattern? post.pattern : "pattern13";
  //const patternn = "lavender-lumberjack";
  return (
    <div className="md:border-b md:border-b-slate-700">
    <div className="  group  p-5 md:pt-8 md:pb-14  border border-spacing-2 border-slate-700
    md:border-none   ">
      {/* <div className="  flex flex-wrap-reverse justify-between items-center"> */}
       {/* <div className="md:grid md:grid-cols-2 md:gap-20 flex flex-wrap-reverse justify-between items-center"> */}
       <div className="md:grid lg:grid-cols-3 md:grid-cols-2 md:gap-10 grid-cols-1 justify-between items-center">
      
         <Link
          className="md:order-last overflow-hidden no-underline mx-auto md:mx-auto lg:mx-0 flex justify-center items-center
           lg:h-[273px] lg:w-[348px]  md:h-[273px] md:w-[348px] sm:h-[273px] sm:container container h-[313px]
             bg-[#EEEEEE] dark:bg-[#252525] rounded-sm
          "
          href={`/${slug}`}
        >
        {category === 'writings' ? (
         
              <Image
                className=" mx-auto  object-cover 
               overflow-hidden w-full h-full
              transition-all duration-1000 group-hover:scale-110 
             
                "
                alt={coverImage}
                src={imageUrl}
                width={348}
                height={173}
                loading="lazy"
              />
        ):  (
         
          <Image
            className=" mx-auto  object-fill  h-[220px] w-[132px] 
          rounded-xl overflow-hidden
          transition-all duration-1000 group-hover:scale-110 
          border-4  border-black
            "
            alt={coverImage}
            src={imageUrl}
            width={324}
            height={500}
            loading="lazy"
          />
    )
          
  }
        </Link>
      
        <div className="lg:col-span-2 mt-3 md:mt-2  flex flex-col  max-w-none ">

          <div className="flex  items-center gap-2">
          <Category text={category} />
       
          <div className="text-[#FB5148]"><TbPointFilled /></div>
          <div className="flex items-center  text-sm  uppercase dark:text-white text-black gap-2">
            <FaRegCalendarAlt />
            <div className=" mt-1   ">{formattedDate}</div>
          </div>
         </div>

        
          <Link className="no-underline" href={`/${slug}`}>
            <div className="hover:underline mt-3 font-recoleta font-extrabold   tracking-wider lg:text-5xl text-3xl  text-black dark:text-white">
              {title}
            </div>
          </Link>

          <div className="font-recoleta font-bold dark:text-white text-2xl text-black mt-1">
            {" "}
            {post.bookAuthor ? post.bookAuthor : 'Anonymous'}
            {', '}
            {post.bookYear ? post.bookYear : 'No year'}
          </div>

          <div className="font-open_sans dark:text-white text-black leading-normal  text-base mt-2 tracking-normal  ">
            {" "}
            {summary}
          </div>

         

          <Button href={`/${slug}`}>Leer artículo</Button>
        </div>


     

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
