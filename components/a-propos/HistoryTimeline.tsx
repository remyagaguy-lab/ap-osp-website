"use client";

import { motion } from "framer-motion";

const historyData = [
  {
    year: "2019",
    title: "Création",
    description: "Création de l'AP-OSP par ses membres fondateurs.",
  },
  {
    year: "2020",
    title: "Officialisation",
    description: "Enregistrement officiel N° 383/MATDCL — Début des premières activités.",
  },
  {
    year: "2021",
    title: "Premiers impacts",
    description: "74 129 bénéficiaires · 18 émissions radio · 9 médias · 3 localités.",
  },
  {
    year: "2022",
    title: "Déploiement",
    description: "89 897 bénéficiaires · Formation SPES Lomé · 42 établissements.",
  },
  {
    year: "2023",
    title: "Reconnaissance",
    description: "103 131 bénéficiaires · Adhésion CNT/EPT · 5 localités · 46 établissements.",
  },
  {
    year: "2024",
    title: "Envergure Nationale",
    description: "Financement Ambassade USA · FESTICS Sokodé · Projet lutte extrémisme violent.",
  },
];

export function HistoryTimeline() {
  return (
    <section className="bg-surface py-20 lg:py-32 overflow-hidden">
      <div className="container-site max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-h2 md:text-[40px] font-display font-bold text-primary mb-4">
            Notre Histoire
          </h2>
          <div className="w-20 h-1.5 bg-accent rounded-full mx-auto" />
        </div>

        <div className="relative">
          {/* Vertical central line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-border -translate-x-1/2" />

          <div className="space-y-12">
            {historyData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-start md:items-center relative ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 w-5 h-5 bg-accent rounded-full border-4 border-surface shadow-sm -translate-x-1/2 mt-1.5 md:mt-0 z-10" />

                  {/* Content card */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${isEven ? "md:pl-12" : "md:pr-12 text-left md:text-right"}`}>
                    <div className="bg-bg border border-border rounded-2xl p-6 shadow-sm hover:shadow-card transition-shadow">
                      <span className="text-4xl font-display font-extrabold text-primary/10 block mb-2 -mt-2">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-display font-bold text-primary mb-2">
                        {item.year} — {item.title}
                      </h3>
                      <p className="text-text-muted">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
