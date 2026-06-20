import { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
};

export default function PolitiqueConfidentialite() {
  return (
    <>
      <PageHero
        title="Politique de Confidentialité"
        breadcrumbs={[{ label: "Politique de Confidentialité" }]}
      />
      <section className="bg-bg py-16 lg:py-24">
        <div className="container-site max-w-3xl prose prose-slate">
          <h2>1. Collecte des données personnelles</h2>
          <p>
            Nous collectons les données que vous nous communiquez volontairement via notre formulaire de contact (nom, prénom, e-mail, téléphone). Ces données sont exclusivement utilisées pour répondre à vos demandes ou gérer vos demandes de partenariat/accompagnement.
          </p>

          <h2>2. Utilisation et conservation</h2>
          <p>
            L'AP-OSP s'engage à ne pas revendre, louer ou céder vos données personnelles à des tiers. Les informations sont conservées pendant la durée nécessaire au traitement de votre demande, puis archivées de manière sécurisée ou supprimées.
          </p>

          <h2>3. Cookies et statistiques</h2>
          <p>
            Nous utilisons Google Analytics (de manière anonymisée) pour mesurer l'audience de notre site afin d'améliorer l'expérience utilisateur. Vous pouvez configurer votre navigateur pour refuser ces cookies.
          </p>

          <h2>4. Vos droits</h2>
          <p>
            Conformément aux lois applicables sur la protection des données personnelles, vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant. Pour exercer ce droit, veuillez nous contacter à <strong>contact.aposp@gmail.com</strong>.
          </p>
        </div>
      </section>
    </>
  );
}
