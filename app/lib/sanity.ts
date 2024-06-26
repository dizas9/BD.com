import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "h3q920gq",
  dataset: "production",
  apiVersion: "2022-03-25",
  token: process.env.SANITY_STUDIO_TOKEN,
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
