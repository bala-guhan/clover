export type ScholarshipService = {
  title: string;
  description: string;
  icon?: string;
  number: string;
};

export type ScholarshipData = {
  title: string;
  description: string;
  heroImage?: string;
  services: ScholarshipService[];
  objective: string;
  ctaButton: {
    text: string;
    link: string;
  };
};

export const scholarshipData: ScholarshipData = {
  title: "Scholarship",
  description: "At Clover Overseas Education, we believe that financial limitations should never stand in the way of your global education dream. That's why we offer complete assistance in securing scholarships, grants, and education loans, making your journey abroad more affordable. We have successfully helped students secure over $1,700,000 in scholarships worldwide, giving them access to world-class universities with reduced financial burden.",
  heroImage: "/uni-stud-3hero.jpeg", // Using existing hero image
  services: [
    {
      number: "②",
      title: "University Scholarships",
      description: "We help identify and apply for merit-based, need-based, and program-specific scholarships offered by universities.",
      icon: "🎓"
    },
    {
      number: "③",
      title: "Government & Country-Specific Scholarships",
      description: "Clover guides you in applying for prestigious programs like Chevening (UK), Fulbright (USA), DAAD (Germany), Erasmus+ (Europe), Australia Awards, and more.",
      icon: "🏛️"
    },
    {
      number: "④",
      title: "Private & External Scholarships",
      description: "We assist with applications to international foundations, NGOs, and corporate-sponsored funding opportunities.",
      icon: "🏢"
    },
    {
      number: "⑤",
      title: "Scholarship Application Support",
      description: "Clover helps you prepare strong essays, letters of recommendation, and financial documents to maximize your chances of winning funding.",
      icon: "📝"
    },
    {
      number: "⑥",
      title: "Education Loan Guidance",
      description: "We connect you with trusted banks and NBFC partners, assist with paperwork, and ensure quick approvals at competitive interest rates.",
      icon: "💰"
    },
    {
      number: "⑦",
      title: "Budget Planning",
      description: "We guide you on planning tuition, living expenses, and travel costs so you can manage finances confidently.",
      icon: "📊"
    }
  ],
  objective: "At Clover, we make sure money never comes in the way of your education — with $1.7M+ scholarships already secured for our students.",
  ctaButton: {
    text: "Start Scholarship Search",
    link: "/scholarship/search"
  }
};
