"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const timelineData = [
  {
    year: "2021",
    stats: "74 129 bénéficiaires",
    details: "13 activités · 3 localités",
  },
  {
    year: "2022",
    stats: "89 897 bénéficiaires",
    details: "10 activités · 4 localités",
  },
  {
    year: "2023",
    stats: "103 131 bénéficiaires",
    details: "11 activités · 5 localités",
  },
  {
    year: "2024",
    stats: "3 nouvelles régions",
    details: "Financement Ambassade USA (6 622 544 FCFA)",
    highlight: true,
  },
];

export function ImpactTimeline() {
  return (
    <section className="bg-primary text-surface py-20 lg:py-32 overflow-hidden">
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-h2 md:text-[40px] font-display font-bold mb-4">
              4 ans de résultats concrets
            </h2>
            <p className="text-surface/80 text-lg">
              Une croissance constante de notre impact pour accompagner toujours plus de jeunes togolais.
            </p>
          </div>
          <Button asChild variant="outline" className="bg-transparent border-surface/30 text-surface hover:bg-surface hover:text-primary w-fit">
            <Link href="/programmes#rapports">
              Voir tous les rapports <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Horizontal line for desktop */}
          <div className="hidden lg:block absolute top-6 left-1/2 -translate-x-1/2 w-[calc(100%-25%)] h-0.5 bg-surface/20 z-0" />
          
          {/* Vertical line for mobile */}
          <div className="lg:hidden absolute top-0 bottom-0 left-6 w-0.5 bg-surface/20 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-6 relative z-10">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative pl-16 lg:pl-0 lg:text-center"
              >
                {/* Node marker */}
                <div className="absolute left-0 top-1 lg:relative lg:top-auto lg:mx-auto lg:mb-6 w-12 h-12 rounded-full bg-primary border-4 border-surface/20 flex items-center justify-center shadow-[0_0_0_4px_#0E2151]">
                  <div className={`w-4 h-4 rounded-full ${item.highlight ? 'bg-accent' : 'bg-surface'}`} />
                </div>
                
                <h3 className={`text-4xl font-display font-extrabold mb-2 ${item.highlight ? 'text-accent' : 'text-surface'}`}>
                  {item.year}
                </h3>
                <div className="font-semibold text-lg mb-1">{item.stats}</div>
                <div className="text-surface/70">{item.details}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
