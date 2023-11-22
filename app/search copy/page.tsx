import config from "@/lib//config.json";
import Search from "@/components/layouts/Search";
import { getSinglePage } from "@/lib/contentParser";
import SeoMeta from "@/components/SeoMeta";
import { Post } from "@/.contentlayer/generated";
import { allPosts } from "@/.contentlayer/generated";

const { blog_folder } = config.settings;

// Retrieve all articles
// const posts: Post[] = getSinglePage(blog_folder);

// List of items to search in
const searchList = allPosts.map((item) => ({
  slug: item.slug!,
  // frontmatter: item.frontmatter,
  frontmatter: {
    title: item.title,
    categories: [item.category],
    tags: item.tags,
    image: item.coverImage,
    author: item.bookAuthor!,
    summary: item.summary,
  },
  content: item.body.raw,
}));

const SearchPage = () => {
  return (
    <>
      <SeoMeta title={"Search"} />
      <Search searchList={searchList} />
    </>
  );
};

export default SearchPage;
