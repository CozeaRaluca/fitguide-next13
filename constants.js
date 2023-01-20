export const THERAPY_CATEGORY = "Therapy";
export const TRAINING_CATEGORY = "Training";
export const PROGRAMS_CATEGORY = "Programs";
export const CONSULTANCY_CATEGORY = "Consultancy";

export const SERVICE_CATEGORIES = {
  THERAPY: THERAPY_CATEGORY,
  TRAINING: TRAINING_CATEGORY,
  PROGRAMS: PROGRAMS_CATEGORY,
  CONSULTANCY: CONSULTANCY_CATEGORY,
};

export const SERVICES = {
  physicalTherapy: {
    title: "Physical Therapy",
    highlight: "Helping You Get Back in Motion!",
    shortDescription: "",
    longDescription: "",
    category: THERAPY_CATEGORY,
    href: "/services/physical-therapy",
  },
  onsitePT: {
    title: "Gym Training",
    highlight: "",
    shortDescription: "",
    longDescription: "",
    category: TRAINING_CATEGORY,
    href: "/services/onsite-pt",
  },
  onlinePT: {
    title: "Online Training",
    highlight: "",
    shortDescription: "",
    longDescription: "",
    category: TRAINING_CATEGORY,
    href: "/services/online-pt",
  },
  trainingPrograms: {
    title: "Training Programs",
    highlight: "",
    shortDescription: "",
    longDescription: "",
    category: PROGRAMS_CATEGORY,
    href: "/services/training-programs",
  },
  nutritionalPlans: {
    title: "Nutritional Plans",
    highlight: "",
    shortDescription: "",
    longDescription: "",
    category: PROGRAMS_CATEGORY,
    href: "/services/nutritional-plans",
  },
  fitnessConsultancy: {
    title: "Fitness Consultancy",
    highlight: "Not sure what you need? We can find it out!",
    shortDescription: "",
    longDescription: "",
    category: CONSULTANCY_CATEGORY,
    href: "/services/fitness-consultancy",
  },
};

// SEO
export const SITE_TITLE = 'Stefan Rusu - FitGuide';
export const SITE_DESCRIPTION = 'Personalized training and nutrition experiences';