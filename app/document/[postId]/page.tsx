import * as React from "react";
import { allPosts } from "@/.contentlayer/generated";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import MDXComponents from "@/components/mdx-component";
import { Container } from "@/components/layouts/Container";
import { PageType } from "@/lib/enums";
import BookResumeDocHeading from "@/components/header/BookResumeDocHeading";
import TableOfContents from "@/components/TableOfContents";
import ScrollTop from "@/components/ScrollTop";
import WritingDocHeading from "@/components/header/WritingDocHeading";
import DocHeading from "@/components/header/DocHeading";


type BlogParam = {
  postId: string;
};

interface BlogDetailsProps {
  params: BlogParam;
}

async function getPostFromParams(params: BlogParam) {
  const slug = params.postId;

  const post = allPosts.find((p) => p.slug === slug);

  if (!post) {
    return null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: BlogDetailsProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }


  return {
    title: post.title,
    description: post.summary,
  };
}

const BlogDetails: React.FC<BlogDetailsProps> = async ({ params }) => {
  // export default function SingleBlogPage(params: BlogParam) {
  //const Component = React.useMemo(() => getMDXComponent(code), [code]);
  const post = await getPostFromParams(params);

  console.log(post.type);
  // const isBookResume = post.type === "Writing" ? false : true;
  // console.log(isBookResume);

  if (!post) {
    notFound();
  }

  const immUrl = `https://raw.githubusercontent.com/ZorbaBuda/blog-v1/main/public/${post.coverImage}`;


  


  //#region  //*=========== Scrollspy ===========
  // const activeSection = useScrollSpy();
  // const [toc, setToc] = React.useState<HeadingScrollSpy>();
  // const minLevel =
  //   toc?.reduce((min, item) => (item.level < min ? item.level : min), 10) ?? 0;

  // React.useEffect(() => {
  //   const headings = document.querySelectorAll('.mdx h1, .mdx h2, .mdx h3');

  //   const headingArr: HeadingScrollSpy = [];
  //   headings.forEach((heading) => {
  //     const id = heading.id;
  //     const level = +heading.tagName.replace('H', '');
  //     const text = heading.textContent + '';

  //     headingArr.push({ id, level, text });
  //   });

  //   setToc(headingArr);
  // }, [frontmatter.slug]);
  //#endregion  //*======== Scrollspy ===========
  return (
    <Container
      title={post.title}
      description={post.summary}
      imageUrl={post.coverImage}
      date={new Date(post.date).toISOString()}
      type={PageType.ARTICLE}
      isArticle={true}
    >
       <ScrollTop />

       <DocHeading post={post} /> 
       
     {/* {post.type === "BookResume" && ( <BookResumeDocHeading post={post} /> )}
     {post.type === "Writing" && ( <WritingDocHeading post={post} /> )} */}

     

      <div className="grid justify-center grid-cols-1 lg:grid-cols-12 lg:gap-8">

      {post.toc && (
 <div className="mt-10 lg:col-start-1 lg:col-end-10">
        {post.toc.length > 0 && <TableOfContents source={post.body.raw} />}
      </div>)}

        {/* <div className="mt-10  w-full h-1 lg:col-start-10 lg:col-end-13 top-24 "> */}


        {/* <article className="col-span-12 mt-12">
          <div className="space-y-16">
            <div>
              <h1 className="mb-5 text-3xl text-center font-headings md:text-5xl">
                {post.title}
              </h1>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2 space-x-2 text-base">
                  <p className="m-0">{new Date(post.date).toISOString()}</p>
                  <p className="m-0">|</p>
                 
                </div>
              
              </div>
            </div>
            <div>
              <div
                className="aspect-video lg:aspect-[2/1]"
                style={{ position: 'relative', overflow: 'hidden' }}
              >
                <Image
                  className="rounded-3xl"
                  layout="fill"
                  sizes="100vw"
                  objectFit="cover"
                  src={immUrl}
                  alt={'article cover'}
                  priority
                />
              </div>
            </div>
          </div>
        </article> */}
        {/* Left Sticky */}

        <div className="lg:col-start-1 lg:col-end-10">
          <div className="mt-10 text-white text-xl">{post.summary}</div>
          {/* <div className="  ">
        {post.toc.length > 0 && (
               
                    <TableOfContents source={post.body.raw} />
                  
              )}
        </div> */}
          <article className="mt-4 text-black dark:text-white font-alliance1  prose-headings:font-spartan 
          prose lg:prose-xl md:prose-lg sm:prose-base 
          prose-headings:text-slate-800 dark:prose-headings:text-white  
          max-w-none md:px-5 sm:px-5 lg:px-0
          
          ">
            <MDXComponents code={post.body.code} />
            {/* <Component
                  components={
                    {
                      ...MDXComponents,
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    } as any
                  }
                /> */}
          </article>

          {/* Reactions on Mobile */}
          {/* <div className="text-center md:hidden grid-flow-auto">
            <Reactions slug={slug} />
          </div> */}

          {/* Link to sponsor if applicable */}
          {/* {sponsoredArticleUrl && (
            <Callout>
              <span>📣</span>
              <div>
                <span>
                  This article was originally published{' '}
                  <a
                    target="_blank"
                    href={sponsoredArticleUrl}
                    rel="noreferrer"
                  >
                    here
                  </a>
                  .
                </span>
              </div>
            </Callout>
          )} */}
        </div>

        {/* Right Sticky -> Reactions on Desktop */}
        {/* Height must be applied to extend height to length of article container */}
        {/* <div className="ml-10 sticky hidden w-full h-1 lg:col-start-10 lg:col-end-13 top-24 lg:block">
        {post.toc.length > 0 && (
               
                    <TableOfContents source={post.body.raw} />
                  
              )}
        </div> */}
        {/* <div className="col-span-12">
          <div className="mt-16 font-bold text-center">
            <p className="text-base">Share this article</p>
            <ShareArticle title={title} slug={slug} />
          </div>
        </div> */}
      </div>
    </Container>
  );
};

// <>
//   <main>
//     <section className="">
//       <div className="layout">
//         <PostHeader post={post} />

//         <hr className="dark:border-gray-600" />

//         <section className="lg:grid lg:grid-cols-[auto,250px] lg:gap-8">
//           <article className="text-white font-newsreader_light mdx leading-relaxed text-xl prose mx-auto mt-4 w-full transition-colors dark:prose-invert">
//             <MDXComponents code={post.body.code} />
{
  /* <Component
                  components={
                    {
                      ...MDXComponents,
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    } as any
                  }
                /> */
}
//   </article>
//   {post.toc.length > 0 && (
//     <aside className="py-4">
//       <div className="sticky top-36">
//         <TableOfContents source={post.body.raw} />
//       </div>
//     </aside>
//   )}
// </section>

{
  /* <div className='mt-8 flex flex-col items-start gap-4 md:flex-row-reverse md:justify-between'>
              <CustomLink href={GITHUB_EDIT_LINK}>
                Edit this on GitHub
              </CustomLink>
              <CustomLink href='/blog'>← Back to blog</CustomLink>
            </div> */
}
//       </div>
//     </section>
//   </main>
// </>

export default BlogDetails;
