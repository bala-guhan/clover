export type CounsellingService = {
  title: string;
  description: string;
  icon?: string;
};

export type CounsellingData = {
  title: string;
  description: string;
  heroImage?: string;
  services: CounsellingService[];
  objective: string;
  ctaButton: {
    text: string;
    link: string;
  };
};

export const counsellingData: CounsellingData = {
  title: "Counselling",
  description: "Choosing where and what to study abroad can be a complex and overwhelming decision. At Clover Overseas Education, we simplify the process with personalized counselling sessions designed around your unique profile.",
  heroImage: "/uni-counselling.jpeg",
  services: [
    {
      title: "Profile Evaluation",
      description: "Each student's academic history, strengths, test scores, and career aspirations are carefully reviewed to create a strong foundation for decision-making.",
      icon: "📊"
    },
    {
      title: "Country & Course Guidance",
      description: "Recommendations are tailored to align with interests, budget, and long-term career opportunities.",
      icon: "🌍"
    },
    {
      title: "University Shortlisting",
      description: "Students will receive a balanced list of ambitious, moderate, and safe universities to maximize admission chances.",
      icon: "🎓"
    },
    {
      title: "Timeline Planning",
      description: "A customized roadmap is created covering application deadlines, entrance exams, and visa processes, ensuring every step is timely and organized.",
      icon: "📅"
    },
    {
      title: "Career & Industry Insights",
      description: "Using real-world data and trends, Clover helps students select programs with strong future prospects.",
      icon: "💼"
    },
    {
      title: "End-to-End Support",
      description: "Counsellors remain available throughout the journey to answer questions and provide guidance at every stage.",
      icon: "🤝"
    }
  ],
  objective: "Our objective is to enroll you into the right university and to put you on the right path and give you the clarity and confidence to begin your global education journey.",
  ctaButton: {
    text: "Book a Free Counselling Session",
    link: "/counselling/book"
  }
};
