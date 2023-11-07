import siteMetadata from '@/data/siteMetadata'
//import ListLayout from '@/layouts/ListLayoutWithTags'
//import { genPageMetadata } from 'app/seo'
import { Metadata } from 'next'
import Link from 'next/link'
import Category from '@/components/Category'
import categoryData from '@/lib/category-files.json'
import { Container } from '@/components/layouts/Container'
import BookResumeList from '@/components/BookResumeList'
import { allDocuments } from '@/.contentlayer/generated'
import type { DocumentTypes } from '@/.contentlayer/generated'


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
  
  const categoryDocs : DocumentTypes[] = []
  
  const category = decodeURI(params.category)
  

  allDocuments.forEach((doc : DocumentTypes) => {
    if(doc.category === category) {
      categoryDocs.push(doc)
    }
  })
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
        <div>
      
        <span className="block max-w-2xl mx-auto mt-2 text-4xl font-bold leading-10 text-center sm:text-5xl">
          Showing {category} categories
        </span>
      </div>
      {category === "all" ?
       ( <BookResumeList articles={allDocuments} showEndMessage fullHeight />) :
       ( <BookResumeList articles={categoryDocs} showEndMessage fullHeight />)
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
 
