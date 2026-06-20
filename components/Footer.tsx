import Link from "next/link";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-primary text-surface py-16 lg:py-24 border-t-4 border-accent">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
          
          {/* Logo & Intro */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <div className="bg-white rounded-lg p-3 w-fit shadow-sm">
                <Image src="/logo.png" alt="AP-OSP Logo" width={160} height={60} className="object-contain h-[60px] w-auto" />
              </div>
            </Link>
            <p className="text-surface/70 leading-relaxed mb-6 text-sm">
              Association pour la Promotion de l'Orientation Scolaire et Professionnelle au Togo. Un avenir éclairé pour chaque jeune.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-surface/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all hover:-translate-y-1" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-surface/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all hover:-translate-y-1" aria-label="Facebook">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-surface/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all hover:-translate-y-1" aria-label="TikTok">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-surface/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all hover:-translate-y-1" aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-surface/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all hover:-translate-y-1" aria-label="X">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
              </a>
            </div>
          </div>

          {/* Navigation Rapide */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 relative inline-block pb-2 after:content-[''] after:absolute after:w-1/2 after:h-0.5 after:bg-accent after:bottom-0 after:left-0">
              Navigation Rapide
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/a-propos" className="text-surface/70 hover:text-accent transition-colors flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-accent/50 mr-2"></span>À propos de nous</Link></li>
              <li><Link href="/programmes" className="text-surface/70 hover:text-accent transition-colors flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-accent/50 mr-2"></span>Nos Programmes</Link></li>
              <li><Link href="/blog" className="text-surface/70 hover:text-accent transition-colors flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-accent/50 mr-2"></span>Blog & Actualités</Link></li>
              <li><Link href="/contact" className="text-surface/70 hover:text-accent transition-colors flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-accent/50 mr-2"></span>Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 relative inline-block pb-2 after:content-[''] after:absolute after:w-1/2 after:h-0.5 after:bg-accent after:bottom-0 after:left-0">
              Nous Contacter
            </h4>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
                <span className="text-surface/80 leading-relaxed mt-1">Avedji-Anyigbé, non loin de Style Tahiti<br />15 BP 425 Lomé-Togo</span>
              </li>
              <li className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center mr-3 shrink-0">
                  <Phone className="w-4 h-4 text-accent" />
                </div>
                <a href="tel:+22870418286" className="text-surface/80 hover:text-accent transition-colors font-medium">+228 70 41 82 86</a>
              </li>
              <li className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center mr-3 shrink-0">
                  <Mail className="w-4 h-4 text-accent" />
                </div>
                <a href="mailto:contact.aposp@gmail.com" className="text-surface/80 hover:text-accent transition-colors font-medium">contact.aposp@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright & Legal */}
        <div className="mt-16 pt-8 border-t border-surface/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-surface/50 text-sm">
            © {new Date().getFullYear()} AP-OSP Togo. Tous droits réservés. <span className="hidden md:inline">•</span> <span className="block md:inline mt-1 md:mt-0">Enregistrement N° 383/MATDCL.</span>
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link href="/mentions-legales" className="text-surface/50 text-sm hover:text-accent transition-colors">Mentions Légales</Link>
            <Link href="/politique-confidentialite" className="text-surface/50 text-sm hover:text-accent transition-colors">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
