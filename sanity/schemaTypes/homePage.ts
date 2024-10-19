export default {
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "bannerImages",
      title: "Banner Images",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "sectionText",
      title: "Section Text",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "smallTitle",
              title: "Small Title",
              type: "string",
            },
            {
              name: "richText",
              title: "Rich Text",
              type: "array",
              of: [{ type: "block" }],
            },
          ],
        },
      ],
    },
    {
      name: "aboutMe",
      title: "About Me",
      type: "object",
      fields: [
        {
          name: "smallTitle",
          title: "Small Title",
          type: "string",
        },
        {
          name: "richText",
          title: "Rich Text",
          type: "array",
          of: [{ type: "block" }],
        },
        {
          name: "lgEnglishTitle",
          title: "Large English Title",
          type: "string",
        },
        {
          name: "lgText",
          title: "Large Text",
          type: "array",
          of: [{ type: "block" }],
        },
        {
          name: "chineseTitle",
          title: "Chinese Title",
          type: "string",
        },
      ],
    },
    {
      name: "footer",
      title: "Footer",
      type: "object",
      fields: [
        {
          name: "smallTitle",
          title: "Small Title",
          type: "string",
        },
        {
          name: "title",
          title: "Title",
          type: "array",
          of: [{ type: "block" }],
        },
      ],
    },
  ],
};
