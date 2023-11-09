import Footer from "@/components/Footer";
import Head from "next/head";
import { PageTransition } from "@/components/PageTransition";
import { NavMenu } from "../header/NavMenu";
import DocHeading from "../header/DocHeading";

export function ContainerPost(props) {
  const { children,  ...customMeta } = props;

  console.log(props.title)

  // const meta = {
  //   title: siteMetadata.title,
  //   description: siteMetadata.description,
  //   imageUrl: null,
  //   type: PageType.WEBSITE,
  //   twitterHandle: siteMetadata.twitterHandle,
  //   canonicalUrl: customMeta.sponsoredArticle
  //     ? customMeta.sponsoredUrl
  //     : `${siteMetadata.siteUrl}${router.asPath}`,
  //   date: null,
  //   isArticle: false,
  //   ...customMeta
  // };

  return (
    <div className={` min-h-full`}>
      {/* <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`${siteMetadata.siteUrl}${router.asPath}`}
        />
        <meta name="application-name" content="&nbsp;" />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta
          name="msapplication-TileImage"
          content="/assets/mstile-144x144.png"
        />
        <meta
          name="msapplication-square70x70logo"
          content="/assets/mstile-70x70.png"
        />
        <meta
          name="msapplication-square150x150logo"
          content="/assets/mstile-150x150.png"
        />
        <meta
          name="msapplication-wide310x150logo"
          content="/assets/mstile-310x150.png"
        />
        <meta
          name="msapplication-square310x310logo"
          content="/assets/mstile-310x310.png"
        />
        <link rel="canonical" href={meta.canonicalUrl} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Braydon Coyer" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta
          property="og:image"
          content={`${siteMetadata.siteUrl}/api/og?title=${encodeURIComponent(
            meta.title
          )}${meta.isArticle ? '&article' : ''}${
            meta.imageUrl ? `&imgSrc=${meta.imageUrl}` : ''
          }&description=${encodeURIComponent(meta.description)}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={meta.twitterHandle} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta
          name="twitter:image"
          content={`${siteMetadata.siteUrl}/api/og?title=${encodeURIComponent(
            meta.title
          )}${meta.isArticle ? '&article' : ''}${
            meta.imageUrl ? `&imgSrc=${meta.imageUrl}` : ''
          }&description=${encodeURIComponent(meta.description)}`}
        />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head> */}
      {/* <Header /> */}
      <NavMenu />
       <PageTransition>
      <DocHeading 
         title={props.title}
         summary={props.summary}
         coverImage={props.coverImage}
         date={new Date(props.date).toISOString()}
         category={props.category}  />
      <main
        className={`flex flex-col mx-auto max-w-7xl justify-center px-4  prose prose-lg dark:prose-dark relative pt-0`}
      >
        <div className="z-10">
         {children}
          <Footer />
        </div>
      </main>
      </PageTransition>
    </div>
  );
}
