export type DocumentationService = {
  title: string;
  description: string;
  icon?: string;
  number: string;
};

export type DocumentationData = {
  title: string;
  description: string;
  heroImage?: string;
  services: DocumentationService[];
  objective: string;
  ctaButton: {
    text: string;
    link: string;
  };
};

export const documentationData: DocumentationData = {
  title: "Documentation",
  description: "We ensure your application documents are error-free, impactful, and aligned with university requirements. Clover Overseas Education ensures that every document you submit from SOPs to resumes is professional, polished, and highlights your unique strengths.",
  heroImage: "/hong-kong.jpg",
  services: [
    {
      number: "①",
      title: "Statement of Purpose (SOP)",
      description: "Assistance in drafting compelling SOPs that reflect academic motivation, achievements, and career goals.",
      icon: "📝"
    },
    {
      number: "②",
      title: "Letters of Recommendation (LORs)",
      description: "Guidance on selecting the right referees and structuring impactful recommendation letters.",
      icon: "📄"
    },
    {
      number: "③",
      title: "Resume/CV Building",
      description: "Creating professional, academic-style resumes tailored to each university's requirements.",
      icon: "📋"
    },
    {
      number: "④",
      title: "Essays & Personal Statements",
      description: "Support in writing and refining essays for scholarships, honors programs, and competitive applications.",
      icon: "✍️"
    },
    {
      number: "⑤",
      title: "Document Proofreading & Review",
      description: "Thorough checks for grammar, formatting, and alignment with application guidelines to avoid rejections.",
      icon: "🔍"
    },
    {
      number: "⑥",
      title: "Country-Specific Templates",
      description: "Customized formats based on requirements for USA, UK, Canada, Australia, Germany, and other regions.",
      icon: "🌍"
    }
  ],
  objective: "Well-prepared documents can turn an average application into an exceptional one — Clover ensures yours stand out.",
  ctaButton: {
    text: "Start Document Preparation",
    link: "/documentation/start"
  }
};
