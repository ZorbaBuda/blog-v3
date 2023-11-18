
import { allPosts } from "@/.contentlayer/generated";
import tagData from "@/lib/tag-data.json";
import AsideLayout from "@/components/AsideLayout";
import categoryData from "@/lib/category-files.json";
import { Container } from "@/components/layouts/Container";
import { Button } from "@/components/Button";
import ArticleListTest from '@/components/articleListLayouts/ArticleList'
import { sortPosts } from "@/lib/postsUtils";
import { TbPointFilled } from "react-icons/tb";
const MAX_DISPLAY = 5;

export default function Home() {
  if (!allPosts) {
    return <p className="mt-10 text-center">Sorry, no posts available.</p>;
  }

  const sortedPosts = sortPosts(allPosts);
  //const allPostsCopy = structuredClone(allPosts)
  // allBookResumesCopy.splice(4)

  const tagCounts = tagData as Record<string, number>;
  const tagKeys = Object.keys(tagCounts);
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a]);
  const categoryKeys = Object.keys(categoryData);

  return (
    <Container>
      <div className="">
        <div>
          <div className="flex items-center space-x-5">
            <div className="text-black dark:text-white font-libre_baskerville text-3xl ">
              {" "}
              Últimos artículos
            </div>
            <div className="text-[#FB5148] dark:text-[#FB5148]">
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

          <ArticleListTest articles={sortedPosts.slice(0, MAX_DISPLAY)} />
          <div className="flex justify-center my-16">
            <Button href={"/posts"}>Ver todos</Button>
          </div>
        </div>
          {/* <AsideLayout /> */}
      </div>
    
    </Container>
  );
}
