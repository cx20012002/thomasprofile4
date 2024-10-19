export default {
  name: "about",
  type: "document",
  title: "About",
  fieldsets: [
    {
      name: 'twoColumns',
      title: 'Skills & Experience',
      options: { columns: 2 },
    },
  ],
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
      },
    },
    {
      name: "aboutText",
      type: "array",
      title: "About Text",
      of: [{ type: "string" }],
    },
    {
      name: "aboutImage",
      type: "array",
      title: "About Image",
      of: [{ type: "image" }],
    },
    {
      name: "skills",
      type: "object",
      title: "Skills",
      fieldset: 'twoColumns',
      fields: [
        {
          name: "title",
          type: "string",
          title: "Title",
        },
        {
          name: "value",
          type: "array",
          title: "Skills",
          of: [
            {
              type: "string",
              name: "content",
              title: "Skill",
            },
          ],
        },
      ],
    },
    {
      name: "experience",
      type: "object",
      title: "Experience",
      fieldset: 'twoColumns',
      fields: [
        {
          name: "title",
          type: "string",
          title: "Title",
        },
        {
          name: "value",
          type: "array",
          title: "Experience",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "content",
                  type: "string",
                  title: "Content",
                },
                {
                  name: "year",
                  type: "string",
                  title: "Year",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
