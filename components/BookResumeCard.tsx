import Image from "next/image";
import slugify from "slugify";
import { DocumentTypes } from "@/.contentlayer/generated";
import getFormattedDate from "@/lib/getFormattedDate";
import Link from "next/link";
import { Accent } from "./ui/accent";
import GlowEffect from "./ui/GlowEffect";
import './ui/bgPatterns.css'
import { FaRegCalendarAlt} from 'react-icons/fa'
import { Button } from "./Button";
import Tag from '@/components/tags/Tag'

type Props = {
  post: DocumentTypes;
};

export function BookResumeCard({ post }: Props) {
  const { coverImage, slug, date, title, summary, tags, category } = post;

  const slug1 = slugify(title).toLowerCase();
  const formattedDate = getFormattedDate(date);
  const imageUrl = `${process.env.GITHUB_URL_IMAGES}${coverImage}`;
  // console.log(imageUrl)
  // const immUrl = `https://raw.githubusercontent.com/ZorbaBuda/blog-v3/main/public/${coverImage}`;

  const pattern = "pattern4"

  return (
    // <GlowEffect>
    <div className=" group antialiased  xl:max-w-[920px] border-t-[1px] border-[#383A3C] pt-5">
      <Link className="" href={`/document/${slug}`}>
        <div className=" flex flex-wrap-reverse justify-between">
          

          <div className="mt-0 flex flex-col max-w-[560px] ">
            <Tag text={category} /> 
            {/* <Accent>{category}</Accent> */}

            <div className="mt-3 font-libre_baskerville_bold  tracking-tight text-2xl  text-black dark:text-white">
              {title}
            </div>

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
            <div  className={` ${pattern}  rounded-md border-5  object-cover 
             h-[273px] w-[348px]  min-h-[273px] min-w-[348px] flex items-center justify-center`}>
              <Image
                        className="   object-fill my-0 h-[250px] w-[162px]
                        rounded-md 
                        transform transition duration-500 hover:scale-110 
                          ease-in-out  "
                        alt={coverImage}
                        src={imageUrl}
                        width={324}
                        height={500}
                        loading="lazy"
                      />
            </div>
         
          
        </div>
      </Link>
    </div>
    // </GlowEffect>
  );
}
