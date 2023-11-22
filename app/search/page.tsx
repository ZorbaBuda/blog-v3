
import siteMetadata, { search } from '@/data/siteMetadata'
//import ListLayout from '@/layouts/ListLayoutWithTags'
//import { genPageMetadata } from 'app/seo'
import { Metadata } from 'next'
import categoryData from '@/content/category-files.json'
import { Container } from '@/components/layouts/Container'
import BookResumeList from '@/components/articleListLayouts/PostsListGrid'
import type { Post } from '@/.contentlayer/generated'
import { allCoreContent, sortPosts } from '@/lib/postsUtils'
import { TbPointFilled } from 'react-icons/tb'
import ArticleList from '@/components/articleListLayouts/ArticleList'
import { useSearchParams } from 'next/navigation'
import searchPosts from "@/lib/searchPosts";
import { useEffect, useState } from 'react'
import Search from '@/components/ui/Search'



export default function page( {
  searchParams,
}: {
  searchParams?: {
    s?: string;
    p?: string;
  };
}) {
  const query = searchParams?.s || '';
  //for use when pagination const currentPage = Number(searchParams?.page) || 1;
 
  const posts = searchPosts(query)
  //console.log("type of posts ", (posts[0]))
 
  return (
    <Container>
     

      <div className="flex items-center space-x-5">
            <div className="capitalize text-black dark:text-white font-libre_baskerville text-3xl ">
              {`Resultados para ${query}`}
             
            </div>
            <div className="text-primary dark:text-primary">
              <TbPointFilled />
            </div>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <Search />

         
          
         <ArticleList articles={posts} showEndMessage fullHeight />  
  

    </Container>
  )}
    {/* <div className="mt-10 flex  flex-wrap">
    {categoryKeys.length === 0 && 'No tags found.'}
    {categoryKeys.map((t) => {
      return (
        <div key={t} className="mb-2 mr-5 mt-2">
          <Category text={t} />
          <Link
            href={`/category/${t}`}
            className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
            aria-label={`View posts tagged ${t}`}
          >   
          </Link>
        </div>
      )
    })}
  </div>
    <div>
      <div className='mt-10'>Browsing  {category}  Category   </div>
    </div> */}
 
