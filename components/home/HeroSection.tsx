"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
    },
  };

  return (
    <section className="relative w-full min-h-[80vh] md:min-h-[90vh] bg-primary flex items-center overflow-hidden">
      {/* Background SVG pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxwYXRoIGQ9Ik01NC42MjcgMGwtMjUuMzMgNjBMNi43NjkgMEgzMS4zN3Y2MGgyMy4yNTdWMHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjE1IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+')] bg-repeat" />

      <div className="container-site relative z-10 flex flex-col items-center text-center pt-24 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center max-w-4xl"
        >
          <motion.div variants={itemVariants} className="mb-6 inline-flex">
            <span className="inline-flex items-center rounded-full bg-surface/10 px-4 py-1.5 text-sm font-medium text-surface/90 ring-1 ring-inset ring-surface/20">
              Orientation Scolaire & Professionnelle pour tous
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-h1 md:text-hero font-display font-bold text-surface mb-6"
          >
            Chaque jeune mérite une<br />
            <span className="text-accent">boussole</span> pour son avenir.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-surface/70 max-w-2xl mb-10 font-body"
          >
            L'AP-OSP est votre partenaire en orientation scolaire et professionnelle de la salle de classe jusqu'à l'insertion dans le monde du travail.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Button
              asChild
              size="lg"
              className="bg-surface text-primary hover:bg-surface/90 rounded-full font-semibold px-8 h-14 text-base"
            >
              <Link href="/programmes">
                Découvrir nos programmes
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent text-surface border-surface/30 hover:bg-surface/10 hover:text-surface rounded-full font-semibold px-8 h-14 text-base"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Nous soutenir <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
