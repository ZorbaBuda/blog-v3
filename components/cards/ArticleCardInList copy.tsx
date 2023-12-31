import Image from "next/image";
import slugify from "slugify";
import { Post } from "@/.contentlayer/generated";
import getFormattedDate from "@/lib/getFormattedDate";
import Link from "next/link";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Button } from "../Button";
import Category from "../tags/Category";

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
    <div className="  group  xl:max-w-[920px] pt-5  ">
      {/* <div className="  flex flex-wrap-reverse justify-between items-center"> */}
       {/* <div className="md:grid md:grid-cols-2 md:gap-20 flex flex-wrap-reverse justify-between items-center"> */}
       <div className="md:grid md:grid-cols-2 md:gap-20 grid-cols-1 justify-between items-center">
      
         <Link
          className="md:order-last overflow-hidden no-underline mx-auto md:mx-auto lg:mx-0 flex justify-between items-center
           lg:h-[273px] lg:w-[348px]  md:h-[273px] md:w-[348px] sm:h-[273px] sm:container container h-[313px]
             bg-[#EEEEEE] dark:bg-slate-400 rounded-sm
          "
          href={`/posts/${slug}`}
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
      
        <div className=" mt-7 md:mt-2  flex flex-col  max-w-none ">
          <Category text={category} />
          {/* <Accent>{category}</Accent> */}

          <Link className="no-underline" href={`/posts/${slug}`}>
            <div className="hover:underline mt-3 font-gloock   tracking-tight text-3xl  text-black dark:text-white">
              {title}
            </div>
          </Link>

          <div className="font-gloock dark:text-white text-xl text-black mt-3">
            {" "}
            {post.bookAuthor ? post.bookAuthor : 'Anonymous'}
            {', '}
            {post.bookYear ? post.bookYear : 'No year'}
          </div>

          <div className="font-open_sans dark:text-slate-400 text-black leading-normal  text-base mt-2 tracking-normal  ">
            {" "}
            {summary}
          </div>

          <div className="flex  mt-5 text-sm  uppercase dark:text-slate-400 text-black">
            <FaRegCalendarAlt />
            <div className="tracking-wider  ml-3 ">{formattedDate}</div>
          </div>

          <Button href={`/posts/${slug}`}>READ MORE</Button>
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
