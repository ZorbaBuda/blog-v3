import { Container } from "@/components/layouts/Container";

import Image from "next/legacy/image";

import { allPosts, allAbouts } from "@/.contentlayer/generated";
import Logo from "@/public/moola-bandha-the-master-key.png";
import WritingList from "@/components/WritingList";
import MDXComponents from "@/components/mdx-component";
import { About } from "@/.contentlayer/generated";

export default function About() {
  return (
    <Container title="About Me - Braydon Coyer">
      <h1>
        <span className="block text-base font-semibold tracking-wide text-center text-indigo-500 uppercase dark:text-teal-400">
          About me
        </span>
        <span className="block max-w-2xl mx-auto mt-2 text-4xl font-bold leading-10 text-center sm:text-5xl">
          Here's my story.
        </span>
      </h1>
     
      <div>
        <div className="hidden md:block md:float-left">
          <Image
            className="md:mr-8"
            src={Logo}
            placeholder="blur"
            objectFit="cover"
            // blurDataURL="https://res.cloudinary.com/braydoncoyer/image/upload/v1670716662/family_photo_scs57f.jpg"
            width={340}
            height={448}
            alt={"article cover"}
          />
        </div>
       
       
      </div>
      <hr className="my-16 w-full border-none text-center h-10 before:content-['∿∿∿'] before:text-[#D1D5DB] before:text-2xl"></hr>
     
      <article className="mt-4 text-black dark:text-white font-alliance1  prose-headings:font-spartan 
          prose lg:prose-xl md:prose-lg sm:prose-base 
          prose-headings:text-slate-800 dark:prose-headings:text-white  
          max-w-none md:px-5 sm:px-5 lg:px-0
          
          ">
            <MDXComponents code={allAbouts[0].body.code} />
            {/* <Component
                  components={
                    {
                      ...MDXComponents,
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    } as any
                  }
                /> */}
          </article>
     
      <div className="mb-12">
        <h2>I love to share my knowledge through writing.</h2>
        <p>Check out a few of my most recent publishings.</p>
        <WritingList articles={allPosts} />
      </div>
      <hr className="my-16 w-full border-none text-center h-10 before:content-['∿∿∿'] before:text-[#D1D5DB] before:text-2xl"></hr>
    </Container>
  );
}
