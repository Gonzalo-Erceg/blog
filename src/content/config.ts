import { defineCollection,z } from "astro:content";


const blogCollection = defineCollection({
    type:"content",
    schema:z.object({
        title:z.string(),
        img:z.string(),
        published:z.string(),
        description:z.string()
    })
})



export const collections ={
    'blog':blogCollection
}