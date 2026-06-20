import { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Mentions Légales",
};

export default function MentionsLegales() {
  return (
    <>
      <PageHero
        title="Mentions Légales"
        breadcrumbs={[{ label: "Mentions Légales" }]}
      />
      <section className="bg-bg py-16 lg:py-24">
        <div className="container-site max-w-3xl prose prose-slate">
          <h2>1. Éditeur du site</h2>
          <p>
            Le présent site est la propriété de l'<strong>Association pour la Promotion de l'Orientation Scolaire et Professionnelle (AP-OSP)</strong>, organisation de la société civile togolaise à but non lucratif.
          </p>
          <ul>
            <li><strong>Siège social :</strong> Avedji-Anyigbé, non loin de Style Tahiti, 15 BP 425 Lomé-Togo</li>
            <li><strong>Enregistrement :</strong> N° 383/MATDCL du 02/07/2020</li>
            <li><strong>Téléphone :</strong> +228 70 41 82 86</li>
            <li><strong>Email :</strong> contact.aposp@gmail.com</li>
          </ul>

          <h2>2. Hébergement</h2>
          <p>
            Ce site est hébergé par LWS (Ligne Web Services).<br />
            10 rue de Penthièvre, 75008 Paris, France.
          </p>

          <h2>3. Propriété intellectuelle</h2>
          <p>
            L'ensemble de ce site relève de la législation togolaise et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
          </p>
        </div>
      </section>
    </>
  );
}
