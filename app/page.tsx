import Image from "next/image";
import { allDocuments } from "@/.contentlayer/generated";
import createTagIndex from "@/lib/createTagIndex";
import createCategoryIndex from "@/lib/createCategoryIndex";
import { create } from "domain";
import tagData from "@/lib/tag-data.json";
import Link from "next/link";
import { slug } from "github-slugger";
import AsideLayout from "@/components/AsideLayout";
// import { motion } from "framer-motion";
import clsx from "clsx";
// import { setTransition, fadeInWhenVisible } from "@/lib/transition";
import { IoArrowDownOutline } from "react-icons/io5";
import categoryData from "@/lib/category-files.json";
import { ButtonType } from "@/lib/enums";

import GradientLayout from "@/components/GradientLayout";
import { Container } from "@/components/layouts/Container";
import { Button } from "@/components/Button";
import ArticleList from "@/components/ArticleList";
import WritingList from "@/components/WritingList";
import { Accent } from "@/components/ui/accent";
import Prisoner from '@/public/prisoner-of-pain.jpeg'
import './bgPatterns.css'

export default function Home() {
  if (!allDocuments) {
    return <p className="mt-10 text-center">Sorry, no posts available.</p>;
  }

  // const allBookResumesCopy = structuredClone(allBookResumes)
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
              I'm{" "}
              <span className="text-teal-500 dark:text-teal-400">Braydon</span>.
              I'm a developer, blogger and speaker working at LogicGate.
            </h1>
          </div>

        
            <div
                className="w-40 h-20 flex justify-center items-center text-sky-200 
                 rounded-lg  
                hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"
            >
                Neon container
            </div>
      


       



        </div>

        <hr className="hr  "></hr>

        <div>
          <h2>Resúmenes recientes de libros.</h2>

          <ArticleList articles={allDocuments} />
          <div className="my-16">
            <Button href={"/category/all"}>Ir a todos los resúmenes</Button>
          </div>
        </div>
        <hr className="hr"></hr>
      </div>
    </Container>
  );
}
