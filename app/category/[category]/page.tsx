import siteMetadata from '@/data/siteMetadata'
//import ListLayout from '@/layouts/ListLayoutWithTags'
//import { genPageMetadata } from 'app/seo'
import { Metadata } from 'next'
import categoryData from '@/content/category-files.json'
import { Container } from '@/components/layouts/Container'
import BookResumeList from '@/components/articleListLayouts/PostsListGrid'
import { allPosts } from '@/.contentlayer/generated'
import type { Post } from '@/.contentlayer/generated'
import { allCoreContent, sortPosts } from '@/lib/postsUtils'
import ScrollTop from '@/components/ScrollTop'
import { TbPointFilled } from 'react-icons/tb'
import ArticleList from '@/components/articleListLayouts/ArticleList'


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

  const sortedCategoryPosts = allCoreContent(
    sortPosts(allPosts.filter((post) => post.category && post.category === category))
  )

  // console.log(sortedCategoryPosts[2])
  

 

  return (
    <Container>
      <ScrollTop />

      <div className="flex items-center space-x-5">
            <div className="capitalize text-black dark:text-white font-libre_baskerville text-3xl ">
              {category}
             
            </div>
            <div className="text-primary dark:text-primary">
              <TbPointFilled />
            </div>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          
        <ArticleList articles={sortedCategoryPosts} showEndMessage fullHeight />
  

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
 
