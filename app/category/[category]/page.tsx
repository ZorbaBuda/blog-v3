import siteMetadata from '@/data/siteMetadata'
//import ListLayout from '@/layouts/ListLayoutWithTags'
//import { genPageMetadata } from 'app/seo'
import { Metadata } from 'next'
import Link from 'next/link'
import Category from '@/components/Category'
import categoryData from '@/lib/category-files.json'
import { Container } from '@/components/layouts/Container'
import BookResumeList from '@/components/BookResumeList'
import { allPosts } from '@/.contentlayer/generated'
import type { Post } from '@/.contentlayer/generated'
import { Accent } from '@/components/ui/accent'
import { sortPosts } from '@/lib/postsUtils'
import ScrollTop from '@/components/ScrollTop'


// type CategoryParam = {
//   category: string;
// };

// interface CategoryProps {
//   params: CategoryParam;
// }

// async function getCategoryFromParams(params: CategoryParam) {
//   const category = params.category;
//   return category;
// }

// export async function generateMetadata({
//   params,
// }: CategoryProps): Promise<Metadata> {
//   const category = await getCategoryFromParams(params);

//   if (!category) {
//     return {};
//   }

//   return {
//     title: category,
//     description: category,
//   };
// }

export default function page({ params} : { params: { category: string }}) {

  const categoryKeys = Object.keys(categoryData)
  
  const categoryDocs : Post[] = []
  
  const category = decodeURI(params.category)
  

  allPosts.forEach((doc : Post) => {
    if(doc.category === category) {
      categoryDocs.push(doc)
    }
  })

  const sortedCategoryPosts = sortPosts(categoryDocs)
  const sortedInitialPosts= sortPosts(allPosts)
  // if(category !== "all"){
  // const categoryFiles = categoryData[category]
  // var filtered: Post[] = []
//   categoryFiles.forEach((t: string) => {
//     allPosts.forEach((p) => {
//       if(t === p.filePath){
//         filtered.push(p);
//         return
//       }
//     })
    
//   })
// }
  return (
    <Container>
      <ScrollTop />
        <div className='flex justify-center'>
      
        <span className="  pb-10 mt-2  font-bold leading-10  md:text-4xl lg:text-5xl text-3xl">
          <Accent>Showing {category} categories</Accent>
        </span>
      </div>
      {category === "all" ?
       ( <BookResumeList articles={sortedInitialPosts} showEndMessage fullHeight />) :
       ( <BookResumeList articles={sortedCategoryPosts} showEndMessage fullHeight />)
  }

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
 
