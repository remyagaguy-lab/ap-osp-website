export const dynamic = 'force-static';
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/studio/'], // On n'indexe pas le CMS
    },
    sitemap: 'https://ap-osp.org/sitemap.xml',
  }
}
