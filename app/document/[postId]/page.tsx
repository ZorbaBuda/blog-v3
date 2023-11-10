import * as React from "react";
import { allPosts } from "@/.contentlayer/generated";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import MDXComponents from "@/components/mdx-component";
import { ContainerPost } from "@/components/layouts/ContainerPost";
import { PageType } from "@/lib/enums";
import BookResumeDocHeading from "@/components/header/BookResumeDocHeading";
import TableOfContents from "@/components/TableOfContents";
import ScrollTop from "@/components/ScrollTop";
import WritingDocHeading from "@/components/header/WritingDocHeading";
import DocHeading from "@/components/header/DocHeading";
import Tag from "@/components/tags/Tag";
import { Container } from "@/components/layouts/Container";
import { BsFillTagsFill} from 'react-icons/bs'

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
      post={post._id}
      title={post.title}
      description={post.summary}
      coverImage={post.coverImage}
      date={new Date(post.date).toISOString()}
      category={post.category}
    >
      <ScrollTop />

 <BookResumeDocHeading post={post} />
     {/* <DocHeading post={post} /> */}


      <div className="grid justify-center grid-cols-1 lg:grid-cols-12 lg:gap-8">
        {post.toc && (
          <div className="mt-10 lg:col-start-1 lg:col-end-10">
            {post.toc.length > 0 && <TableOfContents source={post.body.raw} />}
          </div>
        )}

     

        <div className="lg:col-start-1 lg:col-end-10">
         

          <article
            className="mt-4 text-black dark:text-white font-alliance1  prose-headings:font-spartan 
          prose lg:prose-xl md:prose-lg sm:prose-base 
          prose-headings:text-slate-800 dark:prose-headings:text-white  
          max-w-none md:px-5 sm:px-5 lg:px-0 f dark:font-normal
          
          "
          >
            <MDXComponents code={post.body.code} />
          </article>
        </div>

        <article className="mt-10 flex flex-wrap text-black dark:text-white lg:col-start-1 lg:col-end-10">
          <div className="flex justify-between items-center">
            <BsFillTagsFill />
             <div className="ml-3">Etiquetas:</div>
          </div>
          
         <div className="ml-5">
          {post.tags.map((tag) => (
            <Tag key={tag} text={tag} />
          ))}
          </div>
        </article>
      </div>
    </Container>
  );
};

export default BlogDetails;
