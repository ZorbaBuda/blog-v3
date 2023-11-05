import Image from "next/image";
import slugify from "slugify";
import { DocumentTypes } from "@/.contentlayer/generated";
import getFormattedDate from "@/lib/getFormattedDate";
import Link from "next/link";
import { Accent } from "./ui/accent";
import GlowEffect from "./ui/GlowEffect";

type Props = {
  post: DocumentTypes;
};

export function BookResumeCard({ post }: Props) {
  const { coverImage, slug, date, title, summary, tags, category } = post;

  const slug1 = slugify(title).toLowerCase();
  const formattedDate = getFormattedDate(date);
  const imageUrl = `${process.env.GITHUB_URL_IMAGES}${coverImage}`;
  const immUrl = `https://raw.githubusercontent.com/ZorbaBuda/blog-v3/main/public/${coverImage}`;

  return (
    // <GlowEffect>
    <div className="antialiased  xl:max-w-[920px] border-t-[1px] border-[#383A3C] pt-5">
      <Link className="" href={`/document/${slug}`}>
        <div className=" flex ">
          <Image
            className=" object-cover my-0 h-[266px] w-auto
            rounded-md 
             transform transition duration-500 hover:scale-105 "
            alt={coverImage}
            src={immUrl}
            width={600}
            height={800}
            loading="lazy"
          />

          <div className="mt-0 flex flex-col ml-8">
            <Accent>{category}</Accent>

            <div className="font-extrabold tracking-tight text-xl  text-black dark:text-white">
              {title}
            </div>

            <div className="dark:text-slate-400 text-black leading-normal  text-base mt-2 tracking-normal  line-clamp-4">
              {summary}
            </div>

              <div className="font-extrabold dark:text-white text-xl text-black mt-4">
                Arthur Janov, 1973
              </div>

              <div className=" mt-5  text-base dark:text-slate-400 text-black">
                {formattedDate}
              </div>
            </div>
          
        </div>
      </Link>
    </div>
    // </GlowEffect>
  );
}
