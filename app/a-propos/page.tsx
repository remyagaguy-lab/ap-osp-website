import { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { HistoryTimeline } from "@/components/a-propos/HistoryTimeline";
import { OrgChart } from "@/components/a-propos/OrgChart";
import { SectionHeader } from "@/components/SectionHeader";
import { Target, Eye, Heart, AlertCircle, BookX, Compass, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "À Propos",
  description: "Découvrez l'histoire, la mission, la vision et l'équipe de l'Association pour la Promotion de l'Orientation Scolaire et Professionnelle (AP-OSP).",
};

const values = [
  {
    title: "Engagement",
    description: "L'équipe s'active quotidiennement avec abnégation pour l'intérêt des bénéficiaires.",
  },
  {
    title: "Fidélité",
    description: "L'AP-OSP reste attachée à son éthique et à ses principes moraux.",
  },
  {
    title: "Responsabilisation",
    description: "Chaque bénéficiaire est acteur de son propre avenir.",
  },
  {
    title: "Travail en équipe",
    description: "La force collective crée les conditions de la réussite.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="L'AP-OSP : une association au service des choix de vie"
        breadcrumbs={[
          { label: "À propos" }
        ]}
      />

      {/* Introduction */}
      <section className="bg-surface py-20 lg:py-32 overflow-hidden">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Constat */}
            <div className="space-y-8">
              <div>
                <p className="text-lg text-text-muted leading-relaxed">
                  Chaque année, des milliers de jeunes togolais nourrissent des rêves d'avenir prometteur. Pourtant, sans accompagnement adéquat, ces aspirations se heurtent à des obstacles insurmontables :
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-5 p-5 rounded-2xl bg-bg border border-border hover:border-accent/50 transition-colors shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <Compass className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <span className="font-bold text-primary block mb-1 text-lg">Choix inadaptés</span>
                    <span className="text-text-muted leading-relaxed">Des choix de filières inadaptés, menant à des formations sans débouchés.</span>
                  </div>
                </div>

                <div className="flex gap-5 p-5 rounded-2xl bg-bg border border-border hover:border-accent/50 transition-colors shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <HelpCircle className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <span className="font-bold text-primary block mb-1 text-lg">Méconnaissance</span>
                    <span className="text-text-muted leading-relaxed">Une méconnaissance des opportunités professionnelles existantes.</span>
                  </div>
                </div>

                <div className="flex gap-5 p-5 rounded-2xl bg-bg border border-border hover:border-accent/50 transition-colors shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <BookX className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <span className="font-bold text-primary block mb-1 text-lg">Manque de soutien</span>
                    <span className="text-text-muted leading-relaxed">Un manque de soutien pour surmonter les difficultés d'apprentissage.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: AP-OSP Solution */}
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
              
              <div className="relative bg-primary text-surface rounded-[2rem] p-10 md:p-14 shadow-2xl overflow-hidden border border-surface/10">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#ffffff 2px, transparent 2px)", backgroundSize: "24px 24px" }} />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-accent/20">
                    <AlertCircle className="w-8 h-8 text-surface" />
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-8 leading-snug">
                    Face à ce constat, il est impératif de renforcer les mécanismes d'orientation scolaire et professionnelle.
                  </h3>
                  
                  <div className="h-px w-full bg-surface/20 my-8" />
                  
                  <p className="text-xl text-surface/90 leading-relaxed font-medium">
                    D'où <span className="text-accent font-bold text-2xl">L'AP-OSP</span>, le guide des jeunes apprenants et étudiants ainsi que de toute personne cherchant à donner un sens à son parcours éducatif et professionnel.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* History Timeline */}
      <HistoryTimeline />

      {/* Mission, Vision & Valeurs */}
      <section className="bg-primary text-surface py-20 lg:py-32">
        <div className="container-site">
          {/* Custom Header to ensure text color visibility */}
          <div className="mb-16 flex flex-col items-center text-center gap-4">
            <h2 className="text-h2 font-display font-bold text-surface">
              Mission, Vision & Valeurs
            </h2>
            <div className="h-1 w-20 bg-accent rounded-full mt-2" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-surface/5 border border-surface/10 rounded-3xl p-8 backdrop-blur-sm flex flex-col">
              <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-6 shrink-0">
                <Target className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-accent">Notre Mission</h3>
              <div className="text-surface/80 leading-relaxed space-y-4 flex-1">
                <p>
                  Créée en 2019, notre association est animée par une mission forte : accompagner chaque individu, quel que soit son âge ou son parcours, dans le choix de sa voie professionnelle et de formation.
                </p>
                <p>
                  Nous sommes convaincus que l’orientation scolaire et professionnelle (OSP) est bien plus qu’une simple décision : c’est un pilier fondamental de la réussite éducative, de l’insertion sociale et de l’épanouissement personnel.
                </p>
              </div>
            </div>
            
            <div className="bg-surface/5 border border-surface/10 rounded-3xl p-8 backdrop-blur-sm flex flex-col">
              <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-6 shrink-0">
                <Eye className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-accent">Notre Vision</h3>
              <div className="text-surface/80 leading-relaxed space-y-4 flex-1">
                <p>
                  À l’AP-OSP, nous croyons en un monde où chaque individu, quel que soit son âge ou son parcours, peut faire des choix éclairés pour son avenir.
                </p>
                <p>
                  Nous aspirons à démocratiser l’orientation en offrant à chacun l’accompagnement nécessaire pour comprendre ses aspirations, identifier ses compétences et s’insérer efficacement dans la vie socioprofessionnelle.
                </p>
              </div>
            </div>

            <div className="bg-surface/5 border border-surface/10 rounded-3xl p-8 backdrop-blur-sm flex flex-col">
              <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-6 shrink-0">
                <Heart className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-accent">Nos Valeurs</h3>
              <ul className="space-y-5 flex-1">
                {values.map((val, idx) => (
                  <li key={idx} className="flex flex-col">
                    <span className="font-bold text-surface text-lg">{val.title}</span>
                    <span className="text-surface/70 text-sm mt-1">{val.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Org Chart */}
      <OrgChart />

      {/* Team Section */}
      <section className="bg-surface py-20 lg:py-32">
        <div className="container-site">
          <SectionHeader 
            title="Notre Équipe" 
            subtitle="Des professionnels passionnés au service de la jeunesse togolaise."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
            {/* Generating 5 placeholders */}
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="w-48 h-48 rounded-full bg-border/50 mb-6 relative overflow-hidden border-4 border-surface shadow-lg group-hover:border-accent transition-colors flex items-center justify-center">
                  <span className="text-text-muted/40 font-medium text-sm text-center px-4">
                    Photo à fournir par AP-OSP
                  </span>
                </div>
                <h3 className="text-xl font-display font-bold text-primary mb-1">
                  Nom du Membre
                </h3>
                <p className="text-accent font-semibold text-sm mb-3">
                  Rôle / Fonction
                </p>
                <p className="text-text-muted text-center text-sm">
                  Courte biographie de présentation du membre. [Espace réservé à compléter par l'association].
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
