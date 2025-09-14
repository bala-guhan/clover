import { countryImages } from './image-mappings';

export type FAQ = {
  question: string;
  answer: string;
}

export type WhyStudyFeature = {
  title: string;
  description: string;
  image: string;
  points: string[];
};

export type WhyStudyData = {
  title: string;
  description: string;
  features: WhyStudyFeature[];
};

export type CountryInfo = {
  id: string;
  name: string;
  flag: string;
  description?: string;
  whyChoose: string[];
  whyChooseDescription?: string;
  whyStudy?: WhyStudyData;
  costs: {
    tuition: string;
    livingExpenses: string;
    totalEstimated: string;
    note: string;
  };
  faq?: FAQ[];
  image: string;
  shortDescription: string;
}

export type RegionData = {
  id: string;
  name: string;
  description: string;
  countries: CountryInfo[];
  combinedFaq: FAQ[];
  heroImage: string;
  whyChooseDescription: string;
  whyChoose: string[];
}

export const regionsData: RegionData[] = [
  {
    id: "north-america",
    name: "North America",
    description: "Explore world-class education opportunities in North America, home to top-ranked universities and innovative research institutions.",
    heroImage: "/uni-stud-hero.jpeg",
    whyChooseDescription: "North America offers unparalleled opportunities for international students seeking world-class education and career advancement. With its diverse academic landscape and strong industry connections, this region provides an ideal environment for personal and professional growth.",
    whyChoose: [
      "🌎 Home to top-ranked universities and world-class research facilities",
      "📚 Flexible programs with interdisciplinary learning options",
      "🤝 Global exposure and diverse student community",
      "💼 Strong career pathways with OPT & CPT opportunities",
      "🚀 Innovation hub connected to leading industries"
    ],
    countries: [
      {
        id: "us",
        name: "United States of America",
        flag: "🇺🇸",
        description: "The United States of America has been a global leader in the field of education and boasts of a lion's share of top ranked universities according to all major international rankings. Few countries offer as many high ranked universities and noble laureate academia, as USA does.",
        shortDescription: "Global leader in education with top-ranked universities, diverse academic programs, and excellent career opportunities in innovation and research.",
        image: countryImages['United States'] || "/usa-uni-1.jpeg",
        whyChooseDescription: "The United States offers unparalleled opportunities for international students seeking world-class education and career advancement. With its diverse academic landscape and strong industry connections, the USA provides an ideal environment for personal and professional growth.",
        whyChoose: [
          "🌎 Home to top-ranked universities and world-class research facilities",
          "📚 Flexible programs with interdisciplinary learning options",
          "🤝 Global exposure and diverse student community",
          "💼 Strong career pathways with OPT & CPT opportunities",
          "🚀 Innovation hub connected to leading industries"
        ],
        whyStudy: {
          title: "Why Study in USA?",
          description: "The USA is home to top-ranked universities, offering rigorous academic programs, research opportunities, educational diversity, and transformative experiences for international students. From academic excellence to research possibilities and cultural enrichment, studying in the USA provides unparalleled opportunities for personal and professional growth.",
          features: [
            {
              title: "Top-Ranked Universities",
              description: "Get Admissions to best US Universities & Colleges",
              image: "/usa-uni-1.jpeg",
              points: [
                "Qualified Faculty Members",
                "Globally Recognised Degrees",
                "Application Assistance for 4500+ Universities"
              ]
            },
            {
              title: "Student Life",
              description: "Explore a Variety of Study Programs & get Hands-on Learning",
              image: "/usa-uni-2.jpeg",
              points: [
                "Flexible Options for Study Programs",
                "Lively and Vibrant Campus Life with Cultural Diversity",
                "Numerous Support Facilities for International Students"
              ]
            },
            {
              title: "Post-Study Work Opportunities",
              description: "Learn Specialized Skills & Get Work Opportunities in USA",
              image: "/usa-uni-3.jpeg",
              points: [
                "Employment in the USA and Other International Destinations",
                "Excellent Salary Potential in Every Field",
                "Strong Industry Connections and Career Support"
              ]
            }
          ]
        },
        costs: {
          tuition: "$20,000 – $50,000/year",
          livingExpenses: "$10,000 – $18,000/year",
          totalEstimated: "$30,000 – $65,000/year",
          note: "Varies by university, location & program"
        },
        faq: [
          {
            question: "What are the admission requirements for US universities?",
            answer: "US universities typically require academic transcripts, English proficiency test scores (TOEFL/IELTS), standardized test scores (SAT/GRE/GMAT), letters of recommendation, statement of purpose, and financial documentation."
          },
          {
            question: "How long does the US student visa process take?",
            answer: "The F-1 student visa process typically takes 2-8 weeks after your visa interview. It's recommended to apply at least 3-4 months before your intended start date."
          },
          {
            question: "Can I work while studying in the USA?",
            answer: "Yes, F-1 students can work on-campus up to 20 hours per week during the academic year and full-time during breaks. Off-campus work requires authorization through CPT or OPT programs."
          },
          {
            question: "What is OPT and how does it work?",
            answer: "Optional Practical Training (OPT) allows F-1 students to work in their field of study for up to 12 months after graduation. STEM graduates can extend OPT for an additional 24 months."
          },
          {
            question: "How much does it cost to study in the USA?",
            answer: "Total costs range from $30,000 to $65,000 per year, including tuition ($20,000-$50,000) and living expenses ($10,000-$18,000). Costs vary significantly by university, location, and program."
          }
        ]
      },
      {
        id: "canada",
        name: "Canada",
        flag: "🇨🇦",
        description: "Canada is renowned for its high-quality education system, multicultural environment, and excellent post-graduation work opportunities. The country offers world-class universities with affordable tuition fees and a welcoming atmosphere for international students.",
        shortDescription: "High-quality education system with multicultural environment, excellent post-graduation work opportunities, and welcoming atmosphere for international students.",
        image: countryImages['Canada'] || "/usa-uni-2.jpeg",
        whyChooseDescription: "Canada provides world-class education with excellent research facilities, multicultural environment, and strong post-study work opportunities. The country's high quality of life and welcoming atmosphere make it an ideal destination for international students.",
        whyChoose: [
          "🎓 Home to top universities like University of Toronto, UBC & McGill",
          "🌍 Multicultural environment with excellent quality of life",
          "💼 Strong post-graduation work permit (PGWP) opportunities",
          "🌏 Safe, welcoming cities with diverse communities",
          "🤝 Excellent research opportunities and industry connections"
        ],
        costs: {
          tuition: "CAD 15,000 – 35,000/year",
          livingExpenses: "CAD 10,000 – 15,000/year",
          totalEstimated: "CAD 25,000 – 50,000/year",
          note: "Varies by province, university & program"
        },
        faq: [
          {
            question: "What are the admission requirements for Canadian universities?",
            answer: "Canadian universities typically require academic transcripts, English proficiency test scores (IELTS/TOEFL), letters of recommendation, statement of purpose, and proof of financial support."
          },
          {
            question: "How does the Canadian study permit work?",
            answer: "A study permit allows you to study in Canada. You need a letter of acceptance from a Designated Learning Institution (DLI) and must prove you have sufficient funds for tuition and living expenses."
          },
          {
            question: "Can I work while studying in Canada?",
            answer: "Yes, international students can work up to 20 hours per week during academic sessions and full-time during scheduled breaks without a work permit."
          },
          {
            question: "What is the Post-Graduation Work Permit (PGWP)?",
            answer: "The PGWP allows international students who have graduated from a Canadian institution to work in Canada for up to 3 years, depending on the length of their study program."
          },
          {
            question: "How much does it cost to study in Canada?",
            answer: "Total costs range from CAD 25,000 to 50,000 per year, including tuition (CAD 15,000-35,000) and living expenses (CAD 10,000-15,000). Costs vary by province and university."
          }
        ]
      }
    ],
    combinedFaq: [
      {
        question: "What are the main differences between studying in the USA and Canada?",
        answer: "The USA offers more universities and programs with higher costs but greater career opportunities. Canada provides more affordable education, easier immigration pathways, and excellent post-graduation work permits. Both countries offer world-class education and multicultural environments."
      },
      {
        question: "Which country has better post-graduation work opportunities?",
        answer: "Both countries offer excellent opportunities. The USA has OPT (12-36 months) and H-1B visa pathways. Canada offers PGWP (up to 3 years) and easier permanent residency pathways. Canada generally has more straightforward immigration policies."
      },
      {
        question: "What are the language requirements for North American universities?",
        answer: "Both countries require English proficiency tests. The USA accepts TOEFL, IELTS, and Duolingo. Canada primarily accepts IELTS and TOEFL. Minimum scores vary by university and program, typically 6.5-7.0 for IELTS and 80-100 for TOEFL."
      },
      {
        question: "How do I choose between universities in the USA and Canada?",
        answer: "Consider factors like program ranking, cost, location, post-graduation opportunities, and personal preferences. The USA offers more variety and higher-ranked institutions, while Canada provides better value and immigration prospects."
      },
      {
        question: "What are the visa requirements for North America?",
        answer: "The USA requires an F-1 student visa with SEVIS registration. Canada requires a study permit and may need a visitor visa depending on your country. Both require proof of acceptance, financial support, and medical examinations."
      }
    ]
  },
  {
    id: "europe",
    name: "Europe",
    description: "Discover diverse educational experiences across Europe, from historic universities to cutting-edge research facilities.",
    heroImage: "/uni-stud-2hero.jpeg",
    whyChooseDescription: "Europe offers a rich tapestry of educational opportunities with centuries-old traditions and modern innovation. From the historic universities of the UK to the cutting-edge research facilities of Germany, Europe provides diverse academic experiences in a culturally rich environment.",
    whyChoose: [
      "🏛️ Home to world's oldest and most prestigious universities",
      "🌍 Diverse cultures and languages in a compact region",
      "💶 Affordable education with many tuition-free programs",
      "🚄 Easy travel between countries for cultural experiences",
      "🎓 Strong emphasis on research and academic excellence"
    ],
    countries: [
      {
        id: "uk",
        name: "United Kingdom",
        flag: "🇬🇧",
        description: "The UK is home to some of the world's most prestigious universities, including Oxford, Cambridge, and Imperial College London. The country offers excellent academic programs, strong research opportunities, and a rich cultural heritage.",
        shortDescription: "Home to world's most prestigious universities with excellent academic programs, strong research opportunities, and rich cultural heritage.",
        image: countryImages['United Kingdom (UK)'] || "/usa-uni-3.jpeg",
        whyChoose: [
          "🎓 Home to world-renowned universities like Oxford, Cambridge & Imperial",
          "🌍 English-speaking environment with rich cultural heritage",
          "💼 Strong industry connections and career opportunities",
          "🌏 Diverse cities with excellent student life",
          "🤝 Global recognition of UK degrees worldwide"
        ],
        costs: {
          tuition: "£15,000 – £35,000/year",
          livingExpenses: "£12,000 – £18,000/year",
          totalEstimated: "£27,000 – £53,000/year",
          note: "Varies by university, location & program"
        },
        faq: [
          {
            question: "What are the admission requirements for UK universities?",
            answer: "UK universities typically require academic transcripts, English proficiency (IELTS/TOEFL), personal statement, references, and sometimes entrance exams. UCAS is the central application system for undergraduate programs."
          },
          {
            question: "How does the UK student visa work?",
            answer: "The UK requires a Student visa (formerly Tier 4) for courses longer than 6 months. You need a Confirmation of Acceptance for Studies (CAS) from your university and must prove financial capability."
          },
          {
            question: "Can I work while studying in the UK?",
            answer: "Student visa holders can work up to 20 hours per week during term time and full-time during holidays. Work restrictions depend on your course level and institution."
          },
          {
            question: "What are the post-study work opportunities in the UK?",
            answer: "The UK offers a Graduate Route visa allowing international students to work for 2-3 years after graduation, depending on their degree level."
          }
        ]
      },
      {
        id: "germany",
        name: "Germany",
        flag: "🇩🇪",
        description: "Germany is known for its excellent engineering and technical programs, with many universities offering tuition-free education. The country has a strong economy and excellent research facilities.",
        shortDescription: "Excellent engineering and technical programs with many tuition-free universities, strong economy, and excellent research facilities.",
        image: countryImages['Germany'] || "/uni-stud-hero.jpeg",
        whyChoose: [
          "🎓 Many universities offer tuition-free education",
          "🔬 Excellent engineering and technical programs",
          "💼 Strong economy with excellent job opportunities",
          "🌍 Central European location with easy travel",
          "🤝 High-quality research and innovation"
        ],
        costs: {
          tuition: "€0 – €20,000/year",
          livingExpenses: "€8,000 – €12,000/year",
          totalEstimated: "€8,000 – €32,000/year",
          note: "Most public universities are tuition-free"
        },
        faq: [
          {
            question: "Is education really free in Germany?",
            answer: "Most public universities in Germany charge no tuition fees, only a small semester contribution (€150-400). Private universities and some programs may charge tuition fees."
          },
          {
            question: "Do I need to know German to study in Germany?",
            answer: "Many programs are offered in English, especially at the master's level. However, learning German is beneficial for daily life and some programs require German proficiency."
          },
          {
            question: "What are the admission requirements for German universities?",
            answer: "Requirements include academic transcripts, language proficiency (German/English), motivation letter, CV, and sometimes entrance exams. Some programs require specific subject prerequisites."
          }
        ]
      },
      {
        id: "ireland",
        name: "Ireland",
        flag: "🇮🇪",
        description: "Ireland offers high-quality education with English as the primary language and strong connections to European and global markets. The country provides excellent post-study work opportunities and a welcoming environment for international students.",
        shortDescription: "High-quality education with English as primary language, strong European connections, and excellent post-study work opportunities.",
        image: countryImages['Ireland'] || "/uni-stud-hero.jpeg",
        whyChoose: [
          "🎓 Home to top universities like Trinity College Dublin & University College Dublin",
          "🌍 English-speaking environment with strong European connections",
          "💼 Excellent post-study work opportunities and career prospects",
          "🌏 Beautiful country with rich culture and history",
          "🤝 Strong industry connections and research opportunities"
        ],
        costs: {
          tuition: "€10,000 – 25,000/year",
          livingExpenses: "€8,000 – 12,000/year",
          totalEstimated: "€18,000 – 37,000/year",
          note: "Varies by university and program"
        },
        faq: [
          {
            question: "What are the admission requirements for Irish universities?",
            answer: "Requirements include academic transcripts, English proficiency (IELTS/TOEFL), personal statement, references, and sometimes portfolio or entrance exams."
          },
          {
            question: "Can I work while studying in Ireland?",
            answer: "Student visa holders can work up to 20 hours per week during term time and full-time during holidays."
          }
        ]
      },
      {
        id: "netherlands",
        name: "Netherlands",
        flag: "🇳🇱",
        description: "The Netherlands offers world-class education with many English-taught programs and a multicultural environment. The country is known for its innovative approach to education and strong connections to European markets.",
        shortDescription: "World-class education with many English-taught programs, multicultural environment, and innovative approach to education.",
        image: "/uni-stud-2hero.jpeg",
        whyChoose: [
          "🎓 Home to top universities like University of Amsterdam & Delft University",
          "🌍 Many English-taught programs in multicultural environment",
          "💼 Strong connections to European and global markets",
          "🌏 Innovative approach to education and research",
          "🤝 Excellent quality of life and student support"
        ],
        costs: {
          tuition: "€8,000 – 20,000/year",
          livingExpenses: "€8,000 – 12,000/year",
          totalEstimated: "€16,000 – 32,000/year",
          note: "EU students pay lower tuition fees"
        },
        faq: [
          {
            question: "What are the admission requirements for Dutch universities?",
            answer: "Requirements include academic transcripts, English proficiency (IELTS/TOEFL), motivation letter, CV, and sometimes entrance exams."
          },
          {
            question: "Do I need to know Dutch to study in the Netherlands?",
            answer: "Many programs are offered in English, especially at the master's level. However, learning Dutch can be beneficial for daily life."
          }
        ]
      },
      {
        id: "switzerland",
        name: "Switzerland",
        flag: "🇨🇭",
        description: "Switzerland offers excellent education with world-renowned universities and a focus on research and innovation. The country provides high-quality education in a beautiful, safe environment.",
        shortDescription: "Excellent education with world-renowned universities, focus on research and innovation in beautiful, safe environment.",
        image: "/uni-stud-3hero.jpeg",
        whyChoose: [
          "🎓 Home to world-renowned universities like ETH Zurich & University of Zurich",
          "🔬 Strong focus on research and innovation",
          "💼 Excellent career opportunities in finance and technology",
          "🌏 Beautiful, safe country with high quality of life",
          "🤝 Strong industry connections and research funding"
        ],
        costs: {
          tuition: "CHF 1,000 – 2,000/year",
          livingExpenses: "CHF 18,000 – 24,000/year",
          totalEstimated: "CHF 19,000 – 26,000/year",
          note: "Very affordable tuition, high living costs"
        },
        faq: [
          {
            question: "What are the admission requirements for Swiss universities?",
            answer: "Requirements include academic transcripts, language proficiency (German/French/English), motivation letter, and sometimes entrance exams."
          },
          {
            question: "Is education really affordable in Switzerland?",
            answer: "Yes, tuition fees are very low (CHF 1,000-2,000/year), but living costs are high due to the country's high standard of living."
          }
        ]
      },
      {
        id: "sweden",
        name: "Sweden",
        flag: "🇸🇪",
        description: "Sweden offers high-quality education with a focus on innovation and sustainability. The country provides excellent research opportunities and a high standard of living for international students.",
        shortDescription: "High-quality education with focus on innovation and sustainability, excellent research opportunities and high standard of living.",
        image: "/uni-stud-hero.jpeg",
        whyChoose: [
          "🎓 Home to top universities like KTH & Karolinska Institute",
          "🌍 Strong focus on innovation and sustainability",
          "💼 Excellent research opportunities and funding",
          "🌏 High standard of living and work-life balance",
          "🤝 Strong industry connections and startup ecosystem"
        ],
        costs: {
          tuition: "SEK 80,000 – 140,000/year",
          livingExpenses: "SEK 8,000 – 12,000/month",
          totalEstimated: "SEK 176,000 – 284,000/year",
          note: "EU students pay no tuition fees"
        },
        faq: [
          {
            question: "What are the admission requirements for Swedish universities?",
            answer: "Requirements include academic transcripts, English proficiency (IELTS/TOEFL), motivation letter, and sometimes portfolio or entrance exams."
          },
          {
            question: "Do I need to know Swedish to study in Sweden?",
            answer: "Many programs are offered in English, especially at the master's level. Learning Swedish can be beneficial for daily life and job opportunities."
          }
        ]
      },
      {
        id: "france",
        name: "France",
        flag: "🇫🇷",
        description: "France offers world-class education with prestigious universities and a rich cultural heritage. The country provides excellent academic programs and strong connections to European and global markets.",
        shortDescription: "World-class education with prestigious universities, rich cultural heritage, and excellent academic programs.",
        image: "/uni-stud-2hero.jpeg",
        whyChoose: [
          "🎓 Home to prestigious universities like Sorbonne & École Polytechnique",
          "🌍 Rich cultural heritage and diverse academic programs",
          "💼 Strong connections to European and global markets",
          "🌏 Beautiful cities with excellent quality of life",
          "🤝 Strong research tradition and industry connections"
        ],
        costs: {
          tuition: "€2,770 – 10,000/year",
          livingExpenses: "€8,000 – 12,000/year",
          totalEstimated: "€10,770 – 22,000/year",
          note: "EU students pay lower tuition fees"
        },
        faq: [
          {
            question: "What are the admission requirements for French universities?",
            answer: "Requirements include academic transcripts, French proficiency (DELF/DALF), motivation letter, and sometimes entrance exams."
          },
          {
            question: "Do I need to know French to study in France?",
            answer: "Most programs are in French, but some are offered in English, especially at the master's level. French proficiency is generally required."
          }
        ]
      },
      {
        id: "italy",
        name: "Italy",
        flag: "🇮🇹",
        description: "Italy offers excellent education with historic universities and a focus on arts, culture, and innovation. The country provides unique academic programs and a rich cultural experience.",
        shortDescription: "Excellent education with historic universities, focus on arts, culture, and innovation with unique academic programs.",
        image: "/uni-stud-3hero.jpeg",
        whyChoose: [
          "🎓 Home to historic universities like University of Bologna & Sapienza",
          "🌍 Strong focus on arts, culture, and design",
          "💼 Excellent programs in fashion, design, and architecture",
          "🌏 Rich cultural heritage and beautiful cities",
          "🤝 Strong connections to European and global markets"
        ],
        costs: {
          tuition: "€1,000 – 4,000/year",
          livingExpenses: "€8,000 – 12,000/year",
          totalEstimated: "€9,000 – 16,000/year",
          note: "Very affordable tuition fees"
        },
        faq: [
          {
            question: "What are the admission requirements for Italian universities?",
            answer: "Requirements include academic transcripts, Italian proficiency (CELI/CILS), motivation letter, and sometimes entrance exams."
          },
          {
            question: "Do I need to know Italian to study in Italy?",
            answer: "Most programs are in Italian, but some are offered in English. Italian proficiency is generally required for most programs."
          }
        ]
      },
      {
        id: "spain",
        name: "Spain",
        flag: "🇪🇸",
        description: "Spain offers quality education with a focus on culture, arts, and business. The country provides excellent academic programs and a vibrant lifestyle for international students.",
        shortDescription: "Quality education with focus on culture, arts, and business, excellent academic programs and vibrant lifestyle.",
        image: "/uni-stud-hero.jpeg",
        whyChoose: [
          "🎓 Home to top universities like University of Barcelona & Complutense",
          "🌍 Strong focus on culture, arts, and business",
          "💼 Excellent programs in tourism, hospitality, and business",
          "🌏 Vibrant lifestyle and beautiful cities",
          "🤝 Strong connections to Latin American markets"
        ],
        costs: {
          tuition: "€1,000 – 3,000/year",
          livingExpenses: "€6,000 – 10,000/year",
          totalEstimated: "€7,000 – 13,000/year",
          note: "Very affordable education and living costs"
        },
        faq: [
          {
            question: "What are the admission requirements for Spanish universities?",
            answer: "Requirements include academic transcripts, Spanish proficiency (DELE), motivation letter, and sometimes entrance exams."
          },
          {
            question: "Do I need to know Spanish to study in Spain?",
            answer: "Most programs are in Spanish, but some are offered in English. Spanish proficiency is generally required for most programs."
          }
        ]
      },
      {
        id: "poland",
        name: "Poland",
        flag: "🇵🇱",
        description: "Poland offers high-quality education with affordable tuition fees and a growing economy. The country provides excellent academic programs and strong connections to European markets.",
        shortDescription: "High-quality education with affordable tuition fees, growing economy, and strong European market connections.",
        image: "/uni-stud-hero.jpeg",
        whyChoose: [
          "🎓 Home to top universities like University of Warsaw & Jagiellonian University",
          "💰 Very affordable tuition fees compared to Western Europe",
          "💼 Growing economy with increasing opportunities",
          "🌍 Central European location with easy travel",
          "🤝 Strong connections to European markets"
        ],
        costs: {
          tuition: "€2,000 – 4,000/year",
          livingExpenses: "€4,000 – 6,000/year",
          totalEstimated: "€6,000 – 10,000/year",
          note: "Very affordable compared to other European countries"
        },
        faq: [
          {
            question: "What are the admission requirements for Polish universities?",
            answer: "Requirements include academic transcripts, English proficiency (IELTS/TOEFL), motivation letter, and sometimes entrance exams."
          },
          {
            question: "Do I need to know Polish to study in Poland?",
            answer: "Many programs are offered in English, especially at the master's level. Learning Polish can be beneficial for daily life."
          }
        ]
      },
      {
        id: "hungary",
        name: "Hungary",
        flag: "🇭🇺",
        description: "Hungary offers quality education with affordable costs and a rich cultural heritage. The country provides excellent academic programs and a welcoming environment for international students.",
        shortDescription: "Quality education with affordable costs, rich cultural heritage, and welcoming environment for international students.",
        image: "/uni-stud-2hero.jpeg",
        whyChoose: [
          "🎓 Home to top universities like Eötvös Loránd University & Budapest University",
          "💰 Affordable education and living costs",
          "🌍 Rich cultural heritage and beautiful cities",
          "💼 Growing economy with increasing opportunities",
          "🤝 Strong connections to Central European markets"
        ],
        costs: {
          tuition: "€3,000 – 6,000/year",
          livingExpenses: "€4,000 – 6,000/year",
          totalEstimated: "€7,000 – 12,000/year",
          note: "Very affordable compared to Western Europe"
        },
        faq: [
          {
            question: "What are the admission requirements for Hungarian universities?",
            answer: "Requirements include academic transcripts, English proficiency (IELTS/TOEFL), motivation letter, and sometimes entrance exams."
          },
          {
            question: "Do I need to know Hungarian to study in Hungary?",
            answer: "Many programs are offered in English, especially at the master's level. Learning Hungarian can be beneficial for daily life."
          }
        ]
      },
      {
        id: "finland",
        name: "Finland",
        flag: "🇫🇮",
        description: "Finland offers world-class education with a focus on innovation and technology. The country provides excellent academic programs and a high standard of living for international students.",
        shortDescription: "World-class education with focus on innovation and technology, excellent academic programs and high standard of living.",
        image: "/uni-stud-3hero.jpeg",
        whyChoose: [
          "🎓 Home to top universities like University of Helsinki & Aalto University",
          "🔬 Strong focus on innovation and technology",
          "💼 Excellent research opportunities and funding",
          "🌏 High standard of living and work-life balance",
          "🤝 Strong industry connections and startup ecosystem"
        ],
        costs: {
          tuition: "€8,000 – 18,000/year",
          livingExpenses: "€7,000 – 10,000/year",
          totalEstimated: "€15,000 – 28,000/year",
          note: "EU students pay no tuition fees"
        },
        faq: [
          {
            question: "What are the admission requirements for Finnish universities?",
            answer: "Requirements include academic transcripts, English proficiency (IELTS/TOEFL), motivation letter, and sometimes portfolio or entrance exams."
          },
          {
            question: "Do I need to know Finnish to study in Finland?",
            answer: "Many programs are offered in English, especially at the master's level. Learning Finnish can be beneficial for daily life and job opportunities."
          }
        ]
      },
      {
        id: "denmark",
        name: "Denmark",
        flag: "🇩🇰",
        description: "Denmark offers high-quality education with a focus on innovation and sustainability. The country provides excellent academic programs and a high standard of living.",
        shortDescription: "High-quality education with focus on innovation and sustainability, excellent academic programs and high standard of living.",
        image: "/uni-stud-hero.jpeg",
        whyChoose: [
          "🎓 Home to top universities like University of Copenhagen & Technical University of Denmark",
          "🌍 Strong focus on innovation and sustainability",
          "💼 Excellent research opportunities and funding",
          "🌏 High standard of living and work-life balance",
          "🤝 Strong industry connections and green technology"
        ],
        costs: {
          tuition: "€6,000 – 16,000/year",
          livingExpenses: "€8,000 – 12,000/year",
          totalEstimated: "€14,000 – 28,000/year",
          note: "EU students pay no tuition fees"
        },
        faq: [
          {
            question: "What are the admission requirements for Danish universities?",
            answer: "Requirements include academic transcripts, English proficiency (IELTS/TOEFL), motivation letter, and sometimes portfolio or entrance exams."
          },
          {
            question: "Do I need to know Danish to study in Denmark?",
            answer: "Many programs are offered in English, especially at the master's level. Learning Danish can be beneficial for daily life and job opportunities."
          }
        ]
      },
      {
        id: "cyprus",
        name: "Cyprus",
        flag: "🇨🇾",
        description: "Cyprus offers quality education with English as the primary language and a Mediterranean lifestyle. The country provides excellent academic programs and a welcoming environment.",
        shortDescription: "Quality education with English as primary language, Mediterranean lifestyle, and welcoming environment for international students.",
        image: "/uni-stud-2hero.jpeg",
        whyChoose: [
          "🎓 Home to universities like University of Cyprus & European University Cyprus",
          "🌍 English-speaking environment with Mediterranean culture",
          "💼 Growing economy with increasing opportunities",
          "🌏 Beautiful Mediterranean climate and lifestyle",
          "🤝 Strong connections to European and Middle Eastern markets"
        ],
        costs: {
          tuition: "€8,000 – 12,000/year",
          livingExpenses: "€6,000 – 8,000/year",
          totalEstimated: "€14,000 – 20,000/year",
          note: "Affordable compared to other EU countries"
        },
        faq: [
          {
            question: "What are the admission requirements for Cypriot universities?",
            answer: "Requirements include academic transcripts, English proficiency (IELTS/TOEFL), motivation letter, and sometimes entrance exams."
          },
          {
            question: "Do I need to know Greek to study in Cyprus?",
            answer: "Most programs are offered in English. Learning Greek can be beneficial for daily life but is not required for studies."
          }
        ]
      },
      {
        id: "lithuania",
        name: "Lithuania",
        flag: "🇱🇹",
        description: "Lithuania offers quality education with affordable costs and a growing economy. The country provides excellent academic programs and strong connections to European markets.",
        shortDescription: "Quality education with affordable costs, growing economy, and strong European market connections.",
        image: "/uni-stud-3hero.jpeg",
        whyChoose: [
          "🎓 Home to top universities like Vilnius University & Kaunas University of Technology",
          "💰 Very affordable education and living costs",
          "💼 Growing economy with increasing opportunities",
          "🌍 Central European location with easy travel",
          "🤝 Strong connections to European markets"
        ],
        costs: {
          tuition: "€3,000 – 5,000/year",
          livingExpenses: "€3,000 – 5,000/year",
          totalEstimated: "€6,000 – 10,000/year",
          note: "Very affordable compared to other EU countries"
        },
        faq: [
          {
            question: "What are the admission requirements for Lithuanian universities?",
            answer: "Requirements include academic transcripts, English proficiency (IELTS/TOEFL), motivation letter, and sometimes entrance exams."
          },
          {
            question: "Do I need to know Lithuanian to study in Lithuania?",
            answer: "Many programs are offered in English, especially at the master's level. Learning Lithuanian can be beneficial for daily life."
          }
        ]
      },
      {
        id: "bulgaria",
        name: "Bulgaria",
        flag: "🇧🇬",
        description: "Bulgaria offers quality education with very affordable costs and a rich cultural heritage. The country provides excellent academic programs and a welcoming environment.",
        shortDescription: "Quality education with very affordable costs, rich cultural heritage, and welcoming environment for international students.",
        image: "/uni-stud-hero.jpeg",
        whyChoose: [
          "🎓 Home to universities like Sofia University & Technical University of Sofia",
          "💰 Very affordable education and living costs",
          "🌍 Rich cultural heritage and beautiful cities",
          "💼 Growing economy with increasing opportunities",
          "🤝 Strong connections to Eastern European markets"
        ],
        costs: {
          tuition: "€2,000 – 4,000/year",
          livingExpenses: "€2,000 – 4,000/year",
          totalEstimated: "€4,000 – 8,000/year",
          note: "Extremely affordable compared to other EU countries"
        },
        faq: [
          {
            question: "What are the admission requirements for Bulgarian universities?",
            answer: "Requirements include academic transcripts, English proficiency (IELTS/TOEFL), motivation letter, and sometimes entrance exams."
          },
          {
            question: "Do I need to know Bulgarian to study in Bulgaria?",
            answer: "Many programs are offered in English, especially at the master's level. Learning Bulgarian can be beneficial for daily life."
          }
        ]
      },
      {
        id: "austria",
        name: "Austria",
        flag: "🇦🇹",
        description: "Austria offers high-quality education with a focus on arts, culture, and innovation. The country provides excellent academic programs and a high standard of living.",
        shortDescription: "High-quality education with focus on arts, culture, and innovation, excellent academic programs and high standard of living.",
        image: "/uni-stud-2hero.jpeg",
        whyChoose: [
          "🎓 Home to top universities like University of Vienna & Vienna University of Technology",
          "🌍 Strong focus on arts, culture, and music",
          "💼 Excellent research opportunities and funding",
          "🌏 High standard of living and beautiful cities",
          "🤝 Strong connections to Central European markets"
        ],
        costs: {
          tuition: "€1,500 – 3,000/year",
          livingExpenses: "€8,000 – 12,000/year",
          totalEstimated: "€9,500 – 15,000/year",
          note: "Very affordable tuition fees"
        },
        faq: [
          {
            question: "What are the admission requirements for Austrian universities?",
            answer: "Requirements include academic transcripts, German proficiency (for German programs), motivation letter, and sometimes entrance exams."
          },
          {
            question: "Do I need to know German to study in Austria?",
            answer: "Many programs are in German, but some are offered in English, especially at the master's level. German proficiency is generally required for most programs."
          }
        ]
      },
      {
        id: "czechrepublic",
        name: "Czech Republic",
        flag: "🇨🇿",
        description: "Czech Republic offers quality education with affordable costs and a rich cultural heritage. The country provides excellent academic programs and a welcoming environment for international students.",
        shortDescription: "Quality education with affordable costs, rich cultural heritage, and welcoming environment for international students.",
        image: "/uni-stud-3hero.jpeg",
        whyChoose: [
          "🎓 Home to top universities like Charles University & Czech Technical University",
          "💰 Very affordable education and living costs",
          "🌍 Rich cultural heritage and beautiful cities",
          "💼 Growing economy with increasing opportunities",
          "🤝 Strong connections to Central European markets"
        ],
        costs: {
          tuition: "€3,000 – 6,000/year",
          livingExpenses: "€4,000 – 6,000/year",
          totalEstimated: "€7,000 – 12,000/year",
          note: "Very affordable compared to Western Europe"
        },
        faq: [
          {
            question: "What are the admission requirements for Czech universities?",
            answer: "Requirements include academic transcripts, English proficiency (IELTS/TOEFL), motivation letter, and sometimes entrance exams."
          },
          {
            question: "Do I need to know Czech to study in Czech Republic?",
            answer: "Many programs are offered in English, especially at the master's level. Learning Czech can be beneficial for daily life."
          }
        ]
      }
    ],
    combinedFaq: [
      {
        question: "What are the main advantages of studying in Europe?",
        answer: "Europe offers diverse educational systems, many affordable or free programs, rich cultural experiences, easy travel between countries, and strong academic traditions. Many countries offer excellent post-study work opportunities."
      },
      {
        question: "Which European countries offer free education?",
        answer: "Germany, Norway, and some programs in other Nordic countries offer tuition-free education. Many other European countries have very affordable tuition fees compared to other regions."
      },
      {
        question: "Do I need to learn multiple languages to study in Europe?",
        answer: "Many programs are offered in English, especially at the master's level. However, learning the local language enhances your experience and may be required for some programs or daily life."
      }
    ]
  },
  {
    id: "asia",
    name: "Asia",
    description: "Experience dynamic education in Asia's rapidly growing economies and world-renowned institutions.",
    heroImage: "/uni-stud-3hero.jpeg",
    whyChooseDescription: "Asia offers a dynamic educational landscape with rapidly growing economies, world-class institutions, and diverse cultural experiences. From the technological hubs of Singapore to the emerging markets of Malaysia, Asia provides excellent opportunities for international students.",
    whyChoose: [
      "🚀 Rapidly growing economies with excellent career prospects",
      "🌏 Diverse cultures and languages in one region",
      "💰 Affordable education with high quality standards",
      "🏢 Strong connections to global business and technology",
      "🎓 Mix of traditional and modern educational approaches"
    ],
    countries: [
      {
        id: "singapore",
        name: "Singapore",
        flag: "🇸🇬",
        description: "Singapore is a global education hub with world-class universities and a multicultural environment. The country offers excellent academic programs and strong connections to Asian markets.",
        shortDescription: "Global education hub with world-class universities, multicultural environment, and strong connections to Asian markets.",
        image: countryImages['Singapore'] || "/uni-stud-2hero.jpeg",
        whyChoose: [
          "🎓 Home to top universities like NUS and NTU",
          "🌍 Multicultural environment with English as primary language",
          "💼 Strong connections to Asian and global markets",
          "🌏 Safe, modern city with excellent infrastructure",
          "🤝 Gateway to Southeast Asian opportunities"
        ],
        costs: {
          tuition: "SGD 20,000 – 40,000/year",
          livingExpenses: "SGD 12,000 – 18,000/year",
          totalEstimated: "SGD 32,000 – 58,000/year",
          note: "Varies by university and program"
        },
        faq: [
          {
            question: "What are the admission requirements for Singapore universities?",
            answer: "Requirements include academic transcripts, English proficiency (IELTS/TOEFL), personal statement, references, and sometimes entrance exams. Strong academic performance is essential."
          },
          {
            question: "Can I work while studying in Singapore?",
            answer: "International students can work up to 16 hours per week during term time with a work permit. Full-time work is allowed during holidays."
          }
        ]
      },
      {
        id: "malaysia",
        name: "Malaysia",
        flag: "🇲🇾",
        description: "Malaysia offers affordable, high-quality education with English-taught programs and a multicultural environment. The country is becoming an increasingly popular destination for international students.",
        shortDescription: "Affordable, high-quality education with English-taught programs and multicultural environment, becoming increasingly popular for international students.",
        image: countryImages['Malaysia'] || "/uni-stud-3hero.jpeg",
        whyChoose: [
          "💰 Affordable education with high quality standards",
          "🌍 English-taught programs in multicultural environment",
          "💼 Growing economy with good career prospects",
          "🌏 Strategic location in Southeast Asia",
          "🤝 Friendly, welcoming atmosphere for international students"
        ],
        costs: {
          tuition: "MYR 15,000 – 35,000/year",
          livingExpenses: "MYR 8,000 – 12,000/year",
          totalEstimated: "MYR 23,000 – 47,000/year",
          note: "Very affordable compared to other destinations"
        },
        faq: [
          {
            question: "What are the admission requirements for Malaysian universities?",
            answer: "Requirements include academic transcripts, English proficiency (IELTS/TOEFL), personal statement, and references. Some programs may require entrance exams."
          },
          {
            question: "Is Malaysia a safe country for international students?",
            answer: "Yes, Malaysia is generally safe with a low crime rate. Universities provide support services for international students, and the country has a welcoming multicultural environment."
          }
        ]
      },
      {
        id: "china",
        name: "China",
        flag: "🇨🇳",
        description: "China offers world-class education with rapidly growing universities and strong connections to global markets. The country provides excellent academic programs and unique cultural experiences.",
        shortDescription: "World-class education with rapidly growing universities, strong global market connections, and unique cultural experiences.",
        image: "/uni-stud-3hero.jpeg",
        whyChoose: [
          "🎓 Home to top universities like Tsinghua & Peking University",
          "🌍 Rapidly growing economy with excellent career prospects",
          "💼 Strong connections to global markets and industries",
          "🌏 Unique cultural experience and language learning",
          "🤝 Excellent research opportunities and funding"
        ],
        costs: {
          tuition: "CNY 20,000 – 50,000/year",
          livingExpenses: "CNY 15,000 – 25,000/year",
          totalEstimated: "CNY 35,000 – 75,000/year",
          note: "Very affordable compared to Western countries"
        },
        faq: [
          {
            question: "What are the admission requirements for Chinese universities?",
            answer: "Requirements include academic transcripts, Chinese proficiency (HSK), motivation letter, and sometimes entrance exams."
          },
          {
            question: "Do I need to know Chinese to study in China?",
            answer: "Most programs are in Chinese, but some are offered in English. Chinese proficiency is generally required for most programs."
          }
        ]
      },
      {
        id: "hongkong",
        name: "Hong Kong",
        flag: "🇭🇰",
        description: "Hong Kong offers world-class education with English as the primary language and strong connections to Asian and global markets. The city provides excellent academic programs and career opportunities.",
        shortDescription: "World-class education with English as primary language, strong Asian and global market connections, and excellent career opportunities.",
        image: "/uni-stud-hero.jpeg",
        whyChoose: [
          "🎓 Home to top universities like HKU & HKUST",
          "🌍 English-speaking environment with Asian connections",
          "💼 Strong connections to Asian and global markets",
          "🌏 International city with excellent career prospects",
          "🤝 Gateway to mainland China and Southeast Asia"
        ],
        costs: {
          tuition: "HKD 120,000 – 200,000/year",
          livingExpenses: "HKD 80,000 – 120,000/year",
          totalEstimated: "HKD 200,000 – 320,000/year",
          note: "High cost but excellent value and opportunities"
        },
        faq: [
          {
            question: "What are the admission requirements for Hong Kong universities?",
            answer: "Requirements include academic transcripts, English proficiency (IELTS/TOEFL), personal statement, references, and sometimes entrance exams."
          },
          {
            question: "Can I work while studying in Hong Kong?",
            answer: "Student visa holders can work part-time on-campus and up to 20 hours per week off-campus during term time."
          }
        ]
      },
      {
        id: "dubai",
        name: "Dubai",
        flag: "🇦🇪",
        description: "Dubai offers modern education with international universities and a multicultural environment. The city provides excellent academic programs and strong connections to Middle Eastern and global markets.",
        shortDescription: "Modern education with international universities, multicultural environment, and strong Middle Eastern and global market connections.",
        image: "/uni-stud-2hero.jpeg",
        whyChoose: [
          "🎓 Home to international branch campuses of top universities",
          "🌍 Multicultural environment with English as primary language",
          "💼 Strong connections to Middle Eastern and global markets",
          "🌏 Modern city with excellent infrastructure and lifestyle",
          "🤝 Gateway to Middle East, Africa, and Asia"
        ],
        costs: {
          tuition: "AED 50,000 – 100,000/year",
          livingExpenses: "AED 30,000 – 50,000/year",
          totalEstimated: "AED 80,000 – 150,000/year",
          note: "High cost but tax-free income and excellent opportunities"
        },
        faq: [
          {
            question: "What are the admission requirements for Dubai universities?",
            answer: "Requirements include academic transcripts, English proficiency (IELTS/TOEFL), personal statement, references, and sometimes entrance exams."
          },
          {
            question: "Can I work while studying in Dubai?",
            answer: "Student visa holders can work part-time with permission from their university and the UAE authorities."
          }
        ]
      }
    ],
    combinedFaq: [
      {
        question: "What are the main advantages of studying in Asia?",
        answer: "Asia offers affordable education, rapidly growing economies, diverse cultures, and strong connections to global markets. Many countries provide excellent value for money with high-quality education."
      },
      {
        question: "Which Asian countries offer the best value for money?",
        answer: "Malaysia, Thailand, and some programs in other Southeast Asian countries offer excellent value. Singapore and Hong Kong are more expensive but provide world-class education."
      }
    ]
  },
  {
    id: "oceania",
    name: "Oceania",
    description: "Study in the vibrant educational landscape of Oceania, known for high-quality universities and multicultural environments.",
    heroImage: "/uni-stud-hero.jpeg",
    whyChooseDescription: "Oceania offers world-class education with excellent research facilities, multicultural environments, and strong post-study work opportunities. Both Australia and New Zealand provide high quality of life and welcoming atmospheres for international students.",
    whyChoose: [
      "🎓 Home to top universities with excellent research facilities",
      "🌍 English-speaking, multicultural environments",
      "💼 Strong post-study work opportunities and career prospects",
      "🌏 High quality of life in safe, modern cities",
      "🤝 Excellent industry connections and research opportunities"
    ],
    countries: [
      {
        id: "australia",
        name: "Australia",
        flag: "🇦🇺",
        description: "Australia is home to world-class universities with excellent research facilities and a multicultural environment. The country offers strong post-study work opportunities, high quality of life, and excellent weather, making it an ideal destination for international students.",
        shortDescription: "World-class education with excellent research facilities, multicultural environment, and strong post-study work opportunities in a high-quality lifestyle setting.",
        image: countryImages['Australia'] || "/usa-uni-1.jpeg",
        whyChoose: [
          "🎓 Home to top universities like ANU, University of Sydney & Melbourne",
          "🌍 Wide range of English-taught programs and multicultural environment",
          "💼 Strong career opportunities with post-study work visas",
          "🌏 Safe, modern cities with high quality of life",
          "🤝 Excellent research and industry connections"
        ],
        costs: {
          tuition: "AUD 25,000 – 45,000/year",
          livingExpenses: "AUD 15,000 – 20,000/year",
          totalEstimated: "AUD 40,000 – 65,000/year",
          note: "Varies by university, location & program"
        },
        faq: [
          {
            question: "What are the admission requirements for Australian universities?",
            answer: "Requirements include academic transcripts, English proficiency (IELTS/TOEFL), personal statement, references, and sometimes portfolio or entrance exams depending on the program."
          },
          {
            question: "How does the Australian student visa work?",
            answer: "The Student visa (subclass 500) allows you to study in Australia. You need a Confirmation of Enrolment (CoE) from your institution and must meet health and character requirements."
          },
          {
            question: "Can I work while studying in Australia?",
            answer: "Student visa holders can work up to 40 hours per fortnight during term time and unlimited hours during holidays."
          },
          {
            question: "What are the post-study work opportunities in Australia?",
            answer: "The Temporary Graduate visa (subclass 485) allows international students to work for 2-4 years after graduation, depending on their qualification level."
          }
        ]
      },
      {
        id: "newzealand",
        name: "New Zealand",
        flag: "🇳🇿",
        description: "New Zealand offers high-quality education with a focus on practical learning and research. The country provides excellent post-study work opportunities and a high standard of living in a beautiful, safe environment.",
        shortDescription: "High-quality education with practical learning focus, excellent post-study work opportunities, and high standard of living in a beautiful, safe environment.",
        image: countryImages['New Zealand'] || "/usa-uni-2.jpeg",
        whyChoose: [
          "🎓 High-quality universities like University of Auckland & Victoria University",
          "🌍 English-speaking, multicultural environment with strong global recognition",
          "💼 Excellent career opportunities with post-study work visas",
          "🌏 Safe, modern cities with high standard of living",
          "🤝 Strong industry connections and research opportunities"
        ],
        costs: {
          tuition: "NZD 25,000 – 40,000/year",
          livingExpenses: "NZD 12,000 – 18,000/year",
          totalEstimated: "NZD 37,000 – 58,000/year",
          note: "Varies by university and program"
        },
        faq: [
          {
            question: "What are the admission requirements for New Zealand universities?",
            answer: "Requirements include academic transcripts, English proficiency (IELTS/TOEFL), personal statement, references, and sometimes portfolio or entrance exams."
          },
          {
            question: "How does the New Zealand student visa work?",
            answer: "The Student visa allows you to study in New Zealand. You need an Offer of Place from your institution and must meet health and character requirements."
          },
          {
            question: "Can I work while studying in New Zealand?",
            answer: "Student visa holders can work up to 20 hours per week during term time and full-time during holidays."
          },
          {
            question: "What are the post-study work opportunities in New Zealand?",
            answer: "The Post-study work visa allows international students to work for 1-3 years after graduation, depending on their qualification level and where they studied."
          }
        ]
      }
    ],
    combinedFaq: [
      {
        question: "What are the main advantages of studying in Oceania?",
        answer: "Oceania offers world-class education, English-speaking environments, excellent post-study work opportunities, high quality of life, and strong connections to global markets. Both countries provide welcoming atmospheres for international students."
      },
      {
        question: "Which country is better for international students: Australia or New Zealand?",
        answer: "Both offer excellent opportunities. Australia has more universities and larger cities, while New Zealand offers a more intimate learning environment and easier immigration pathways. Both have strong post-study work opportunities."
      },
      {
        question: "What are the language requirements for Oceania?",
        answer: "Both countries require English proficiency tests (IELTS/TOEFL). Minimum scores typically range from 6.0-7.0 for IELTS and 60-100 for TOEFL, depending on the university and program."
      }
    ]
  },
  {
    id: "africa",
    name: "Africa",
    description: "Explore emerging educational opportunities in Africa's diverse and growing academic landscape.",
    heroImage: "/uni-stud-2hero.jpeg",
    whyChooseDescription: "Africa offers emerging educational opportunities with growing academic institutions and diverse cultural experiences. Countries like South Africa and Mauritius provide quality education with unique perspectives and growing international recognition.",
    whyChoose: [
      "🌍 Diverse cultures and unique perspectives on global issues",
      "💰 Affordable education with growing quality standards",
      "🌏 Emerging economies with increasing opportunities",
      "🎓 Growing number of internationally recognized programs",
      "🤝 Unique learning experiences in developing contexts"
    ],
    countries: [
      {
        id: "southafrica",
        name: "South Africa",
        flag: "🇿🇦",
        description: "South Africa offers quality education with internationally recognized degrees and a diverse cultural environment. The country has several top-ranked universities and provides unique perspectives on global issues.",
        shortDescription: "Quality education with internationally recognized degrees, diverse cultural environment, and unique perspectives on global issues.",
        image: countryImages['South Africa'] || "/uni-stud-hero.jpeg",
        whyChoose: [
          "🎓 Home to top universities like University of Cape Town & Stellenbosch",
          "🌍 Diverse cultural environment with English as primary language",
          "💼 Growing economy with increasing opportunities",
          "🌏 Unique perspectives on global development issues",
          "🤝 Affordable education with international recognition"
        ],
        costs: {
          tuition: "ZAR 50,000 – 120,000/year",
          livingExpenses: "ZAR 30,000 – 50,000/year",
          totalEstimated: "ZAR 80,000 – 170,000/year",
          note: "Very affordable compared to other destinations"
        },
        faq: [
          {
            question: "What are the admission requirements for South African universities?",
            answer: "Requirements include academic transcripts, English proficiency (IELTS/TOEFL), personal statement, and references. Some programs may require entrance exams or portfolio submissions."
          },
          {
            question: "Is South Africa safe for international students?",
            answer: "While South Africa has some safety concerns, universities provide support services and most campuses are safe. It's important to follow safety guidelines and stay informed about local conditions."
          }
        ]
      },
      {
        id: "mauritius",
        name: "Mauritius",
        flag: "🇲🇺",
        description: "Mauritius offers quality education in a beautiful island setting with English as the primary language. The country provides a unique blend of African, Asian, and European influences.",
        shortDescription: "Quality education in beautiful island setting with English as primary language and unique blend of African, Asian, and European influences.",
        image: countryImages['Mauritius'] || "/uni-stud-2hero.jpeg",
        whyChoose: [
          "🏝️ Beautiful island setting with tropical climate",
          "🌍 English-speaking environment with multicultural influences",
          "💼 Growing economy with increasing opportunities",
          "🌏 Gateway to African and Asian markets",
          "🤝 Affordable education with international partnerships"
        ],
        costs: {
          tuition: "MUR 200,000 – 400,000/year",
          livingExpenses: "MUR 150,000 – 250,000/year",
          totalEstimated: "MUR 350,000 – 650,000/year",
          note: "Affordable with unique island experience"
        },
        faq: [
          {
            question: "What are the admission requirements for Mauritian universities?",
            answer: "Requirements include academic transcripts, English proficiency (IELTS/TOEFL), personal statement, and references. The application process is generally straightforward."
          },
          {
            question: "What is student life like in Mauritius?",
            answer: "Mauritius offers a unique island experience with beautiful beaches, diverse culture, and a relaxed lifestyle. The country is safe and welcoming to international students."
          }
        ]
      }
    ],
    combinedFaq: [
      {
        question: "What are the main advantages of studying in Africa?",
        answer: "Africa offers affordable education, unique cultural experiences, growing academic institutions, and unique perspectives on global issues. It's an emerging destination with increasing international recognition."
      },
      {
        question: "Are African degrees recognized internationally?",
        answer: "Many African universities, especially in South Africa, have international recognition and partnerships. It's important to research specific institutions and their global standing."
      },
      {
        question: "What are the language requirements for African universities?",
        answer: "Most universities in South Africa and Mauritius use English as the primary language of instruction. English proficiency tests (IELTS/TOEFL) are typically required."
      }
    ]
  }
];
