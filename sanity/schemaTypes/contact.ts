export default {
  name: "contact",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Page Title",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
      }
    },
    {
      name: "slogan",
      type: "string",
      title: "Slogan",
    },
    {
      name: "contactText",
      type: "string",
      title: "Contact Text",
    },
    {
      name: "contactInfo",
      type: "array",
      title: "Contact Information",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              type: "string",
              title: "Title",
            },
            {
              name: "info",
              type: "string",
              title: "Info",
            },
            {
              name: "link",
              type: "string",
              title: "Link",
            },
          ],
        },
      ],
    },

  ]
}