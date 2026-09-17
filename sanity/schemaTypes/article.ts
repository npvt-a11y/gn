export const article = {
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 4,
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: ["Education", "Process", "Buying Guide", "Practical"],
      },
    },
    {
      name: "readTime",
      title: "Reading time",
      type: "string",
      description: "For example: 6 min",
    },
    {
      name: "publishedAt",
      title: "Publish date",
      type: "date",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "content",
      title: "Article sections",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "heading", title: "Section heading", type: "string" },
            {
              name: "paragraphs",
              title: "Paragraphs",
              type: "array",
              of: [{ type: "text" }],
            },
          ],
          preview: {
            select: { title: "heading" },
            prepare: ({ title }: { title?: string }) => ({
              title: title || "Untitled section",
            }),
          },
        },
      ],
    },
  ],
};
