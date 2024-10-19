export default {
  name: "works",
  title: "Works",
  type: "document",
  fieldsets: [
    {
      name: "banner",
      title: "Banner Section",
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      fieldset: "banner",
    },
    {
      name: "summary",
      title: "Summary",
      type: "array",
      of: [{ type: "block" }],
      fieldset: "banner",
    },
    {
      name: "tagline",
      title: "Tagline",
      type: "string",
      fieldset: "banner",
    },
    {
      name: "workImages",
      title: "Work Images",
      type: "array",
      of: [{ type: "image" }],
    },
  ],
};
