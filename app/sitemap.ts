export const dynamic = 'force-static';
import { MetadataRoute } from 'next'
import { getPosts } from '@/lib/sanity-queries'
import { programs } from '@/lib/data/programs'
import { projects } from '@/lib/data/projects'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://ap-osp.org'

  // Pages statiques
  const staticRoutes = [
    '',
    '/a-propos',
    '/programmes',
    '/blog',
    '/contact',
    '/mentions-legales',
    '/politique-confidentialite',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Programmes
  const programRoutes = programs.map((program) => ({
    url: `${baseUrl}/programmes/${program.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Projets
  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projets/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Articles de Blog (Sanity)
  const posts = await getPosts()
  const postRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug.current}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...programRoutes, ...projectRoutes, ...postRoutes]
}
