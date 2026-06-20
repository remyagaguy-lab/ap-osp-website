"use client";

import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Briefcase, ClipboardList, MessageCircle, BookOpen, HeartHandshake } from "lucide-react";
import Link from "next/link";
import { SectionHeader } from "../SectionHeader";

const programs = [
  {
    icon: GraduationCap,
    title: "Éducation à l'orientation",
    description: "Ateliers pratiques sur la connaissance de soi, les filières et les secteurs d'avenir.",
    slug: "education-a-lorientation"
  },
  {
    icon: Briefcase,
    title: "Stages d'observation",
    description: "4 semaines en entreprise pour confronter les aspirations professionnelles à la réalité.",
    slug: "stages-observation"
  },
  {
    icon: ClipboardList,
    title: "Ateliers & tests psychométriques",
    description: "Tests de profil professionnel en petits groupes de 10 à 15 élèves.",
    slug: "ateliers-orientation"
  },
  {
    icon: MessageCircle,
    title: "Conseil d'aide en orientation",
    description: "Accompagnement individualisé sur plusieurs séances avec un conseiller psychologue.",
    slug: "conseil-aide-orientation"
  },
  {
    icon: BookOpen,
    title: "Formation des enseignants",
    description: "Psychopédagogie, gestion de la crise d'adolescence et prise en charge des difficultés.",
    slug: "formation-enseignants"
  },
  {
    icon: HeartHandshake,
    title: "Soutien aux apprentissages",
    description: "Diagnostic et plan d'intervention pour les élèves en difficulté scolaire.",
    slug: "prise-en-charge-apprentissage"
  }
];

export function ProgramsSection() {
  return (
    <section className="bg-bg py-20 lg:py-32">
      <div className="container-site">
        <SectionHeader 
          title="Nos Programmes" 
          subtitle="Six axes d'intervention pour accompagner chaque étape du parcours."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link 
                  href={`/programmes/${program.slug}`}
                  className="group block h-full bg-surface border border-border rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-accent-light rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />
                  
                  <div className="bg-accent/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 relative z-10 text-accent">
                    <Icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-xl font-display font-bold text-primary mb-3 relative z-10">
                    {program.title}
                  </h3>
                  
                  <p className="text-text-muted mb-6 relative z-10 min-h-[48px]">
                    {program.description}
                  </p>
                  
                  <div className="flex items-center text-accent font-semibold text-sm group-hover:text-accent-dark transition-colors relative z-10">
                    En savoir plus 
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
