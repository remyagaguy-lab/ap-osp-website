"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="bg-accent py-20 lg:py-28 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent-dark rounded-full opacity-20 -mr-20 -mt-20 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-surface rounded-full opacity-20 -ml-20 -mb-20 blur-3xl" />
      
      <div className="container-site relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20% 0px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto flex flex-col items-center"
        >
          <h2 className="text-h2 md:text-[48px] font-display font-extrabold text-[#0E1117] mb-6 leading-tight">
            Rejoignez la mission AP-OSP
          </h2>
          
          <p className="text-lg md:text-xl text-[#0E1117]/80 mb-10 font-medium">
            Vous êtes une école, une entreprise, une institution ou un individu engagé ? 
            Contactez-nous pour explorer les opportunités de collaboration.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button asChild size="lg" className="bg-[#0E1117] hover:bg-[#0E1117]/80 text-surface rounded-full px-8 h-14 text-base font-semibold">
              <Link href="/contact">Nous contacter</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-[#0E1117]/30 text-[#0E1117] hover:bg-[#0E1117]/10 rounded-full px-8 h-14 text-base font-semibold">
              <Link href="/contact?tab=partenaire">Devenir partenaire</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
