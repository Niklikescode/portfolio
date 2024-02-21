export const post = {
  name: "social",
  title: "Social",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "Platform for Social Media",
      type: "string",
    }),

    defineField({
      name: "url",
      title: "Url",
      type: "url",
     
    }),
  ],
};
