import { GraduationCap, Briefcase, ClipboardList, MessageCircle, BookOpen, HeartHandshake, LucideIcon } from "lucide-react";

export interface Program {
  slug: string;
  title: string;
  shortDescription: string;
  icon: LucideIcon;
  target: string;
  zone: string;
  stats: {
    year: string;
    value: string;
    label: string;
  };
  fullDescription: string[];
  objectives: string[];
  modulesOrSteps: {
    title: string;
    items: string[];
  };
}

export const programs: Program[] = [
  {
    slug: "education-a-lorientation",
    title: "Éducation à l'orientation",
    shortDescription: "Ateliers pratiques sur la connaissance de soi, les filières et les secteurs d'avenir.",
    icon: GraduationCap,
    target: "Élèves collège et lycée",
    zone: "Lomé (en extension nationale)",
    stats: {
      year: "2023",
      value: "40 000+",
      label: "Bénéficiaires",
    },
    fullDescription: [
      "Le programme d'Éducation à l'orientation vise à donner aux élèves les outils nécessaires pour comprendre leurs propres aspirations et les confronter à la réalité du monde académique et professionnel.",
      "À travers des séances interactives, nous aidons les jeunes à déconstruire les stéréotypes sur certains métiers et à explorer l'éventail des possibilités qui s'offrent à eux après le BEPC ou le BAC."
    ],
    objectives: [
      "Permettre à l'élève de mieux se connaître (forces, intérêts, valeurs).",
      "Informer sur les filières d'études disponibles au Togo et à l'international.",
      "Présenter les secteurs professionnels porteurs et les métiers d'avenir.",
      "Initier les élèves à l'esprit d'entrepreneuriat."
    ],
    modulesOrSteps: {
      title: "Modules abordés",
      items: [
        "Connaissance de soi",
        "Critères de choix d'une filière",
        "Offres post-BEPC et post-BAC",
        "Formations professionnelles",
        "Secteurs à forte employabilité",
        "Entrepreneuriat"
      ]
    }
  },
  {
    slug: "stages-observation",
    title: "Stages d'observation",
    shortDescription: "4 semaines en entreprise pour confronter les aspirations professionnelles à la réalité.",
    icon: Briefcase,
    target: "Élèves lycée",
    zone: "Lomé",
    stats: {
      year: "2023",
      value: "41",
      label: "Bénéficiaires placés",
    },
    fullDescription: [
      "Souvent, les jeunes choisissent un métier en se basant sur des idées reçues. Le programme de stages d'observation permet de plonger les lycéens dans le monde du travail réel pendant la période des grandes vacances.",
      "Durant 4 semaines, l'élève observe, pose des questions et participe à des tâches mineures dans une entreprise correspondant à son projet professionnel. Cette immersion est déterminante pour confirmer ou réorienter son choix."
    ],
    objectives: [
      "Confronter le projet professionnel de l'élève à la réalité du terrain.",
      "Développer le savoir-être et les codes du monde de l'entreprise.",
      "Créer un premier réseau professionnel pour le jeune.",
      "Faciliter la transition école-emploi."
    ],
    modulesOrSteps: {
      title: "Déroulement du stage",
      items: [
        "Entretien préalable et définition du projet",
        "Recherche et placement en entreprise partenaire",
        "Immersion de 4 semaines (Juillet/Août)",
        "Suivi par un conseiller AP-OSP",
        "Rédaction et présentation d'un rapport de stage"
      ]
    }
  },
  {
    slug: "ateliers-orientation",
    title: "Ateliers & tests psychométriques",
    shortDescription: "Tests de profil professionnel en petits groupes de 10 à 15 élèves.",
    icon: ClipboardList,
    target: "Élèves (groupes de 10–15)",
    zone: "Lomé",
    stats: {
      year: "2023",
      value: "155",
      label: "Bénéficiaires (13 ateliers)",
    },
    fullDescription: [
      "Ces ateliers en petits comités offrent un cadre intimiste propice aux échanges et à l'introspection. L'utilisation d'outils psychométriques standardisés permet d'apporter une dimension scientifique et objective à l'orientation.",
      "L'analyse des profils permet aux élèves de mettre des mots sur leurs traits de personnalité et de découvrir les environnements de travail qui leur correspondent le mieux."
    ],
    objectives: [
      "Évaluer les aptitudes, intérêts et traits de personnalité.",
      "Identifier les environnements professionnels adéquats (Méthode RIASEC).",
      "Favoriser l'expression des doutes et interrogations en groupe.",
      "Fournir un bilan écrit servant de base au projet d'orientation."
    ],
    modulesOrSteps: {
      title: "Déroulement d'un atelier",
      items: [
        "Accueil et brise-glace en petit groupe",
        "Passation des tests psychométriques",
        "Correction et auto-évaluation",
        "Interprétation des résultats par le psychologue",
        "Restitution individuelle et élaboration de pistes"
      ]
    }
  },
  {
    slug: "conseil-aide-orientation",
    title: "Conseil d'aide en orientation",
    shortDescription: "Accompagnement individualisé sur plusieurs séances avec un conseiller psychologue.",
    icon: MessageCircle,
    target: "Élèves individuels",
    zone: "Lomé",
    stats: {
      year: "2023",
      value: "25",
      label: "Accompagnements complets",
    },
    fullDescription: [
      "Certains élèves rencontrent des difficultés profondes à faire un choix, souffrent d'anxiété face à l'avenir ou font face à un désaccord familial sur leur orientation. L'accompagnement individualisé est conçu pour ces situations complexes.",
      "Un conseiller d'orientation psychologue reçoit le jeune (et parfois ses parents) sur plusieurs séances pour un travail en profondeur, visant à lever les blocages et construire un projet motivant."
    ],
    objectives: [
      "Résoudre les indécisions chroniques et l'anxiété liée à l'avenir.",
      "Médiatiser les conflits d'orientation entre l'élève et sa famille.",
      "Construire un projet professionnel solide, réaliste et personnalisé.",
      "Accompagner la recherche d'établissements et les démarches d'inscription."
    ],
    modulesOrSteps: {
      title: "Les étapes de l'accompagnement",
      items: [
        "Séance 1 : Entretien d'exploration et analyse de la demande",
        "Séance 2 : Investigations (tests, questionnaires)",
        "Séance 3 : Restitution et co-construction de pistes",
        "Séance 4 : Synthèse, plan d'action et entretien familial (optionnel)",
        "Suivi post-accompagnement"
      ]
    }
  },
  {
    slug: "formation-enseignants",
    title: "Formation des enseignants",
    shortDescription: "Psychopédagogie, gestion de la crise d'adolescence et prise en charge des difficultés.",
    icon: BookOpen,
    target: "Enseignants et administration scolaire",
    zone: "Lomé et national",
    stats: {
      year: "2023",
      value: "84",
      label: "Enseignants formés",
    },
    fullDescription: [
      "L'enseignant est souvent le premier relais d'orientation pour l'élève. Pourtant, la formation initiale des professeurs n'intègre pas toujours les dimensions psychopédagogiques nécessaires pour accompagner un adolescent en construction.",
      "L'AP-OSP intervient auprès des équipes pédagogiques et administratives pour les outiller sur la psychologie de l'adolescent, l'identification des troubles d'apprentissage et les techniques de communication bienveillante."
    ],
    objectives: [
      "Outiller les enseignants sur la psychologie de l'adolescent.",
      "Former à la détection précoce des difficultés d'apprentissage.",
      "Améliorer la relation enseignant-élève et la gestion de classe.",
      "Faire des enseignants des relais efficaces pour l'information en orientation."
    ],
    modulesOrSteps: {
      title: "Thématiques de formation",
      items: [
        "Psychologie de l'adolescent et crise d'adolescence",
        "Psychologie de l'apprentissage",
        "Prise en charge des élèves en difficulté",
        "Posture bienveillante et communication non-violente",
        "Initiation au conseil d'orientation de premier niveau"
      ]
    }
  },
  {
    slug: "prise-en-charge-apprentissage",
    title: "Soutien aux apprentissages",
    shortDescription: "Diagnostic et plan d'intervention pour les élèves en difficulté scolaire.",
    icon: HeartHandshake,
    target: "Élèves en difficulté scolaire",
    zone: "Lomé",
    stats: {
      year: "2023",
      value: "18",
      label: "Bénéficiaires pris en charge",
    },
    fullDescription: [
      "L'échec scolaire n'est pas une fatalité et cache souvent des causes sous-jacentes (troubles de l'apprentissage, manque de méthode, démotivation, problèmes familiaux).",
      "Notre programme de soutien ne se limite pas à du répétitorat. Il s'agit d'une prise en charge psychopédagogique globale visant à identifier la racine de la difficulté et à redonner à l'élève confiance et stratégies d'apprentissage."
    ],
    objectives: [
      "Identifier les causes réelles de l'échec ou de la difficulté scolaire.",
      "Proposer des méthodes de travail adaptées au profil cognitif de l'élève.",
      "Restaurer la confiance en soi et l'estime de soi.",
      "Impliquer les parents dans le processus de remédiation."
    ],
    modulesOrSteps: {
      title: "Processus d'intervention",
      items: [
        "Dépistage et évaluation diagnostique",
        "Élaboration d'un Plan d'Intervention Individualisé (PII)",
        "Séances de remédiation cognitive et méthodologique",
        "Soutien psychologique",
        "Évaluation des progrès et réajustement"
      ]
    }
  }
];
