import categoryData from '@/content/category-files.json'
import { Container } from '@/components/layouts/Container'
import BookResumeList from '@/components/articleListLayouts/BookResumeList'
import { allPosts } from '@/.contentlayer/generated'
import type { Post } from '@/.contentlayer/generated'
import { allCoreContent, sortPosts } from '@/lib/postsUtils'
import ScrollTop from '@/components/ScrollTop'
import { TbPointFilled } from 'react-icons/tb'

export default function Posts() {
  
const sortedPosts = allCoreContent(sortPosts(allPosts))
//TODO quitar documentos tipo Writing, que iran sólo a Blog

return (
<Container>
      <ScrollTop />

      <div className="flex items-center space-x-5">
            <div className="capitalize text-black dark:text-white font-libre_baskerville text-3xl ">
             Libros
             
            </div>
            <div className="text-[#FB5148] dark:text-[#FB5148]">
              <TbPointFilled />
            </div>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          
        <BookResumeList articles={sortedPosts} showEndMessage fullHeight />
      
  

    </Container>
)
 };