export interface Project {
  slug: string;
  title: string;
  badge: string;
  badgeType: "orange" | "green" | "gray";
  partner: string;
  period: string;
  budget?: string;
  zones: string[];
  beneficiaries: string;
  description: string[];
  results: string[];
}

export const projects: Project[] = [
  {
    slug: "ambassade-usa-2024",
    title: "Actions inclusives et préventives dans la lutte contre l'extrémisme violent",
    badge: "Suspendu",
    badgeType: "orange",
    partner: "Ambassade des USA (Fonds de l'Ambassadeur pour la Résilience) & AS.PA.LU.PE",
    period: "Novembre 2024 — (suspendu après 3 mois)",
    budget: "6 622 544 FCFA (décaissé sur le 1er trimestre)",
    zones: ["Préfecture de Dankpen", "Préfecture de Tchamba"],
    beneficiaries: "296 membres de 12 coopératives + ~200 élèves",
    description: [
      "Face à la menace grandissante de l'extrémisme violent dans le nord du Togo, ce projet vise à renforcer la résilience des communautés vulnérables à travers l'entrepreneuriat agricole.",
      "Le projet consiste à identifier, structurer et accompagner des coopératives de jeunes entrepreneurs agricoles pour leur offrir des perspectives économiques stables, réduisant ainsi leur vulnérabilité face au recrutement par des groupes extrémistes."
    ],
    results: [
      "12 coopératives sélectionnées et formées.",
      "Distribution de kits agricoles et de semences améliorées.",
      "Campagnes de sensibilisation communautaire anti-extrémisme.",
      "Taux d'exécution de 98% sur les objectifs du 1er décaissement."
    ]
  },
  {
    slug: "cnt-ept",
    title: "Coalition Nationale Togolaise pour l'Éducation pour Tous",
    badge: "Actif",
    badgeType: "green",
    partner: "Réseau CNT/EPT",
    period: "2023 — Présent",
    zones: ["National"],
    beneficiaries: "Système éducatif togolais",
    description: [
      "L'AP-OSP est membre actif de la Coalition Nationale Togolaise pour l'Éducation pour Tous (CNT/EPT). Cette adhésion nous permet de porter la voix de l'orientation scolaire au niveau macro.",
      "Nous participons activement aux réflexions sur les réformes éducatives, plaidons pour une meilleure intégration de l'orientation dans les curricula et bénéficions d'ateliers de renforcement de capacités pour les OSC."
    ],
    results: [
      "Participation aux ateliers nationaux de la coalition.",
      "Plaidoyer pour l'intégration de la psychopédagogie dans la formation initiale des enseignants.",
      "Renforcement institutionnel et gouvernance de l'AP-OSP."
    ]
  },
  {
    slug: "festics-sokode-2024",
    title: "Participation au FESTICS Sokodé 2024",
    badge: "Complété",
    badgeType: "gray",
    partner: "Alafiakultur Média",
    period: "26–30 Août 2024",
    zones: ["Sokodé"],
    beneficiaries: "Jeunesse de la région Centrale",
    description: [
      "L'AP-OSP a été invitée en tant que partenaire technique au Festival International de la Culture de Sokodé (FESTICS) pour animer le volet éducation et orientation de l'événement.",
      "Notre équipe a tenu des stands d'information, organisé des mini-ateliers d'orientation en plein air et sensibilisé la jeunesse locale sur l'importance d'un choix de filière réfléchi."
    ],
    results: [
      "Sensibilisation de masse lors du festival.",
      "Animation de 3 panels sur l'insertion socio-professionnelle.",
      "Établissement de premiers contacts pour l'ouverture d'une antenne AP-OSP dans la région Centrale."
    ]
  }
];
