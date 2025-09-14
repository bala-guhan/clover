export type UniversitySelectionService = {
  title: string;
  description: string;
  icon?: string;
};

export type UniversitySelectionData = {
  title: string;
  description: string;
  heroImage?: string;
  services: UniversitySelectionService[];
  objective: string;
  ctaButton: {
    text: string;
    link: string;
  };
};

export const universitySelectionData: UniversitySelectionData = {
  title: "University Selection",
  description: "With 31+ countries and 800+ top universities in our network, we provide a smart, data-driven university shortlisting process. Using advanced AI tools and our expert knowledge, we match your profile with the most relevant universities and programs.",
  heroImage: "/uni-stud-3hero.jpeg", // Using existing hero image
  services: [
    {
      title: "Profile-Based Shortlisting",
      description: "We carefully evaluate your academic records, test scores, and future aspirations to recommend universities where you have the highest chances of admission.",
      icon: "🎯"
    },
    {
      title: "AI-Powered Matching",
      description: "Clover uses advanced tools to suggest a balanced mix of ambitious, moderate, and safe universities to maximize your opportunities.",
      icon: "🤖"
    },
    {
      title: "Global Reach",
      description: "With 31+ countries and 800+ top global universities in our network, we ensure you have access to world-class education options, no matter where you wish to study.",
      icon: "🌐"
    },
    {
      title: "Cost & Ranking Comparison",
      description: "We provide detailed insights on tuition fees, living expenses, global rankings, location advantages, and post-study work opportunities.",
      icon: "📊"
    },
    {
      title: "Scholarship Recommendations",
      description: "Clover identifies universities offering merit-based and need-based scholarships that fit your profile.",
      icon: "💰"
    },
    {
      title: "Application Strategy",
      description: "We guide you on applying to a diverse set of institutions, helping you balance your choices and improve admission outcomes.",
      icon: "📋"
    }
  ],
  objective: "At Clover, we don't just help you pick a university, we help you choose the right one to shape your future.",
  ctaButton: {
    text: "Start University Selection",
    link: "/university-selection/start"
  }
};
