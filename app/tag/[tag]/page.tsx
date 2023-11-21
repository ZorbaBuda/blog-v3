import { slug } from 'github-slugger'
//import { genPageMetadata } from 'app/seo'
import { Metadata } from 'next'
import Link from 'next/link'
import Tag from '@/components/tags/Tag'
import tagFiles from '@/lib/tag-files.json'
import { Container } from '@/components/layouts/Container'
import BookResumeList from '@/components/articleListLayouts/PostsListGrid'
import { allCoreContent, sortPosts } from '@/lib/postsUtils'
import { allPosts } from '@/.contentlayer/generated'
import ArticleList from '@/components/articleListLayouts/ArticleList'

export default function page({ params} : { params: { tag: string }}) {

  const tagKeys = Object.keys(tagFiles)
  
  const tag = decodeURI(params.tag)

  const sortedTagPosts = allCoreContent(
    sortPosts(allPosts.filter((post) => post.tags && post.tags.map((t) => slug(t)).includes(tag)))
  )

  return (
    <Container>
    <div className="mt-10 flex  flex-wrap">
    {tagKeys.length === 0 && 'No tags found.'}
    {tagKeys.map((t) => {
      return (
        <div key={t} className="mb-2 mr-5 mt-2">
          <Tag text={t} />
          <Link
            href={`/tags/${slug(t)}`}
            className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
            aria-label={`View posts tagged ${t}`}
          >   
          </Link>
        </div>
      )
    })}
  </div>
    <div>
      <div className='mt-10'>Browsing  {tag}  Tag   </div>
      {/* <ListLayout posts={tag!== "all" ? filtered  : allPosts} /> */}
    </div>
    <ArticleList articles={sortedTagPosts} showEndMessage fullHeight />
    </Container>
  )
}
