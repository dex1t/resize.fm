import { z, defineCollection } from "astro:content";
const episodeCollection = defineCollection({
  type: "content",
  schema: z.object({
    src: z.string().url().optional(),
    title: z.string(),
    description: z.string(),
    date: z.string(),
    time: z.string(),
  }),
});
export const collections = {
  episode: episodeCollection,
};
