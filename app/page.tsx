import Image from "next/image";
import { allPosts } from "@/.contentlayer/generated";
import tagData from "@/lib/tag-data.json";
import AsideLayout from "@/components/AsideLayout";
import categoryData from "@/lib/category-files.json";
import { Container } from "@/components/layouts/Container";
import { Button } from "@/components/Button";
import ArticleList from "@/components/articleListLayouts/ArticleList";
import { Accent } from "@/components/ui/accent";
import './bgPatterns.css'
import { sortPosts } from '@/lib/postsUtils'

const MAX_DISPLAY = 5

export default function Home() {
  if (!allPosts) {
    return <p className="mt-10 text-center">Sorry, no posts available.</p>;
  }

  const sortedPosts = sortPosts(allPosts)
   //const allPostsCopy = structuredClone(allPosts)
  // allBookResumesCopy.splice(4)

  const tagCounts = tagData as Record<string, number>;
  const tagKeys = Object.keys(tagCounts);
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a]);
  const categoryKeys = Object.keys(categoryData);

  return (
    <Container>
      <div>
        <div>
          <div className="grid items-center grid-cols-1 mt-12 text-center md:mt-12 md:text-left md:grid-cols-6">
            <h1 className="order-2 col-span-5 text-4xl leading-tight md:leading-normal md:order-1 sm:text-5xl">
            <Accent>Primal IDEAS</Accent>
            </h1>
          </div>

        </div>

       <hr className="hr  "></hr>

        <div>
        <div className=" font-libre_baskerville text-3xl pb-10">  <Accent >Últimos artículos</Accent></div>

          <ArticleList articles={sortedPosts.slice(0, MAX_DISPLAY)} />
          <div className="flex justify-center my-16">
            <Button href={"/category/all"}>Ver todos</Button>
          </div>
        </div>
       
      </div>
    </Container>
  );
}
