import { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { Phone, Mail, MapPin, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez l'Association pour la Promotion de l'Orientation Scolaire et Professionnelle (AP-OSP) au Togo.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Prenons contact"
        description="Une question, un besoin d'accompagnement ou une proposition de partenariat ? Notre équipe est à votre écoute."
        breadcrumbs={[
          { label: "Contact" }
        ]}
      />

      <section className="bg-bg py-20 lg:py-32">
        <div className="container-site max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Contact Info (1/3) */}
            <div className="lg:col-span-1 space-y-10">
              <div>
                <h2 className="text-2xl font-display font-bold text-primary mb-6">
                  Nos Coordonnées
                </h2>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mr-4">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <span className="block font-semibold text-primary mb-1">Téléphone</span>
                      <a href="tel:+22870418286" className="text-text-muted hover:text-accent transition-colors">
                        +228 70 41 82 86
                      </a>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mr-4">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <span className="block font-semibold text-primary mb-1">E-mail</span>
                      <a href="mailto:contact.aposp@gmail.com" className="text-text-muted hover:text-accent transition-colors">
                        contact.aposp@gmail.com
                      </a>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mr-4">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <span className="block font-semibold text-primary mb-1">Adresse</span>
                      <span className="text-text-muted">
                        Avedji-Anyigbé, non loin de Style Tahiti<br />
                        15 BP 425 Lomé-Togo
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display font-bold text-primary mb-4">
                  Suivez-nous
                </h3>
                <div className="flex flex-wrap gap-3">
                  <a href="#" className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-primary hover:bg-primary hover:text-surface transition-all" aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-primary hover:bg-primary hover:text-surface transition-all" aria-label="Facebook">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-primary hover:bg-primary hover:text-surface transition-all" aria-label="TikTok">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-primary hover:bg-primary hover:text-surface transition-all" aria-label="Instagram">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-primary hover:bg-primary hover:text-surface transition-all" aria-label="X">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
                  </a>
                </div>
              </div>

              {/* Box Dossier de Partenariat */}
              <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6 mt-8">
                <h3 className="text-lg font-display font-bold text-primary mb-3">
                  Dossier de Partenariat
                </h3>
                <p className="text-sm text-text-muted mb-4">
                  Téléchargez notre dossier complet pour découvrir toutes nos offres de collaboration.
                </p>
                <a 
                  href="/dossier-partenariat-aposp.pdf" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center text-sm font-bold text-primary hover:text-accent transition-colors"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Télécharger le PDF
                </a>
              </div>
            </div>

            {/* Contact Form (2/3) */}
            <div id="contact-form" className="lg:col-span-2 scroll-mt-24">
              <div className="bg-surface border border-border rounded-3xl p-8 md:p-12 shadow-sm">
                <h2 className="text-2xl font-display font-bold text-primary mb-2">
                  Envoyez-nous un message
                </h2>
                <p className="text-text-muted mb-8">
                  Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
                </p>
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
