import { notFound } from "next/navigation";
import { Metadata } from "next";
import { programs } from "@/lib/data/programs";
import { PageHero } from "@/components/PageHero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, MapPin, Users, Target } from "lucide-react";
import Link from "next/link";

interface ProgramPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return programs.map((program) => ({
    slug: program.slug,
  }));
}

export async function generateMetadata({ params }: ProgramPageProps): Promise<Metadata> {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);

  if (!program) {
    return { title: "Programme non trouvé" };
  }

  return {
    title: program.title,
    description: program.shortDescription,
  };
}

export default async function ProgramPage({ params }: ProgramPageProps) {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);

  if (!program) {
    notFound();
  }

  return (
    <>
      <PageHero
        title={program.title}
        breadcrumbs={[
          { label: "Programmes", href: "/programmes" },
          { label: program.title }
        ]}
      />

      <section className="bg-bg py-16 lg:py-24">
        <div className="container-site max-w-5xl">
          
          <div className="flex flex-wrap gap-4 mb-12">
            <Badge variant="secondary" className="bg-accent-light text-accent-dark px-4 py-1.5 text-sm">
              <Users className="w-4 h-4 mr-2" />
              Cible : {program.target}
            </Badge>
            <Badge variant="secondary" className="bg-primary/10 text-primary px-4 py-1.5 text-sm">
              <MapPin className="w-4 h-4 mr-2" />
              Zone : {program.zone}
            </Badge>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            
            {/* Main Content (2/3) */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-display font-bold text-primary mb-6">À propos de ce programme</h2>
                <div className="space-y-4 text-text-muted text-lg leading-relaxed">
                  {program.fullDescription.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-primary mb-6 flex items-center">
                  <Target className="w-6 h-6 mr-3 text-accent" />
                  Objectifs
                </h2>
                <ul className="space-y-4">
                  {program.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 shrink-0" />
                      <span className="text-text-muted">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-primary mb-6">
                  {program.modulesOrSteps.title}
                </h2>
                <div className="bg-surface border border-border rounded-2xl p-6 md:p-8">
                  <ul className="space-y-4">
                    {program.modulesOrSteps.items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center shrink-0 mr-4">
                          {index + 1}
                        </div>
                        <span className="text-text font-medium pt-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar (1/3) */}
            <div className="space-y-8">
              {/* Stats Card */}
              <div className="bg-primary text-surface rounded-2xl p-8 shadow-lg">
                <h3 className="font-display font-semibold text-surface/80 text-sm uppercase tracking-wider mb-6">
                  Chiffres Clés ({program.stats.year})
                </h3>
                <div className="text-5xl font-display font-extrabold text-accent mb-2">
                  {program.stats.value}
                </div>
                <div className="text-surface/90 font-medium text-lg">
                  {program.stats.label}
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-surface border border-border rounded-2xl p-8 shadow-sm">
                <h3 className="font-display font-bold text-xl text-primary mb-4">
                  Besoin d'accompagnement ?
                </h3>
                <p className="text-text-muted text-sm mb-6">
                  Vous souhaitez bénéficier de ce programme pour vous-même, votre enfant ou votre établissement ?
                </p>
                <Button asChild className="w-full bg-accent hover:bg-accent-dark text-surface">
                  <Link href="/contact" className="flex items-center justify-center">
                    Contactez-nous <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
