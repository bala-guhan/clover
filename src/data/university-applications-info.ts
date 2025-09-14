export type UniversityApplicationService = {
  title: string;
  description: string;
  icon?: string;
  number: number;
};

export type UniversityApplicationsData = {
  title: string;
  heading: string;
  subheading: string;
  description: string;
  heroImage?: string;
  services: UniversityApplicationService[];
  objective: string;
  ctaButton: {
    text: string;
    link: string;
  };
};

export const universityApplicationsData: UniversityApplicationsData = {
  title: "University Application & Admission",
  heading: "Your Admission Partner, Every Step of the Way",
  subheading: "Step-by-step guidance from filling applications to securing your offer letter — so you can focus on your future, not paperwork.",
  description: "End-to-End Application Support - We handle everything from filling forms to securing your admission letter. Our team takes complete responsibility for your university applications:",
  heroImage: "/uni-stud-hero.jpeg", // Using existing hero image
  services: [
    {
      number: 1,
      title: "Application Form Filling",
      description: "We Ensure every detail is entered correctly to avoid delays or rejections.",
      icon: "📝"
    },
    {
      number: 2,
      title: "Document Upload & Verification",
      description: "Cross-checking transcripts, SOPs, LORs, and financial documents to meet university requirements.",
      icon: "📄"
    },
    {
      number: 3,
      title: "Deadline Tracking",
      description: "We Monitor application dates and ensuring submissions are made well before closing dates.",
      icon: "⏰"
    },
    {
      number: 4,
      title: "Application Fee Management",
      description: "Clover gives Guidance on payment methods and support for fee waivers where available.",
      icon: "💳"
    },
    {
      number: 5,
      title: "Follow-Up with Universities",
      description: "Coordinating directly with admissions teams to track application status and resolve any issues.",
      icon: "📞"
    },
    {
      number: 6,
      title: "Offer Letter Assistance",
      description: "Reviewing offer letters, explaining conditions (if any), and advising on acceptance procedures.",
      icon: "🎓"
    },
    {
      number: 7,
      title: "Deferral & Re-Application Guidance",
      description: "Support in case a student wishes to defer admission or reapply in a future intake.",
      icon: "🔄"
    }
  ],
  objective: "Clover ensures that your applications are accurate, on time, and strategically submitted — increasing your chances of multiple admissions offers.",
  ctaButton: {
    text: "Start Your Application",
    link: "/university-applications/start"
  }
};
