import { defineDocumentType } from 'contentlayer/source-files'
 import { makeSource } from 'contentlayer/source-remote-files';
//import { makeSource } from 'contentlayer/source-files';
import { spawn } from 'node:child_process';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import  {extractTocHeadings } from './lib/remark-tok-headings'
//import createCategoryIndex from './lib/createCategoryIndex'


const BLOG_DIRECTORY = 'content';
const SYNC_INTERVAL = 1000 * 60;

export const About = defineDocumentType(() => ({
  name: 'About',
  filePathPattern: `about/**/*.mdx`,
  contentType: 'mdx',
  fields: {
      title: { type: 'string', required: true },
       categories: { type: 'list', of: { type: 'string' },required: true}
    },
  computedFields: {
      url: {
        type: 'string',
        resolve: (doc) => doc._raw.flattenedPath,
      },
      slug: {
        type: 'string',
        resolve: (doc) => doc._raw.sourceFileName.split('.')[0],
      },
      filePath: {
        type: 'string',
        resolve: (doc) => doc._raw.sourceFilePath,
      },
       toc: { type: 'string', resolve: (doc) => extractTocHeadings(doc.body.raw) },
    },

}))


export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `posts/**/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: { type: 'string', required: true },
        date: { type: 'date', required: true },
        tags: { type: 'list', of: { type: 'string' }, default: [] },
        category: { type: 'string', required: true},
       coverImage: { type: 'string', required: true },
        summary: { type: 'string' },
        bookAuthor: {type: 'string'},
        bookYear: {type:'string'},
        pattern: {type:'string'}
      },
    computedFields: {
        url: {
          type: 'string',
          resolve: (doc) => doc._raw.flattenedPath,
        },
        slug: {
          type: 'string',
          resolve: (doc) => doc._raw.sourceFileName.split('.')[0],
        },
        filePath: {
          type: 'string',
          resolve: (doc) => doc._raw.sourceFilePath,
        },
         toc: { type: 'string', resolve: (doc) => extractTocHeadings(doc.body.raw) },
      },

}))


const syncContentFromGit = async ({ contentDir, gitTag }) => {
  const startTime = Date.now();
  console.log(`Syncing content files from git (${gitTag}) to ${contentDir}`);
  console.log('\n')
  console.log(`"gitTag: " ${gitTag}`)  
 console.log(`"contentDir:" ${contentDir}`)

  const syncRun = async () => {
    const gitUrl = "https://github.com/ZorbaBuda/blog-v3.git";
    await runBashCommand(`
    
      if [ -d  "${contentDir}" ];
        then
          cd "${contentDir}"; 
          git pull;
          
        else
          git clone --depth 1 --single-branch ${gitUrl} ${contentDir};
      fi
    `);
  };

 

  let wasCancelled = false;
  let syncInterval;

  const syncLoop = async () => {
    console.log("Syncing content files from git");

    await syncRun();

    if (wasCancelled) return;

    syncInterval = setTimeout(syncLoop, 1000 * 60);
  };

  // Block until the first sync is done
  await syncLoop();

  return () => {
    wasCancelled = true;
    clearTimeout(syncInterval);
  };
};

  
  const runBashCommand = (command) =>
    new Promise((resolve, reject) => {
      const child = spawn(command, [], { shell: `${process.env.SHELL_GIT_BASH}` });
  
      const logMessages = [];
  
      child.stdout.setEncoding('utf8');
      child.stdout.on('data', (data) => {
        logMessages.push(data);
        process.stdout.write(data);
      });
  
      child.stderr.setEncoding('utf8');
      child.stderr.on('data', (data) => {
        logMessages.push(data);
        process.stderr.write(data);
      });
  
      child.on('close', function (code) {
        if (code === 0) {
          resolve(void 0);
        } else {
          const logStr = logMessages.join('\n');
          
          reject(
            new Error(`Command failed with exit code ${code}:\n\n${logStr}`)
          );
        }
      });
  });

export default makeSource((sourceKey = 'main') => ({ 
        syncFiles: (contentDir) =>
        syncContentFromGit({ contentDir, gitTag: sourceKey }),
        // contentDirPath: `blog-${sourceKey}`,
        contentDirPath: `content`,
        // contentDirInclude: [BLOG_DIRECTORY],
        documentTypes: [Post, About],
        disableImportAliasWarning: true,
        mdx: {
          cwd: process.cwd(),
          rehypePlugins: [
            rehypeSlug,
            [
              rehypeAutolinkHeadings,
              {
                properties: {
                  className: ["subheading-anchor"],
                  ariaLabel: "Link to section",
                },
              },
            ],
          ]
        },
         onSuccess: async (importData) => {
          //console.log("on success")
          //createCategoryIndex(importData)
         
          //const { allBlogs } = await importData()
        //   // console.log("hi")
          //createTagCount(allBlogs.length)
       }
       
    }
))
