"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "../SectionHeader";

const blogPosts = [
  {
    title: "Comment bien choisir sa filière après le BEPC ?",
    category: "Orientation",
    date: "12 Juin 2025",
    readTime: "4 min",
    excerpt: "Le passage au lycée est une étape cruciale. Découvrez les critères essentiels pour faire le bon choix de série.",
    slug: "choisir-filiere-apres-bepc",
    badgeColor: "bg-blue-100 text-blue-800",
  },
  {
    title: "L'importance des stages d'observation pour les lycéens",
    category: "Emploi",
    date: "28 Mai 2025",
    readTime: "5 min",
    excerpt: "Pourquoi un mois en entreprise peut totalement changer la perception du monde professionnel chez un adolescent.",
    slug: "importance-stages-observation",
    badgeColor: "bg-green-100 text-green-800",
  },
  {
    title: "Accompagner son enfant dans ses choix scolaires",
    category: "Parents",
    date: "15 Mai 2025",
    readTime: "3 min",
    excerpt: "Conseils pratiques pour les parents qui souhaitent soutenir leurs enfants sans leur imposer de pression excessive.",
    slug: "accompagner-enfant-choix-scolaires",
    badgeColor: "bg-purple-100 text-purple-800",
  }
];

export function BlogPreview() {
  return (
    <section className="bg-bg py-20 lg:py-32">
      <div className="container-site">
        <SectionHeader 
          title="Ressources & Conseils" 
          subtitle="Articles sur l'orientation, la réussite scolaire et l'insertion professionnelle au Togo."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 mb-16">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link 
                href={`/blog/${post.slug}`}
                className="flex flex-col h-full bg-surface border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-card-hover transition-all duration-300 group"
              >
                {/* Placeholder Image */}
                <div className="h-48 bg-border/50 relative overflow-hidden flex items-center justify-center text-text-muted/40">
                  <span className="font-display">Image illustrative</span>
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors" />
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="secondary" className={`${post.badgeColor} border-none font-semibold hover:opacity-80`}>
                      {post.category}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-display font-bold text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-text-muted mb-6 flex-1 text-sm line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                    <div className="flex items-center text-xs text-text-muted gap-4">
                      <span className="flex items-center"><Calendar className="w-3.5 h-3.5 mr-1.5" />{post.date}</span>
                      <span className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1.5" />{post.readTime}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-primary group-hover:text-accent group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button asChild variant="outline" size="lg" className="border-primary/20 text-primary hover:bg-primary/5 rounded-full px-8">
            <Link href="/blog">Voir tous les articles</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
