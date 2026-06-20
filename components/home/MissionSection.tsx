"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function MissionSection() {
  return (
    <section className="bg-bg py-20 lg:py-32">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20% 0px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start space-y-6"
          >
            <div className="inline-flex items-center rounded-full bg-accent-light px-4 py-1.5 text-sm font-semibold text-accent-dark">
              Notre raison d'être
            </div>
            <h2 className="text-h2 md:text-[40px] font-display font-bold text-primary leading-[1.2]">
              Combler le manque d'orientation scolaire et professionnelle au Togo
            </h2>
            <div className="w-20 h-1.5 bg-accent rounded-full" />
            
            <p className="text-lg text-text-muted leading-relaxed">
              Au Togo, trop de jeunes avancent sans repères dans leur parcours scolaire et professionnel. Faute d'accompagnement, des talents s'éteignent et des avenirs se ferment avant même d'avoir commencé.
            </p>
            <p className="text-lg text-text-muted leading-relaxed">
              L'AP-OSP est née pour changer cela. Depuis 2019, nous accompagnons élèves, étudiants et familles à travers des programmes concrets d'orientation, de conseil individualisé et de formation — pour que chaque togolais fasse des choix éclairés, à chaque étape de sa vie.
            </p>
            
            <div className="pt-4">
              <Button asChild className="bg-primary hover:bg-primary-light text-surface rounded-full px-8 h-12">
                <Link href="/a-propos" className="flex items-center gap-2">
                  En savoir plus sur l'association <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-20% 0px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-square shadow-2xl bg-border"
          >
            {/* Placeholder image in case there is no actual photo yet */}
            <div className="absolute inset-0 bg-primary/5 flex items-center justify-center">
              <span className="text-primary/20 font-display font-bold text-2xl">Image de terrain AP-OSP</span>
            </div>
            {/* We will add an actual Image tag here when the photo is provided */}
            <Image
              src="/mission-placeholder.jpg"
              alt="Jeunes en séance d'orientation"
              fill
              className="object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
