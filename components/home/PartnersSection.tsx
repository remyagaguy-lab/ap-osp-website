"use client";

import { motion } from "framer-motion";

import Image from "next/image";

const partners = [
  { name: "Ministère des Enseignements Primaires et Secondaires (Togo)", url: "https://education.gouv.tg/" },
  { name: "Speed", logo: "/partners/speed-logo-transparent.png", imgClass: "scale-[2.0]" },
  { name: "CNT/EPT", logo: "/partners/cnt-ept-logo.jpg", imgClass: "scale-[1.4]", url: "https://cnt-ept.org/" },
  { name: "Alafiakultur Média", logo: "/partners/alafiakultur-logo.png", imgClass: "scale-110", url: "https://www.alafiakultur.tg/" },
  { name: "SPES Lomé", url: "https://sites.google.com/site/spesworld/nos-orphelinats/orphelinat-a-lome" },
  { name: "SOS Villages d'enfants", logo: "/partners/sos-villages-logo.jpg", imgClass: "scale-[1.2]", url: "https://sos-togo.org/" },
];

export function PartnersSection() {
  return (
    <section className="bg-surface py-16 border-y border-border overflow-hidden">
      <div className="container-site">
        <h2 className="text-center text-text-muted font-medium mb-10 text-sm uppercase tracking-widest">
          Ils nous font confiance
        </h2>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 lg:gap-16 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="transition-all duration-300 text-center"
            >
              {partner.url ? (
                <a href={partner.url} target="_blank" rel="noopener noreferrer" className={`h-20 flex items-center justify-center px-4 md:px-6 transition-colors w-[180px] sm:w-[200px] md:w-[240px] hover:scale-105 cursor-pointer ${partner.logo ? "" : "bg-bg rounded-lg border border-border/50 text-sm font-semibold text-primary/60 hover:text-primary hover:border-primary/20"}`}>
                  {partner.logo ? (
                    <div className="relative w-full h-full p-2 flex items-center justify-center">
                      <Image src={partner.logo} alt={partner.name} fill className={`object-contain ${partner.imgClass || ""}`} />
                    </div>
                  ) : (
                    <span>{partner.name}</span>
                  )}
                </a>
              ) : (
                <div className={`h-20 flex items-center justify-center px-4 md:px-6 transition-colors w-[180px] sm:w-[200px] md:w-[240px] ${partner.logo ? "" : "bg-bg rounded-lg border border-border/50 text-sm font-semibold text-primary/60 hover:text-primary hover:border-primary/20"}`}>
                  {partner.logo ? (
                    <div className="relative w-full h-full p-2 flex items-center justify-center">
                      <Image src={partner.logo} alt={partner.name} fill className={`object-contain ${partner.imgClass || ""}`} />
                    </div>
                  ) : (
                    <span>{partner.name}</span>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
