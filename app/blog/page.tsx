import { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { getPosts } from "@/lib/sanity-queries";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blog & Actualités",
  description: "Retrouvez les dernières actualités, conseils en orientation et événements de l'AP-OSP.",
};

export const revalidate = 60; // Revalidate cache every 60 seconds

export default async function BlogPage() {
  const posts = await getPosts();

  const featuredPost = posts.length > 0 ? posts[0] : null;
  const regularPosts = posts.length > 1 ? posts.slice(1) : [];

  return (
    <>
      <PageHero
        title="Blog & Actualités"
        description="Conseils, actualités de l'association et ressources pour l'orientation."
        breadcrumbs={[
          { label: "Blog" }
        ]}
      />

      <section className="bg-bg py-16 lg:py-24">
        <div className="container-site max-w-6xl">
          
          {posts.length === 0 ? (
            <div className="text-center py-20 bg-surface border border-border rounded-2xl">
              <h2 className="text-2xl font-display font-bold text-primary mb-4">
                Aucun article pour le moment
              </h2>
              <p className="text-text-muted">
                Les articles publiés via Sanity Studio apparaîtront ici.
              </p>
            </div>
          ) : (
            <>
              {/* Featured Post */}
              {featuredPost && (
                <div className="mb-16">
                  <h2 className="text-2xl font-display font-bold text-primary mb-8 border-b border-border pb-4">
                    À la une
                  </h2>
                  <Link 
                    href={`/blog/${featuredPost.slug.current}`}
                    className="group grid grid-cols-1 lg:grid-cols-2 gap-8 bg-surface border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-card transition-all"
                  >
                    <div className="relative h-64 lg:h-full min-h-[300px] bg-primary/5">
                      {featuredPost.coverImage?.asset?.url && (
                        <Image 
                          src={featuredPost.coverImage.asset.url}
                          alt={featuredPost.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      {featuredPost.category && (
                        <Badge 
                          variant="secondary" 
                          className="w-fit mb-4"
                          style={{ 
                            backgroundColor: `${featuredPost.category.color || '#F5A623'}20`,
                            color: featuredPost.category.color || '#F5A623'
                          }}
                        >
                          {featuredPost.category.title}
                        </Badge>
                      )}
                      
                      <h3 className="text-3xl font-display font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                        {featuredPost.title}
                      </h3>
                      
                      <p className="text-text-muted text-lg mb-6 line-clamp-3">
                        {featuredPost.excerpt}
                      </p>
                      
                      <div className="flex items-center text-sm text-text-muted mb-8 space-x-6">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {new Date(featuredPost.publishedAt).toLocaleDateString("fr-TG", {
                            day: "numeric", month: "long", year: "numeric"
                          })}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {featuredPost.readingTime || 5} min de lecture
                        </div>
                      </div>
                      
                      <div className="flex items-center text-accent font-semibold group-hover:text-accent-dark transition-colors mt-auto">
                        Lire l'article 
                        <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </div>
              )}

              {/* Regular Posts Grid */}
              {regularPosts.length > 0 && (
                <div>
                  <h2 className="text-2xl font-display font-bold text-primary mb-8 border-b border-border pb-4">
                    Tous les articles
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {regularPosts.map((post) => (
                      <Link 
                        key={post._id}
                        href={`/blog/${post.slug.current}`}
                        className="group flex flex-col bg-surface border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-card hover:-translate-y-1 transition-all"
                      >
                        <div className="relative h-48 bg-primary/5 overflow-hidden">
                          {post.coverImage?.asset?.url && (
                            <Image 
                              src={post.coverImage.asset.url}
                              alt={post.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          )}
                        </div>
                        
                        <div className="p-6 flex flex-col flex-1">
                          {post.category && (
                            <Badge 
                              variant="secondary" 
                              className="w-fit mb-4 text-xs"
                              style={{ 
                                backgroundColor: `${post.category.color || '#F5A623'}20`,
                                color: post.category.color || '#F5A623'
                              }}
                            >
                              {post.category.title}
                            </Badge>
                          )}
                          
                          <h3 className="text-xl font-display font-bold text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          
                          <p className="text-text-muted text-sm mb-6 line-clamp-3 flex-1">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between text-xs text-text-muted pt-4 border-t border-border">
                            <span className="flex items-center">
                              <Calendar className="w-3 h-3 mr-1" />
                              {new Date(post.publishedAt).toLocaleDateString("fr-TG")}
                            </span>
                            <span className="flex items-center font-medium text-accent">
                              Lire la suite <ArrowRight className="w-3 h-3 ml-1" />
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
