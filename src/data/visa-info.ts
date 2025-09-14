export type VisaService = {
  title: string;
  description: string;
  icon?: string;
  image?: string;
};

export type VisaData = {
  title: string;
  description: string;
  heroImage?: string;
  services: VisaService[];
  objective: string;
  ctaButton: {
    text: string;
    link: string;
  };
};

export const visaData: VisaData = {
  title: "Visa",
  description: "With a 96% visa success rate, our expert team ensures that your visa process is smooth, stress-free, and timely. We know that a visa approval is the most crucial step before you begin your journey, and our approach is designed to minimize errors and maximize success.",
  heroImage: "/uni-stud-3hero.jpeg", // Using existing hero image
  services: [
    {
      title: "Complete Visa Application Guidance",
      description: "We give Step-by-step assistance in accurately filling out application forms to avoid mistakes and rejections.",
      icon: "📝",
      image: "/usa-uni-1.jpeg"
    },
    {
      title: "Comprehensive Document Checklist",
      description: "We Provide Personalized checklist based on your chosen country's requirements, ensuring you submit all necessary financial, academic, and personal documents.",
      icon: "📋",
      image: "/usa-uni-2.jpeg"
    },
    {
      title: "Financial Proof Assistance",
      description: "Guidance on preparing bank statements, affidavits of support, income documents, and other financial proofs to meet embassy requirements.",
      icon: "💰",
      image: "/usa-uni-3.jpeg"
    },
    {
      title: "Mock Visa Interviews",
      description: "One-on-one practice sessions to prepare you for actual embassy interviews.",
      icon: "🎤",
      image: "/uni-stud-hero.jpeg"
    },
    {
      title: "Timeline Management",
      description: "Monitoring embassy deadlines, booking appointments, and making sure your application is filed on time.",
      icon: "⏰",
      image: "/uni-stud-2hero.jpeg"
    },
    {
      title: "Country-Specific Guidance",
      description: "Our Expert advice tailored for each country's visa rules (USA F-1, Canada Study Permit, UK Tier 4, Australia Student Visa, Germany Student Visa, etc.).",
      icon: "🌍",
      image: "/uni-stud-3hero.jpeg"
    },
    {
      title: "Error Review & Final Submission",
      description: "Thorough verification before final submission to ensure there are no inconsistencies that could delay or reject your visa.",
      icon: "🔍",
      image: "/uni-stud-hero.jpeg"
    },
    {
      title: "Post-Visa Support",
      description: "Travel preparation tips and guidance on maintaining visa compliance after arrival.",
      icon: "✈️",
      image: "/uni-stud-2hero.jpeg"
    }
  ],
  objective: "From forms to final approval, we make sure your visa process is seamless and worry-free.",
  ctaButton: {
    text: "Start Visa Application",
    link: "/visa/apply"
  }
};
