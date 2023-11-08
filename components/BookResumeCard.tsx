import Image from "next/image";
import slugify from "slugify";
import { Post } from "@/.contentlayer/generated";
import getFormattedDate from "@/lib/getFormattedDate";
import Link from "next/link";
import { Accent } from "./ui/accent";
import GlowEffect from "./ui/GlowEffect";
import './ui/bgPatterns.css'
import { FaRegCalendarAlt} from 'react-icons/fa'
import { Button } from "./Button";
import Tag from '@/components/tags/Tag'

type Props = {
  post: Post,
  pattern: string
};

export function BookResumeCard({ post, pattern }: Props) {
  const { coverImage, slug, date, title, summary, tags, category } = post;

  const slug1 = slugify(title).toLowerCase();
  const formattedDate = getFormattedDate(date);
  const imageUrl = `${process.env.GITHUB_URL_IMAGES}${coverImage}`;
  // console.log(imageUrl)
  // const immUrl = `https://raw.githubusercontent.com/ZorbaBuda/blog-v3/main/public/${coverImage}`;

   const patternn = "pattern15"

  return (
    
   
  
    <div className="  group  xl:max-w-[920px] border-t-[1px] border-[#383A3C] pt-5 ">
        
     
        <div className="  flex flex-wrap-reverse justify-between">
          
          <div className=" mt-0 flex flex-col max-w-[560px] ">
            <Tag text={category} /> 
            {/* <Accent>{category}</Accent> */}

            <Link className="no-underline" href={`/document/${slug}`}>
            <div className="mt-3 font-libre_baskerville_bold  tracking-tight text-2xl  text-black dark:text-white">
              {title}
            </div>
            </Link>

            <div className="font-libre_baskerville dark:text-white text-lg text-black mt-3">
                Arthur Janov, 1973
              </div>

            <div className="dark:text-slate-400 text-black leading-normal  text-base mt-2 tracking-normal  ">
              {summary}
            </div>

            
             <div className="flex  mt-5 text-sm  uppercase dark:text-slate-400 text-black">
              <FaRegCalendarAlt />
              <div className="tracking-wider  ml-3 ">
                {formattedDate}
              </div>
            </div>
            <Button href={`/document/${slug}`}>READ MORE</Button>
            </div>

            <Link className="no-underline" href={`/document/${slug}`}>
            <div className='card-zoom   mt-0 overflow-hidden rounded-md border-5
       shadow-xl    h-[273px] w-[348px]  min-h-[273px] min-w-[348px]
        '>
           <div  className={` ${patternn} card-zoom-image   w-full h-full   
         flex items-center justify-center  
         transition-all duration-1000 group-hover:scale-110 transform-cpu 
        
             `}>
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
            </Link>
            
            {/* <Link className="no-underline" href={`/document/${slug}`}>
            <div  className={` ${pattern}  rounded-md border-5  object-cover 
             h-[273px] w-[348px]  min-h-[273px] min-w-[348px] flex items-center justify-center
             transform transition duration-500 group-hover:scale-95 overflow-hidden
             `}>
              <Image
                        className="   object-fill my-0 h-[250px] w-[162px]
                        rounded-md 
                        transform transition duration-500 group-hover:scale-110 
                          ease-in-out  "
                        alt={coverImage}
                        src={imageUrl}
                        width={324}
                        height={500}
                        loading="lazy"
                      />
            </div>
            </Link> */}
         
          
        </div>
    </div>
    
   
  );
}
