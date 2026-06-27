"use client";

import { motion } from "framer-motion";

export function OrgChart() {
  return (
    <section className="bg-bg py-20 lg:py-32 border-t border-border">
      <div className="container-site max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-h2 md:text-[40px] font-display font-bold text-primary mb-4">
            Notre Organisation
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Une structure associative transparente et démocratique, organisée pour maximiser notre impact sur le terrain.
          </p>
          <div className="w-20 h-1.5 bg-accent rounded-full mx-auto mt-6" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-surface border border-border rounded-3xl p-4 sm:p-8 md:p-16 shadow-sm flex flex-col items-center overflow-x-hidden relative"
        >
          {/* Filigrane optionnel (watermark) */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
            <img src="/logo.png" alt="" className="w-[150%] md:w-2/3 max-w-md grayscale" />
          </div>

          <div className="flex flex-col items-center w-full md:min-w-[600px] relative z-10">
            {/* 1. ASSEMBLÉE GÉNÉRALE */}
            <div className="bg-primary text-surface px-6 md:px-10 py-4 rounded-xl shadow-md text-center z-10 relative w-full max-w-md">
              <h3 className="font-display font-bold text-xl md:text-2xl uppercase tracking-wider">
                L'Assemblée Générale
              </h3>
            </div>
            <p className="mt-4 text-sm font-semibold text-text-muted text-center">
              L'instance suprême de l'Association
            </p>
            
            {/* Connecteur T-Junction parfait (Desktop) */}
            <div className="hidden md:flex w-full flex-col items-center mt-4">
              <div className="w-1 h-8 bg-border" />
              <div className="h-1 bg-border w-[calc(50%+1rem)] md:w-[calc(50%+1.5rem)] lg:w-[calc(50%+2rem)]" />
              <div className="flex justify-between w-[calc(50%+1rem)] md:w-[calc(50%+1.5rem)] lg:w-[calc(50%+2rem)]">
                <div className="w-1 h-8 bg-border" />
                <div className="w-1 h-8 bg-border" />
              </div>
            </div>

            {/* Connecteur Vertical (Mobile) */}
            <div className="flex md:hidden w-1 h-8 bg-border mt-4" />

            <div className="flex flex-col md:flex-row justify-between w-full max-w-4xl gap-0 md:gap-12 lg:gap-16 mt-0">
              
              {/* BRANCHE DROITE : COMMISSARIAT AUX COMPTES (En premier sur mobile) */}
              <div className="flex-1 flex flex-col items-center order-1 md:order-2 w-full max-w-sm mx-auto">
                <div className="bg-surface border-2 border-dashed border-border w-full py-4 rounded-xl shadow-sm z-10 relative">
                  <h4 className="font-display font-bold text-lg md:text-xl uppercase text-center leading-tight text-primary">
                    Le Commissariat<br/>aux Comptes
                  </h4>
                </div>
                <p className="mt-4 md:mt-6 mb-2 md:mb-0 text-sm text-text-muted text-center px-4 leading-relaxed z-10 relative">
                  Chargés de la vérification de la régularité des opérations financières et les bilans et d'en rendre compte à l'Assemblée Générale.
                </p>
              </div>

              {/* Ligne de connexion mobile entre les deux branches */}
              <div className="flex md:hidden w-1 h-8 bg-border order-2 mx-auto" />

              {/* BRANCHE GAUCHE : BUREAU EXÉCUTIF */}
              <div className="flex-1 flex flex-col items-center order-3 md:order-1 w-full max-w-sm mx-auto">
                <div className="bg-accent text-primary w-full py-4 rounded-xl shadow-md z-10 relative">
                  <h4 className="font-display font-bold text-lg md:text-xl uppercase text-center">
                    Le Bureau Exécutif
                  </h4>
                </div>
                
                {/* Petit connecteur vertical sous le BE */}
                <div className="w-1 h-6 bg-border" />
                
                <div className="w-full flex flex-col items-center relative">
                  {/* Ligne verticale de fond traversant les postes */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-border -translate-x-1/2 z-0" />
                  
                  {/* Postes avec fond opaque (bg-surface) et z-10 pour passer au-dessus de la ligne */}
                  <div className="bg-surface border border-border rounded-lg w-full py-3 shadow-sm flex justify-center items-center z-10 relative mb-4 md:mb-6">
                    <span className="font-semibold text-primary text-center text-sm md:text-base">UN(E) PRÉSIDENT(E)</span>
                  </div>
                  <div className="bg-surface border border-border rounded-lg w-full py-3 shadow-sm flex justify-center items-center z-10 relative mb-4 md:mb-6 px-2">
                    <span className="font-semibold text-primary text-center text-sm md:text-base">UN(E) SECRÉTAIRE GÉNÉRAL(E)</span>
                  </div>
                  <div className="bg-surface border border-border rounded-lg w-full py-3 shadow-sm flex justify-center items-center z-10 relative mb-4 md:mb-6 px-2">
                    <span className="font-semibold text-primary text-center text-sm md:text-base">UN(E) TRÉSORIER(IÈRE)<br/>GÉNÉRAL(E)</span>
                  </div>
                  <div className="bg-surface border border-border rounded-lg w-full py-3 shadow-sm flex justify-center items-center z-10 relative">
                    <span className="font-semibold text-primary text-center text-sm md:text-base">DEUX (2) CONSEILLERS(ÈRES)</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}
