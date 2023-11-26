/**
 * @type {import('tinacms').Collection}
 */
export default {
  label: "Posts",
  name: "post",
  path: "content/posts",
  format: "mdx",
  fields: [
    {
      type: "string",
      label: "title",
      name: "title",
    },
    {
      type: "string",
      label: "date",
      name: "date",
    },
    {
      label: 'tags',
      name: 'tags',
      type: 'string',
      list: true,
    },
    {
      type: "string",
      label: "category",
      name: "category",
    },
    {
      type: "string",
      label: "summary",
      name: "summary",
    },
    {
      type: "string",
      label: "bookAuthor",
      name: "bookAuthor",
    },
    {
      type: "string",
      label: "bookYear",
      name: "bookYear",
    },
    {
      type: "string",
      label: "coverImage",
      name: "coverImage",
    },
    {
      name: "body",
      label: "Main Content",
      type: "rich-text",
      isBody: true,
    },
  ],
  // ui: {
  //   router: ({ document }) => {
  //     return `/posts/${document._sys.filename}`;
  //   },
  // },
};
