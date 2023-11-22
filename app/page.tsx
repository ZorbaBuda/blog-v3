import { allPosts } from "@/.contentlayer/generated";
import tagData from "@/lib/tag-data.json";
import AsideLayout from "@/components/AsideLayout";
import categoryData from "@/lib/category-files.json";
import { Container } from "@/components/layouts/Container";
import { Button } from "@/components/Button";
import ArticleList from "@/components/articleListLayouts/ArticleList";
import { sortPosts } from "@/lib/postsUtils";
import { TbPointFilled } from "react-icons/tb";
import searchPosts from "@/lib/searchPosts";
import { search } from "@/data/siteMetadata";
const MAX_DISPLAY = 5;

// export default function Home({
//   searchParams,
// }: {
//   searchParams: { [key: string]: string | string[] | undefined };
// }) {
//   const pageNumber= searchParams["p"] ?? "1"; // default value is "1"
//   return (<>Current page is: {pageNumber}</>);
// }


export default function Home() {

  if (!allPosts) {
    return <p className="mt-10 text-center">Sorry, no posts available.</p>;
  }

  const sortedPosts = sortPosts(allPosts);
 
  return (
    <Container>
      <div className="">
        <div>
          <div className="flex items-center space-x-5">
            <div className="text-black dark:text-white font-semibold font-gloock md:text-4xl text-3xl ">
              {" "}
              Últimos artículos
            </div>
            <div className="text-primary dark:text-primary">
              <TbPointFilled />
            </div>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>

          {/* <div className="relative space-x-5 flex py-5 items-center">
            <div className="flex-grow border-t border-gray-400"></div>
            <div className="text-[#FB5148] dark:text-[#FB5148]">
              <TbPointFilled />
            </div>
            <div className="text-black dark:text-white font-libre_baskerville text-3xl ">
              {" "}
              Últimos artículos
            </div>
           
            <div className="text-[#FB5148] dark:text-[#FB5148]">
              <TbPointFilled />
            </div>
            <div className="flex-grow border-t border-gray-400"></div>
          </div> */}

          <ArticleList articles={sortedPosts.slice(0, MAX_DISPLAY)} />
          <div className="flex justify-center my-16">
            <Button href={"/posts"}>Ver todos</Button>
          </div>
        </div>
          {/* <AsideLayout /> */}
      </div>
    
    </Container>
  );
}
