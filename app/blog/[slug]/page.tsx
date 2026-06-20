import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPosts, getPostBySlug } from "@/lib/sanity-queries";
import { PageHero } from "@/components/PageHero";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await getPosts();
  if (!posts || posts.length === 0) {
    return [{ slug: "placeholder" }];
  }
  return posts.map((post) => ({
    slug: post.slug.current,
  }));
}

export const revalidate = 60; // Revalidate cache every 60 seconds

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: "Article non trouvé" };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <PageHero
        title={post.title}
        breadcrumbs={[
          { label: "Blog", href: "/blog" },
          { label: "Article" }
        ]}
      />

      <section className="bg-bg py-16 lg:py-24">
        <div className="container-site max-w-4xl">
          
          <Link href="/blog" className="inline-flex items-center text-sm font-medium text-text-muted hover:text-accent transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Retour au blog
          </Link>

          <article className="bg-surface border border-border rounded-3xl overflow-hidden shadow-sm">
            
            {post.coverImage?.asset?.url && (
              <div className="relative w-full h-[300px] md:h-[450px]">
                <Image 
                  src={post.coverImage.asset.url}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            <div className="p-8 md:p-12">
              <div className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b border-border">
                {post.category && (
                  <Badge 
                    variant="secondary" 
                    style={{ 
                      backgroundColor: `${post.category.color || '#F5A623'}20`,
                      color: post.category.color || '#F5A623'
                    }}
                  >
                    {post.category.title}
                  </Badge>
                )}
                
                <div className="flex items-center text-sm text-text-muted">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(post.publishedAt).toLocaleDateString("fr-TG", {
                    day: "numeric", month: "long", year: "numeric"
                  })}
                </div>
                
                <div className="flex items-center text-sm text-text-muted">
                  <Clock className="w-4 h-4 mr-2" />
                  {post.readingTime || 5} min de lecture
                </div>
              </div>

              {/* PortableText Content */}
              <div className="prose prose-lg prose-slate max-w-none 
                prose-headings:font-display prose-headings:font-bold prose-headings:text-primary 
                prose-a:text-accent hover:prose-a:text-accent-dark
                prose-img:rounded-xl prose-img:shadow-sm"
              >
                {post.body ? (
                  <PortableText value={post.body} />
                ) : (
                  <p>Contenu en cours de rédaction...</p>
                )}
              </div>

              {/* Author Section */}
              {post.author && (
                <div className="mt-16 pt-8 border-t border-border flex items-center bg-bg p-6 rounded-2xl">
                  {post.author.photo?.asset?.url ? (
                    <div className="w-16 h-16 rounded-full overflow-hidden relative shrink-0 mr-6">
                      <Image 
                        src={post.author.photo.asset.url}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mr-6">
                      <span className="font-bold text-primary text-xl">
                        {post.author.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  
                  <div>
                    <h4 className="font-display font-bold text-primary text-lg">
                      {post.author.name}
                    </h4>
                    {post.author.role && (
                      <p className="text-accent text-sm font-semibold mb-2">
                        {post.author.role}
                      </p>
                    )}
                    {post.author.bio && (
                      <p className="text-text-muted text-sm">
                        {post.author.bio}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
