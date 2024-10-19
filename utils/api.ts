import { client } from "@/sanity/lib/client";

export async function getHomeData() {
  const data = await client.fetch(`
    *[_type == "homePage"][0]{
    bannerImages, 
    sectionText, 
    cardImages,
    aboutMe,
    footer
    }
    `);
  return data;
}

export async function getSelectedWorks() {
  const data = await client.fetch(`
    *[_type == "works"] | order(_createdAt asc){
      title,
      tagline,
      workImages,
      slug
    }
    `);
  return data;
}

export async function getSingleWork(slug: string) {
  const data = await client.fetch(
    `
    *[_type == "works" && slug.current == $slug][0]{
      title,
      tagline,
      workImages,
      summary,
    }
    `,
    { slug },
  );
  return data;
}
