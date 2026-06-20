"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "../SectionHeader";

const projects = [
  {
    title: "Lutte contre l'extrémisme violent par l'entrepreneuriat agricole",
    badge: "Financement international",
    badgeType: "orange",
    description: "Mise à contribution de coopératives de jeunes entrepreneurs dans les régions de la Kara et Centrale. 296 bénéficiaires directs.",
    href: "/projets/ambassade-usa-2024",
  },
  {
    title: "Coalition pour l'Éducation pour Tous",
    badge: "Partenariat national",
    badgeType: "green",
    description: "Membre actif de la CNT/EPT, l'AP-OSP participe aux ateliers et à la réflexion sur les politiques éducatives nationales.",
    href: "/projets/cnt-ept",
  }
];

export function ProjectsSection() {
  return (
    <section className="bg-bg py-20 lg:py-32">
      <div className="container-site">
        <SectionHeader 
          title="Projets en cours & récents" 
          subtitle="Des initiatives concrètes pour l'éducation et l'insertion au Togo."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link 
                href={project.href}
                className="flex flex-col h-full bg-surface border border-border rounded-2xl p-8 lg:p-10 shadow-card hover:shadow-card-hover transition-all duration-300 group"
              >
                <div className="mb-6">
                  <Badge 
                    variant="secondary" 
                    className={
                      project.badgeType === "orange" 
                        ? "bg-orange-50 text-orange-700 hover:bg-orange-100 border-orange-200"
                        : "bg-green-50 text-green-700 hover:bg-green-100 border-green-200"
                    }
                  >
                    {project.badge}
                  </Badge>
                </div>
                
                <h3 className="text-2xl font-display font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-text-muted mb-8 flex-1">
                  {project.description}
                </p>
                
                <div className="flex items-center text-primary font-semibold text-sm group-hover:text-accent transition-colors mt-auto">
                  Découvrir le projet 
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
