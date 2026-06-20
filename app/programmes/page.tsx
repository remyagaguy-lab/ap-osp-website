import { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { programs } from "@/lib/data/programs";
import Link from "next/link";
import { ArrowRight, MapPin, Download, CheckCircle2 } from "lucide-react";
import { ImpactChart } from "@/components/impact/ImpactChart";

export const metadata: Metadata = {
  title: "Nos Programmes",
  description: "Découvrez les 6 axes d'intervention de l'AP-OSP pour accompagner chaque jeune dans son parcours d'orientation et d'insertion professionnelle.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        title="Nos Programmes d'Intervention"
        description="De l'éducation à l'insertion — un accompagnement à chaque étape du parcours."
        breadcrumbs={[
          { label: "Programmes" }
        ]}
      />

      <section className="bg-bg py-20 lg:py-32">
        <div className="container-site">
          <SectionHeader 
            title="Notre approche globale" 
            subtitle="L'AP-OSP déploie un écosystème d'accompagnement complet pour les jeunes, leurs parents et le corps enseignant."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <Link 
                  key={program.slug}
                  href={`/programmes/${program.slug}`}
                  className="group flex flex-col h-full bg-surface border border-border rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-accent-light rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />
                  
                  <div className="bg-accent/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 relative z-10 text-accent">
                    <Icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-xl font-display font-bold text-primary mb-3 relative z-10">
                    {program.title}
                  </h3>
                  
                  <p className="text-text-muted mb-6 relative z-10 flex-1">
                    {program.shortDescription}
                  </p>
                  
                  <div className="flex items-center text-accent font-semibold text-sm group-hover:text-accent-dark transition-colors relative z-10 mt-auto">
                    Découvrir le programme 
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- SECTION IMPACT FUSIONNÉE --- */}
      <section id="impact" className="bg-surface py-20 lg:py-32 border-t border-border">
        <div className="container-site max-w-6xl">
          <SectionHeader 
            title="Évolution 2021-2023" 
            subtitle="La croissance constante de nos interventions auprès de la jeunesse togolaise."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16 items-center">
            {/* Chart */}
            <div className="bg-bg border border-border rounded-3xl p-6 shadow-sm">
              <h3 className="font-display font-bold text-primary text-xl mb-8 text-center">
                Croissance des bénéficiaires touchés
              </h3>
              <ImpactChart />
            </div>

            {/* Data Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-border/80 text-primary font-display font-bold text-lg">
                    <th className="py-4 px-4">Indicateur</th>
                    <th className="py-4 px-4 text-center">2021</th>
                    <th className="py-4 px-4 text-center">2022</th>
                    <th className="py-4 px-4 text-center">2023</th>
                  </tr>
                </thead>
                <tbody className="text-text-muted">
                  <tr className="border-b border-border/50 hover:bg-bg/50 transition-colors">
                    <td className="py-4 px-4 font-semibold text-primary">Bénéficiaires</td>
                    <td className="py-4 px-4 text-center font-bold">74 129</td>
                    <td className="py-4 px-4 text-center font-bold">89 897</td>
                    <td className="py-4 px-4 text-center font-bold text-accent">103 131</td>
                  </tr>
                  <tr className="border-b border-border/50 hover:bg-bg/50 transition-colors">
                    <td className="py-4 px-4">Activités réalisées</td>
                    <td className="py-4 px-4 text-center">13</td>
                    <td className="py-4 px-4 text-center">10</td>
                    <td className="py-4 px-4 text-center font-medium">11</td>
                  </tr>
                  <tr className="border-b border-border/50 hover:bg-bg/50 transition-colors">
                    <td className="py-4 px-4">Établissements</td>
                    <td className="py-4 px-4 text-center">39</td>
                    <td className="py-4 px-4 text-center">42</td>
                    <td className="py-4 px-4 text-center font-medium">46</td>
                  </tr>
                  <tr className="border-b border-border/50 hover:bg-bg/50 transition-colors">
                    <td className="py-4 px-4">Localités</td>
                    <td className="py-4 px-4 text-center">3</td>
                    <td className="py-4 px-4 text-center">4</td>
                    <td className="py-4 px-4 text-center font-medium">5</td>
                  </tr>
                  <tr className="border-b border-border/50 hover:bg-bg/50 transition-colors">
                    <td className="py-4 px-4">Émissions radio</td>
                    <td className="py-4 px-4 text-center">18</td>
                    <td className="py-4 px-4 text-center">12</td>
                    <td className="py-4 px-4 text-center font-medium">16</td>
                  </tr>
                  <tr className="border-b border-border/50 hover:bg-bg/50 transition-colors">
                    <td className="py-4 px-4">Intervenants</td>
                    <td className="py-4 px-4 text-center">21</td>
                    <td className="py-4 px-4 text-center">21</td>
                    <td className="py-4 px-4 text-center font-medium">25</td>
                  </tr>
                  <tr className="hover:bg-bg/50 transition-colors">
                    <td className="py-4 px-4">Entreprises partenaires</td>
                    <td className="py-4 px-4 text-center">14</td>
                    <td className="py-4 px-4 text-center">14</td>
                    <td className="py-4 px-4 text-center font-medium">14</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Zones & Témoignages */}
      <section className="bg-bg py-20 lg:py-32 border-t border-border">
        <div className="container-site max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Zones */}
            <div className="lg:col-span-4">
              <h3 className="text-2xl font-display font-bold text-primary mb-8 flex items-center">
                <MapPin className="w-6 h-6 mr-3 text-accent" />
                Zones d'intervention
              </h3>
              <ul className="space-y-4">
                {[
                  "Lomé (zone principale)",
                  "Sokodé",
                  "Atakpamé",
                  "Préfecture de Dankpen",
                  "Préfecture de Tchamba"
                ].map((zone, idx) => (
                  <li key={idx} className="flex items-center bg-surface border border-border p-4 rounded-xl shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                    <span className="font-medium text-text">{zone}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Testimonials placeholders */}
            <div className="lg:col-span-8">
              <h3 className="text-2xl font-display font-bold text-primary mb-8">
                Ils parlent de nous
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Array.from({ length: 3 }).map((_, idx) => (
                  <div key={idx} className="bg-surface border border-border p-6 rounded-2xl shadow-sm hover:shadow-card transition-shadow">
                    <p className="italic text-text-muted mb-6">
                      "Grâce à l'accompagnement de l'AP-OSP, j'ai pu identifier mes forces et choisir une filière qui me correspond vraiment. Le stage d'observation a été un déclic."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-full mr-4 flex items-center justify-center">
                        <span className="font-bold text-primary text-sm">B.</span>
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-primary">Nom du bénéficiaire</h4>
                        <p className="text-sm text-accent font-semibold">Lycéen / Parent / Enseignant</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rapports Annuels */}
      <section id="rapports" className="bg-primary text-surface py-20 lg:py-24">
        <div className="container-site text-center">
          <div className="mb-12 flex flex-col items-center gap-4 text-center">
            <h2 className="text-h2 font-display font-bold text-surface">
              Transparence & Rapports
            </h2>
            <p className="text-surface/80 max-w-2xl text-lg">
              Consultez en détail nos actions et notre bilan financier.
            </p>
            <div className="h-1 w-20 bg-accent rounded-full mt-2" />
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            {["2024", "2023", "2022", "2021"].map((year) => (
              <a 
                key={year}
                href={`/rapports/rapport-${year}.pdf`} 
                className="flex items-center bg-surface/10 hover:bg-surface/20 border border-surface/20 transition-colors px-6 py-4 rounded-xl backdrop-blur-sm"
              >
                <Download className="w-5 h-5 text-accent mr-3" />
                <span className="font-semibold">Rapport Annuel {year} (PDF)</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
