import Image from "next/image";
import slugify from "slugify";
import { Post } from "@/.contentlayer/generated";
import getFormattedDate from "@/lib/getFormattedDate";
import Link from "next/link";
import { Accent } from "../ui/accent";
import GlowEffect from "../ui/GlowEffect";
import "@/content/bgPatterns.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Button } from "../Button";
import CategoryTag from "@/components/tags/CategoryTag";
import Badge from "../tags/Badge";
import Category from "../tags/Category";

type Props = {
  post: Post;
  pattern: string;
};

function ArticleCard({ post, pattern }: Props) {
  const { coverImage, slug, date, title, summary, tags, category } = post;

  const slug1 = slugify(title).toLowerCase();
  const formattedDate = getFormattedDate(date);
  const imageUrl = `${process.env.GITHUB_URL_IMAGES}${coverImage}`;
  // console.log(imageUrl)
  // const immUrl = `https://raw.githubusercontent.com/ZorbaBuda/blog-v3/main/public/${coverImage}`;

  const patternn = post.pattern ? post.pattern : "pattern13";
  //const patternn = "pattern17";
  return (
    <div className="  group  xl:max-w-[920px] border-t-[1px] border-[#383A3C] pt-5  ">
      <div className="  flex flex-wrap-reverse justify-between 
      
      ">
        <div className=" mt-0 flex flex-col max-w-[560px] ">
          <Category text={category} />
          {/* <Accent>{category}</Accent> */}

          <Link className="no-underline" href={`/document/${slug}`}>
            <div className="hover:underline mt-3 font-libre_baskerville_bold  tracking-tight text-2xl  text-black dark:text-white">
              {title}
            </div>
          </Link>

          <div className="font-libre_baskerville dark:text-white text-lg text-black mt-3">
            {" "}
            Arthur Janov, 1973
          </div>

          <div className="dark:text-slate-400 text-black leading-normal  text-base mt-2 tracking-normal  ">
            {" "}
            {summary}
          </div>

          <div className="flex  mt-5 text-sm  uppercase dark:text-slate-400 text-black">
            <FaRegCalendarAlt />
            <div className="tracking-wider  ml-3 ">{formattedDate}</div>
          </div>

          <Button href={`/document/${slug}`}>READ MORE</Button>
        </div>

        {/* group-hover:shadow-[-13px_6px_32px_5px_#4a5568] */}
        <Link className=" no-underline mx-auto md:mx-auto lg:mx-0    " 
        href={`/document/${slug}`}>
        <div className="  flex items-center justify-center   ">
      
           <div className=" transform translate-x-3 translate-y-3  
              w-[250px] h-[350px]
              flex justify-between items-center 
              shadow-[-15px_20px_15px_5px_#86AEE5FB]
              dark:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]
              ">
              <Image
                className="  object-contain  h-max w-max  overflow-visible
               
                 
                "
                alt={"Logo"}
                src={imageUrl}
                width={374}
                height={500}
                loading="lazy"
              />
           
           </div>

         
     
      </div>
      </Link>
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
