// import { convertToArticleList, getAllArticles } from '@/lib/notion';
import { allPosts } from '@/.contentlayer/generated';
import { Container } from '@/components/layouts/Container';
import { GetStaticProps } from 'next';
import Image from 'next/legacy/image';
import { TagList } from '@/components/TagList';
//import { handleArticleClicked } from '@/lib/handleArticleClick';
import slugify from 'slugify';
import Link from 'next/link';
import categoryData from '@/lib/category-files.json'
import BookResumeList from '@/components/BookResumeList';
import { redirect } from 'next/navigation';

export default function Category() {
  redirect('/category/all')

 };
