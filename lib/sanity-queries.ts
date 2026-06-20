import { client } from "@/sanity/lib/client";

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  publishedAt: string;
  readingTime: number;
  coverImage?: {
    asset: {
      url: string;
    }
  };
  author?: {
    name: string;
    photo?: {
      asset: {
        url: string;
      }
    };
    role?: string;
    bio?: string;
  };
  category?: {
    title: string;
    slug: { current: string };
    color?: string;
  };
  body?: any;
}

export async function getPosts(): Promise<Post[]> {
  try {
    return await client.fetch(`
      *[_type == "post"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        excerpt,
        publishedAt,
        readingTime,
        coverImage {
          asset->{
            url
          }
        },
        author-> {
          name,
          photo {
            asset->{
              url
            }
          }
        },
        category-> {
          title,
          slug,
          color
        }
      }
    `);
  } catch (error) {
    console.error("Error fetching posts", error);
    return []; // Return empty array on failure (e.g., project not configured or empty)
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    return await client.fetch(`
      *[_type == "post" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        excerpt,
        publishedAt,
        readingTime,
        body,
        coverImage {
          asset->{
            url
          }
        },
        author-> {
          name,
          role,
          bio,
          photo {
            asset->{
              url
            }
          }
        },
        category-> {
          title,
          slug,
          color
        }
      }
    `, { slug });
  } catch (error) {
    console.error("Error fetching post by slug", error);
    return null;
  }
}
