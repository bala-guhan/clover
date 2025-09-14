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

export type CountryInfo ={
  id: string;
  name: string;
  flag: string;
  region: string;
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
}

export type RegionInfo = {
  id: string;
  name: string;
  description: string;
  countries: string[]; // Array of country IDs
}

export const countriesData: CountryInfo[] = [
  {
    id: "us",
    name: "United States of America",
    flag: "🇺🇸",
    region: "north-america",
    description: "The United States of America has been a global leader in the field of education and boasts of a lion's share of top ranked universities according to all major international rankings. Few countries offer as many high ranked universities and noble laureate academia, as USA does.",
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
        question: "What are the English language requirements for studying in the USA?",
        answer: "Most US universities require international students to demonstrate English proficiency through tests like TOEFL (minimum 80-100) or IELTS (minimum 6.5-7.0). Some universities also accept Duolingo English Test or Cambridge English qualifications. Requirements vary by institution and program level."
      },
      {
        question: "How long does the US student visa process take?",
        answer: "The F-1 student visa process typically takes 3-8 weeks after your university issues the I-20 form. You'll need to pay the SEVIS fee, complete the DS-160 form, schedule an interview at the US embassy/consulate, and attend the interview. Processing times can vary based on location and season."
      },
      {
        question: "Can I work while studying in the USA?",
        answer: "Yes, F-1 visa holders can work on-campus for up to 20 hours per week during the academic year and full-time during breaks. After completing one academic year, you may apply for Optional Practical Training (OPT) for off-campus work related to your field of study."
      },
      {
        question: "What is the difference between undergraduate and graduate programs in the USA?",
        answer: "Undergraduate programs (Bachelor's) typically take 4 years and focus on general education plus major coursework. Graduate programs include Master's (1-2 years) and PhD programs (4-7 years) with specialized, research-intensive coursework. Graduate programs often require GRE/GMAT scores and prior degree completion."
      },
      {
        question: "How much money do I need to show for the student visa?",
        answer: "You must demonstrate financial ability to cover your first year of study and living expenses. This typically ranges from $30,000-$65,000 depending on your university and location. You can show personal funds, family support, scholarships, or sponsor letters from relatives or organizations."
      },
      {
        question: "What is the academic year structure in US universities?",
        answer: "Most US universities follow a semester system (Fall: August-December, Spring: January-May) or quarter system (Fall, Winter, Spring quarters). Summer sessions are often optional. The academic year typically runs from late August to early May, with breaks for Thanksgiving, winter holidays, and spring break."
      }
    ]
  },
  {
    id: "canada",
    name: "Canada",
    flag: "🇨🇦",
    region: "north-america",
    description: "Canada is renowned for its high-quality education system, multicultural society, and welcoming environment for international students. With world-class universities and a strong focus on research and innovation, Canada offers an excellent pathway to permanent residency.",
    whyChooseDescription: "Canada provides an exceptional educational experience with its world-renowned universities, multicultural environment, and excellent post-graduation work opportunities. The country's commitment to diversity and inclusion makes it an ideal destination for international students.",
    whyChoose: [
      "🌎 High-quality education with globally recognized degrees",
      "📚 Affordable compared to other top destinations",
      "🤝 Multicultural environment and welcoming immigration policies",
      "💼 Post-Graduation Work Permit (up to 3 years)",
      "🌲 Safe, diverse, and high quality of life"
    ],
    whyStudy: {
      title: "Why Study in Canada?",
      description: "Canada offers world-class education with globally recognized degrees, multicultural environment, and excellent post-graduation opportunities. From top-ranked universities to welcoming immigration policies, Canada provides a comprehensive educational experience.",
      features: [
        {
          title: "Top Universities",
          description: "Get Admissions to best Canadian Universities & Colleges",
          image: "/canada-uni-1.jpeg",
          points: [
            "World-Class Faculty Members",
            "Globally Recognised Degrees",
            "Application Assistance for 200+ Universities"
          ]
        },
        {
          title: "Student Life",
          description: "Explore Multicultural Environment & get Hands-on Learning",
          image: "/canada-uni-2.jpeg",
          points: [
            "Diverse Study Programs",
            "Vibrant Multicultural Campus Life",
            "Comprehensive Support for International Students"
          ]
        },
        {
          title: "Post-Study Work Opportunities",
          description: "Learn Specialized Skills & Get Work Opportunities in Canada",
          image: "/canada-uni-3.jpeg",
          points: [
            "Post-Graduation Work Permit (up to 3 years)",
            "Pathway to Permanent Residency",
            "Excellent Career Opportunities in Every Field"
          ]
        }
      ]
    },
    costs: {
      tuition: "$15,000 – $35,000/year",
      livingExpenses: "$10,000 – $15,000/year",
      totalEstimated: "$25,000 – $50,000/year",
      note: "Varies by university, location & program"
    },
    faq: [
      {
        question: "What are the English language requirements for studying in Canada?",
        answer: "Most Canadian universities require international students to demonstrate English proficiency through tests like IELTS (minimum 6.0-7.0) or TOEFL (minimum 80-100). Some universities also accept Cambridge English qualifications or Duolingo English Test. Requirements vary by institution and program level."
      },
      {
        question: "How long does the Canadian student visa process take?",
        answer: "The Canadian study permit process typically takes 4-8 weeks after you receive your Letter of Acceptance. You'll need to complete the online application, pay the application fee, and may need to attend a biometric appointment. Processing times can vary based on your country of residence."
      },
      {
        question: "Can I work while studying in Canada?",
        answer: "Yes, international students with a valid study permit can work on-campus for unlimited hours and off-campus for up to 20 hours per week during the academic year and full-time during breaks. You may also apply for a Post-Graduation Work Permit (PGWP) after completing your studies."
      },
      {
        question: "What is the Post-Graduation Work Permit (PGWP)?",
        answer: "The PGWP allows international students to work in Canada for up to 3 years after completing their studies. The duration depends on your program length. This is an excellent pathway to gain Canadian work experience and potentially apply for permanent residency."
      },
      {
        question: "How much money do I need to show for the Canadian student visa?",
        answer: "You must demonstrate financial ability to cover your first year of study and living expenses, typically ranging from $25,000-$50,000 CAD depending on your university and location. You can show personal funds, family support, scholarships, or sponsor letters."
      },
      {
        question: "What is the academic year structure in Canadian universities?",
        answer: "Most Canadian universities follow a semester system (Fall: September-December, Winter: January-April) with optional summer sessions (May-August). Some institutions offer trimester or quarter systems. The academic year typically runs from September to April."
      }
    ]
  },
  {
    id: "uk",
    name: "UK",
    flag: "🇬🇧",
    region: "europe",
    description: "The United Kingdom is home to some of the world's most prestigious universities including Oxford, Cambridge, and the London School of Economics. With shorter program durations and globally recognized degrees, the UK offers excellent value for money and strong career prospects.",
    whyChooseDescription: "The UK provides world-class education with shorter program durations, globally recognized degrees, and excellent career prospects. The country's rich cultural heritage and strong business connections offer unique opportunities for international students.",
    whyChoose: [
      "🎓 World-renowned universities like Oxford, Cambridge & LSE",
      "⏳ Shorter programs (Bachelor's in 3 years, Master's in 1 year)",
      "🌍 Globally recognized degrees with strong employability",
      "💼 Post-Study Work Visa (2 years)",
      "🏛️ Rich cultural, historical & global business exposure"
    ],
    whyStudy: {
      title: "Why Study in UK?",
      description: "The UK offers world-renowned universities, shorter program durations, and globally recognized degrees. From Oxford and Cambridge to modern institutions, the UK provides excellent education with strong career prospects and cultural enrichment.",
      features: [
        {
          title: "Prestigious Universities",
          description: "Get Admissions to world-renowned UK Universities & Colleges",
          image: "/uk-uni-1.jpeg",
          points: [
            "Oxford, Cambridge & LSE",
            "Globally Recognised Degrees",
            "Application Assistance for 150+ Universities"
          ]
        },
        {
          title: "Student Life",
          description: "Explore Rich Culture & get Hands-on Learning",
          image: "/uk-uni-2.jpeg",
          points: [
            "Shorter Program Durations",
            "Rich Cultural & Historical Exposure",
            "Comprehensive Support for International Students"
          ]
        },
        {
          title: "Post-Study Work Opportunities",
          description: "Learn Specialized Skills & Get Work Opportunities in UK",
          image: "/uk-uni-3.jpeg",
          points: [
            "Post-Study Work Visa (2 years)",
            "Strong Global Business Connections",
            "Excellent Career Opportunities in Every Field"
          ]
        }
      ]
    },
    costs: {
      tuition: "£12,000 – £38,000/year",
      livingExpenses: "£10,000 – £15,000/year",
      totalEstimated: "£22,000 – £53,000/year",
      note: "Varies by university, location & program"
    },
    faq: [
      {
        question: "What are the English language requirements for studying in the UK?",
        answer: "Most UK universities require international students to demonstrate English proficiency through tests like IELTS (minimum 6.0-7.5) or TOEFL (minimum 80-110). Some universities also accept Cambridge English qualifications, PTE Academic, or Duolingo English Test. Requirements vary by institution and program level."
      },
      {
        question: "How long does the UK student visa process take?",
        answer: "The UK student visa (Tier 4/Student Route) process typically takes 3-8 weeks after your university issues the CAS (Confirmation of Acceptance for Studies). You'll need to complete the online application, pay the application fee and healthcare surcharge, and attend a biometric appointment."
      },
      {
        question: "Can I work while studying in the UK?",
        answer: "Yes, international students with a valid student visa can work part-time during term time (up to 20 hours per week) and full-time during holidays. After graduation, you may apply for the Graduate Route visa which allows you to work in the UK for up to 2 years (3 years for PhD graduates)."
      },
      {
        question: "What is the Graduate Route visa?",
        answer: "The Graduate Route visa allows international students to stay in the UK for up to 2 years after completing their studies (3 years for PhD graduates) to work or look for work. This is an excellent opportunity to gain UK work experience and potentially transition to other visa categories."
      },
      {
        question: "How much money do I need to show for the UK student visa?",
        answer: "You must demonstrate financial ability to cover your tuition fees and living expenses. For London, you need £1,334 per month (up to 9 months), and for outside London, £1,023 per month. You can show personal funds, family support, or official financial sponsorship."
      },
      {
        question: "What is the academic year structure in UK universities?",
        answer: "Most UK universities follow a semester or term system. The academic year typically runs from September to June, with three terms: Autumn (September-December), Spring (January-March), and Summer (April-June). Some universities offer shorter, more intensive programs."
      }
    ]
  },
  {
    id: "ireland",
    name: "Ireland",
    flag: "🇮🇪",
    region: "europe",
    description: "Ireland is home to world-class universities with a strong focus on research and innovation. As an English-speaking EU member country, Ireland offers excellent education opportunities with global recognition and post-study work opportunities.",
    whyChoose: [
      "🎓 Home to top universities with strong research focus",
      "💼 Post-Study Work Visa (up to 2 years)",
      "🌍 English-speaking, EU member country with global recognition",
      "📚 Growing hub for technology, business & pharmaceuticals",
      "🤝 Safe, welcoming, and multicultural environment"
    ],
    costs: {
      tuition: "€10,000 – €25,000/year",
      livingExpenses: "€8,000 – €12,000/year",
      totalEstimated: "€18,000 – €37,000/year",
      note: "Varies by university, location & program"
    },
    faq: [
      {
        question: "What are the English language requirements for studying in Ireland?",
        answer: "Since Ireland is an English-speaking country, international students need to demonstrate English proficiency through tests like IELTS (minimum 6.0-7.0) or TOEFL (minimum 80-100). Some universities also accept Cambridge English qualifications, PTE Academic, or Duolingo English Test. Requirements vary by institution and program level."
      },
      {
        question: "How long does the Irish student visa process take?",
        answer: "The Irish student visa process typically takes 4-8 weeks after you receive your university admission letter. You'll need to apply at the Irish embassy/consulate in your country, provide financial proof, health insurance, and other required documents. Processing times can vary based on your country of residence."
      },
      {
        question: "Can I work while studying in Ireland?",
        answer: "Yes, international students with a valid student visa can work part-time for up to 20 hours per week during term time and full-time during vacation periods. After graduation, you may apply for the Third Level Graduate Scheme which allows you to work in Ireland for up to 2 years."
      },
      {
        question: "What is the Third Level Graduate Scheme in Ireland?",
        answer: "The Third Level Graduate Scheme allows international graduates to stay in Ireland for up to 2 years after completing their studies to look for employment. This scheme provides time to find a job that matches your qualifications and potentially transition to a work permit or critical skills employment permit."
      },
      {
        question: "How much money do I need to show for the Irish student visa?",
        answer: "You must demonstrate financial ability to cover your tuition fees and living expenses, typically €7,000 per year for living expenses plus your tuition fees. You can show personal funds, family support, scholarships, or sponsor letters. The exact amount varies based on your program duration and location."
      },
      {
        question: "What is the academic year structure in Irish universities?",
        answer: "Irish universities typically follow a semester system with Autumn Semester (September-December) and Spring Semester (January-May). The academic year usually runs from September to May, with summer sessions available from May to August. Some institutions offer trimester systems or flexible start dates."
      }
    ]
  },
  {
    id: "netherlands",
    name: "Netherlands",
    flag: "🇳🇱",
    region: "europe",
    description: "The Netherlands is renowned for its high-quality, innovative education system with a wide range of English-taught programs. Known for its progressive approach to education and strong career prospects, the Netherlands offers an excellent study abroad experience.",
    whyChoose: [
      "🎓 Renowned for high-quality, innovative education",
      "🌍 Wide range of English-taught programs",
      "💼 Strong career prospects with post-study work visa (1 year, extendable)",
      "🚲 Safe, student-friendly, and globally connected country",
      "🌱 High quality of life with a focus on sustainability"
    ],
    costs: {
      tuition: "€6,000 – €15,000/year (EU), €8,000 – €20,000/year (Non-EU)",
      livingExpenses: "€8,000 – €12,000/year",
      totalEstimated: "€16,000 – €32,000/year",
      note: "Varies by university, location & program"
    },
    faq: [
      {
        question: "What are the English language requirements for studying in the Netherlands?",
        answer: "Most Dutch universities offer programs in English and require international students to demonstrate English proficiency through tests like IELTS (minimum 6.0-7.0) or TOEFL (minimum 80-100). Some universities also accept Cambridge English qualifications, PTE Academic, or Duolingo English Test. Requirements vary by institution and program level."
      },
      {
        question: "How long does the Dutch student visa process take?",
        answer: "The Dutch student visa (MVV) and residence permit process typically takes 2-4 weeks after your university submits the application on your behalf. The university will apply for your MVV through the Immigration and Naturalisation Service (IND). You'll need to complete the application and provide required documents."
      },
      {
        question: "Can I work while studying in the Netherlands?",
        answer: "Yes, international students with a valid residence permit can work part-time for up to 16 hours per week during term time and full-time during vacation periods. You need to obtain a work permit (TWV) from the Employee Insurance Agency (UWV). After graduation, you may apply for an orientation year permit."
      },
      {
        question: "What is the orientation year permit in the Netherlands?",
        answer: "The orientation year permit allows international graduates to stay in the Netherlands for up to 1 year after completing their studies to look for employment. This permit can be extended if you find a job. It's an excellent opportunity to gain Dutch work experience and potentially transition to other residence permits."
      },
      {
        question: "How much money do I need to show for the Dutch student visa?",
        answer: "You must demonstrate financial ability to cover your living expenses, typically €10,000-12,000 per year. You can show this through a blocked account, scholarship certificate, or financial guarantee. The exact amount varies based on your program duration and location."
      },
      {
        question: "What is the academic year structure in Dutch universities?",
        answer: "Dutch universities typically follow a semester system with Autumn Semester (September-January) and Spring Semester (February-June). The academic year usually runs from September to June, with breaks between semesters. Some institutions offer trimester systems or flexible start dates."
      }
    ]
  },
  {
    id: "switzerland",
    name: "Switzerland",
    flag: "🇨🇭",
    region: "europe",
    description: "Switzerland is home to world-class institutions like ETH Zurich and EPFL, offering excellent education in a multilingual environment with strong links to finance, hospitality, and research industries.",
    whyChoose: [
      "🎓 Home to world-class institutions (ETH Zurich, EPFL)",
      "🌍 Multilingual environment with global exposure",
      "💼 Strong links to finance, hospitality, pharma & research industries",
      "🏔️ Safe, high standard of living in the heart of Europe",
      "🤝 Opportunities in international organizations (UN, WHO, WTO)"
    ],
    costs: {
      tuition: "CHF 1,000 – CHF 5,000/year",
      livingExpenses: "CHF 18,000 – CHF 28,000/year",
      totalEstimated: "CHF 20,000 – CHF 33,000/year",
      note: "Varies by university, location & program"
    },
    faq: [
      {
        question: "What are the language requirements for studying in Switzerland?",
        answer: "Switzerland has four official languages (German, French, Italian, Romansh). Most universities offer programs in German, French, or English. You may need to prove proficiency in the language of instruction through tests like IELTS/TOEFL for English, TestDaF/Goethe for German, or DELF/DALF for French. Some programs require multiple languages."
      },
      {
        question: "How long does the Swiss student visa process take?",
        answer: "The Swiss student visa process typically takes 8-12 weeks after you receive your university admission letter. You'll need to apply at the Swiss embassy/consulate in your country, provide financial proof, health insurance, and other required documents. Processing times can vary based on your country of residence."
      },
      {
        question: "Can I work while studying in Switzerland?",
        answer: "Yes, international students with a valid student visa can work part-time for up to 15 hours per week during term time and full-time during vacation periods. You need to obtain a work permit from the cantonal authorities. After graduation, you may apply for a 6-month job search permit."
      },
      {
        question: "What is the 6-month job search permit in Switzerland?",
        answer: "The 6-month job search permit allows international graduates to stay in Switzerland for up to 6 months after completing their studies to look for employment. This permit provides time to find a job that matches your qualifications and potentially transition to a work permit or settlement permit."
      },
      {
        question: "How much money do I need to show for the Swiss student visa?",
        answer: "You must demonstrate financial ability to cover your living expenses, typically CHF 21,000 per year. You can show this through a blocked account, scholarship certificate, or financial guarantee. The exact amount varies based on your program duration and location."
      },
      {
        question: "What is the academic year structure in Swiss universities?",
        answer: "Swiss universities typically follow a semester system with Autumn Semester (September-December) and Spring Semester (February-June). The academic year usually runs from September to June, with breaks between semesters. Some institutions offer trimester systems or flexible start dates."
      }
    ]
  },
  {
    id: "sweden",
    name: "Sweden",
    flag: "🇸🇪",
    region: "europe",
    description: "Sweden is known for innovation, research, and top-ranked universities. With a wide range of English-taught programs and post-study work opportunities in tech, design, and sustainability.",
    whyChoose: [
      "🎓 Known for innovation, research, and top-ranked universities",
      "🌍 Wide range of English-taught programs",
      "💼 Post-study work opportunities in tech, design & sustainability",
      "🌱 Progressive, student-friendly society with high quality of life",
      "🤝 Strong focus on sustainability, innovation & equality"
    ],
    costs: {
      tuition: "SEK 80,000 – 200,000/year (€7,000 – €18,000)",
      livingExpenses: "SEK 90,000 – 120,000/year (€8,000 – €11,000)",
      totalEstimated: "SEK 170,000 – 320,000/year (€15,000 – €29,000)",
      note: "Varies by university, location & program"
    },
    faq: [
      {
        question: "What are the English language requirements for studying in Sweden?",
        answer: "Most Swedish universities offer programs in English and require international students to demonstrate English proficiency through tests like IELTS (minimum 6.5-7.0) or TOEFL (minimum 90-100). Some universities also accept Cambridge English qualifications, PTE Academic, or Duolingo English Test. Requirements vary by institution and program level."
      },
      {
        question: "How long does the Swedish student visa process take?",
        answer: "The Swedish residence permit for studies process typically takes 2-4 weeks after your university submits the application on your behalf. The university will apply for your residence permit through the Swedish Migration Agency. You'll need to complete the application and provide required documents."
      },
      {
        question: "Can I work while studying in Sweden?",
        answer: "Yes, international students with a valid residence permit can work part-time during term time and full-time during vacation periods. There are no specific hour restrictions for students. After graduation, you may apply for a 6-month job search permit to look for employment."
      },
      {
        question: "What is the 6-month job search permit in Sweden?",
        answer: "The 6-month job search permit allows international graduates to stay in Sweden for up to 6 months after completing their studies to look for employment. This permit provides time to find a job that matches your qualifications and potentially transition to a work permit or residence permit."
      },
      {
        question: "How much money do I need to show for the Swedish student visa?",
        answer: "You must demonstrate financial ability to cover your living expenses, typically SEK 8,514 per month (as of 2024). You can show this through a blocked account, scholarship certificate, or financial guarantee. The exact amount varies based on your program duration and location."
      },
      {
        question: "What is the academic year structure in Swedish universities?",
        answer: "Swedish universities typically follow a semester system with Autumn Semester (August-January) and Spring Semester (January-June). The academic year usually runs from August to June, with breaks between semesters. Some institutions offer trimester systems or flexible start dates."
      }
    ]
  },
  {
    id: "poland",
    name: "Poland",
    flag: "🇵🇱",
    region: "europe",
    description: "Poland offers affordable, high-quality education with globally recognized degrees. Many English-taught programs across top universities with growing job opportunities in IT, engineering, and business.",
    whyChoose: [
      "🎓 Affordable, high-quality education with globally recognized degrees",
      "🌍 Many English-taught programs across top universities",
      "💼 Growing job opportunities in IT, engineering & business",
      "🏰 Rich cultural heritage and central European location",
      "🤝 Budget-friendly compared to other EU countries"
    ],
    costs: {
      tuition: "€2,000 – €6,000/year",
      livingExpenses: "€6,000 – €9,000/year",
      totalEstimated: "€8,000 – €15,000/year",
      note: "Varies by university, location & program"
    },
    faq: [
      {
        question: "What are the English language requirements for studying in Poland?",
        answer: "Most Polish universities offer programs in English and require international students to demonstrate English proficiency through tests like IELTS (minimum 6.0-6.5) or TOEFL (minimum 80-90). Some universities also accept Cambridge English qualifications, PTE Academic, or Duolingo English Test. Requirements vary by institution and program level."
      },
      {
        question: "How long does the Polish student visa process take?",
        answer: "The Polish student visa process typically takes 2-4 weeks after you receive your university admission letter. You'll need to apply at the Polish embassy/consulate in your country, provide financial proof, health insurance, and other required documents. Processing times can vary based on your country of residence."
      },
      {
        question: "Can I work while studying in Poland?",
        answer: "Yes, international students with a valid student visa can work part-time during term time and full-time during vacation periods. You need to obtain a work permit for employment. After graduation, you may apply for a temporary residence permit to look for employment."
      },
      {
        question: "What are the post-study work opportunities in Poland?",
        answer: "After graduation, international students can apply for a temporary residence permit to look for employment. Poland offers excellent career opportunities in IT, engineering, business, and other sectors with competitive salaries and career growth prospects, especially in major cities like Warsaw and Krakow."
      },
      {
        question: "How much money do I need to show for the Polish student visa?",
        answer: "You must demonstrate financial ability to cover your living expenses, typically €615 per month. You can show this through a blocked account, scholarship certificate, or financial guarantee. The exact amount varies based on your program duration and location."
      },
      {
        question: "What is the academic year structure in Polish universities?",
        answer: "Polish universities typically follow a semester system with Winter Semester (October-February) and Summer Semester (February-June). The academic year usually runs from October to June, with breaks between semesters. Some institutions offer trimester systems or flexible start dates."
      }
    ]
  },
  {
    id: "hungary",
    name: "Hungary",
    flag: "🇭🇺",
    region: "europe",
    description: "Hungary offers affordable, high-quality universities with strong focus on medicine, engineering, and sciences. Increasing number of English-taught programs with EU-recognized degrees.",
    whyChoose: [
      "🎓 Affordable, high-quality universities with strong focus on medicine, engineering & sciences",
      "🌍 Increasing number of English-taught programs",
      "💼 EU-recognized degrees with growing career opportunities",
      "🏰 Culturally rich, historic cities like Budapest",
      "🤝 Cost-effective compared to Western Europe"
    ],
    costs: {
      tuition: "€2,000 – €7,000/year",
      livingExpenses: "€5,000 – €8,000/year",
      totalEstimated: "€7,000 – €15,000/year",
      note: "Varies by university, location & program"
    },
    faq: [
      {
        question: "What are the English language requirements for studying in Hungary?",
        answer: "Most Hungarian universities offer programs in English and require international students to demonstrate English proficiency through tests like IELTS (minimum 6.0-6.5) or TOEFL (minimum 80-90). Some universities also accept Cambridge English qualifications, PTE Academic, or Duolingo English Test. Requirements vary by institution and program level."
      },
      {
        question: "How long does the Hungarian student visa process take?",
        answer: "The Hungarian student visa process typically takes 2-4 weeks after you receive your university admission letter. You'll need to apply at the Hungarian embassy/consulate in your country, provide financial proof, health insurance, and other required documents. Processing times can vary based on your country of residence."
      },
      {
        question: "Can I work while studying in Hungary?",
        answer: "Yes, international students with a valid student visa can work part-time during term time and full-time during vacation periods. You need to obtain a work permit for employment. After graduation, you may apply for a temporary residence permit to look for employment."
      },
      {
        question: "What are the post-study work opportunities in Hungary?",
        answer: "After graduation, international students can apply for a temporary residence permit to look for employment. Hungary offers excellent career opportunities in medicine, engineering, sciences, and other sectors with competitive salaries and career growth prospects, especially in Budapest."
      },
      {
        question: "How much money do I need to show for the Hungarian student visa?",
        answer: "You must demonstrate financial ability to cover your living expenses, typically €615 per month. You can show this through a blocked account, scholarship certificate, or financial guarantee. The exact amount varies based on your program duration and location."
      },
      {
        question: "What is the academic year structure in Hungarian universities?",
        answer: "Hungarian universities typically follow a semester system with Autumn Semester (September-January) and Spring Semester (February-June). The academic year usually runs from September to June, with breaks between semesters. Some institutions offer trimester systems or flexible start dates."
      }
    ]
  },
  {
    id: "germany",
    name: "Germany",
    flag: "🇩🇪",
    region: "europe",
    description: "Germany is renowned for its world-class universities, many of which offer free or low-cost tuition for international students. With strong focus on research, engineering, and technology, Germany provides excellent education and career opportunities.",
    whyChooseDescription: "Germany offers world-class education with many universities providing free or low-cost tuition. The country's strong focus on research, engineering, and technology, combined with excellent post-study work opportunities, makes it an attractive destination for international students.",
    whyChoose: [
      "🎓 World-class universities, many with no tuition fees (public institutions)",
      "🌍 Strong focus on research, engineering, and technology",
      "💼 Post-study work opportunities with high demand for skilled graduates",
      "🏛️ Central European location with rich culture and history",
      "🤝 Degrees recognized globally, with strong industry links"
    ],
    whyStudy: {
      title: "Why Study in Germany?",
      description: "Germany offers world-class education with many universities providing free or low-cost tuition. From strong research focus to excellent post-study work opportunities, Germany provides comprehensive educational experience with strong industry connections.",
      features: [
        {
          title: "Top Universities",
          description: "Get Admissions to best German Universities & Colleges",
          image: "/germany-uni-1.jpeg",
          points: [
            "Many Universities with No Tuition Fees",
            "Globally Recognised Degrees",
            "Application Assistance for 400+ Universities"
          ]
        },
        {
          title: "Student Life",
          description: "Explore Research Focus & get Hands-on Learning",
          image: "/germany-uni-2.jpeg",
          points: [
            "Strong Focus on Research & Technology",
            "Rich Cultural & Historical Exposure",
            "Comprehensive Support for International Students"
          ]
        },
        {
          title: "Post-Study Work Opportunities",
          description: "Learn Specialized Skills & Get Work Opportunities in Germany",
          image: "/germany-uni-3.jpeg",
          points: [
            "Post-Study Work Visa (up to 18 months)",
            "High Demand for Skilled Graduates",
            "Excellent Career Opportunities in Every Field"
          ]
        }
      ]
    },
    costs: {
      tuition: "Free – €3,000/year (mostly public)",
      livingExpenses: "€9,000 – €13,000/year",
      totalEstimated: "€9,000 – €16,000/year",
      note: "Varies by city & lifestyle"
    },
    faq: [
      {
        question: "Do I need to know German to study in Germany?",
        answer: "While many universities offer programs in English, especially at the graduate level, having some knowledge of German is beneficial for daily life and some undergraduate programs. You may need to prove German proficiency (TestDaF, DSH, or Goethe certificates) for German-taught programs, or English proficiency (IELTS/TOEFL) for English-taught programs."
      },
      {
        question: "How long does the German student visa process take?",
        answer: "The German student visa process typically takes 4-8 weeks after you receive your university admission letter. You'll need to apply at the German embassy/consulate in your country, provide financial proof, health insurance, and other required documents. Processing times can vary based on your country of residence."
      },
      {
        question: "Can I work while studying in Germany?",
        answer: "Yes, international students with a valid student visa can work part-time for up to 20 hours per week during the semester and full-time during semester breaks. You can work up to 120 full days or 240 half days per year. After graduation, you may apply for an 18-month job search visa."
      },
      {
        question: "What is the 18-month job search visa in Germany?",
        answer: "The 18-month job search visa allows international graduates to stay in Germany after completing their studies to look for employment. This visa gives you time to find a job that matches your qualifications and potentially transition to a work visa or EU Blue Card."
      },
      {
        question: "How much money do I need to show for the German student visa?",
        answer: "You must demonstrate financial ability to cover your living expenses, typically €11,208 per year (as of 2024). You can show this through a blocked account (Sperrkonto), scholarship certificate, or financial guarantee from a German resident. This amount covers living expenses as tuition is often free."
      },
      {
        question: "What is the academic year structure in German universities?",
        answer: "German universities typically follow a semester system with Winter Semester (October-March) and Summer Semester (April-September). The academic year usually runs from October to September, with breaks between semesters. Application deadlines are typically July 15 for Winter Semester and January 15 for Summer Semester."
      }
    ]
  },
  {
    id: "finland",
    name: "Finland",
    flag: "🇫🇮",
    region: "europe",
    description: "Finland is known for high-quality education, innovation, and research. With a wide range of English-taught programs and post-study work opportunities in tech, gaming, and sustainability.",
    whyChoose: [
      "🎓 Known for high-quality education, innovation & research",
      "🌍 Wide range of English-taught programs",
      "💼 Post-study work opportunities in tech, gaming & sustainability",
      "🌱 Safe, progressive, and student-friendly society",
      "❄️ High standard of living with a unique Nordic experience"
    ],
    costs: {
      tuition: "€6,000 – €18,000/year",
      livingExpenses: "€7,000 – €12,000/year",
      totalEstimated: "€13,000 – €30,000/year",
      note: "Varies by university, location & program"
    },
    faq: [
      {
        question: "What are the English language requirements for studying in Finland?",
        answer: "Most Finnish universities offer programs in English and require international students to demonstrate English proficiency through tests like IELTS (minimum 6.0-7.0) or TOEFL (minimum 80-100). Some universities also accept Cambridge English qualifications, PTE Academic, or Duolingo English Test. Requirements vary by institution and program level."
      },
      {
        question: "How long does the Finnish student visa process take?",
        answer: "The Finnish residence permit for studies process typically takes 2-4 weeks after your university submits the application on your behalf. The university will apply for your residence permit through the Finnish Immigration Service. You'll need to complete the application and provide required documents."
      },
      {
        question: "Can I work while studying in Finland?",
        answer: "Yes, international students with a valid residence permit can work part-time during term time and full-time during vacation periods. There are no specific hour restrictions for students. After graduation, you may apply for a 1-year job search permit to look for employment."
      },
      {
        question: "What is the 1-year job search permit in Finland?",
        answer: "The 1-year job search permit allows international graduates to stay in Finland for up to 1 year after completing their studies to look for employment. This permit provides time to find a job that matches your qualifications and potentially transition to a work permit or residence permit."
      },
      {
        question: "How much money do I need to show for the Finnish student visa?",
        answer: "You must demonstrate financial ability to cover your living expenses, typically €560 per month. You can show this through a blocked account, scholarship certificate, or financial guarantee. The exact amount varies based on your program duration and location."
      },
      {
        question: "What is the academic year structure in Finnish universities?",
        answer: "Finnish universities typically follow a semester system with Autumn Semester (August-December) and Spring Semester (January-May). The academic year usually runs from August to May, with breaks between semesters. Some institutions offer trimester systems or flexible start dates."
      }
    ]
  },
  {
    id: "denmark",
    name: "Denmark",
    flag: "🇩🇰",
    region: "europe",
    whyChoose: [
      "🎓 Renowned for innovation, sustainability & high academic standards",
      "🌍 Wide range of English-taught programs, especially in tech & design",
      "💼 Post-study work opportunities in a strong economy",
      "🌱 Safe, modern, and eco-friendly society with high quality of life",
      "🚲 Student-friendly cities with excellent work-life balance"
    ],
    costs: {
      tuition: "€6,000 – €16,000/year",
      livingExpenses: "€9,000 – €15,000/year",
      totalEstimated: "€15,000 – €31,000/year",
      note: "Varies by university, location & program"
    },
    faq: [
      {
        question: "What are the English language requirements for studying in Denmark?",
        answer: "Most Danish universities offer programs in English and require international students to demonstrate English proficiency through tests like IELTS (minimum 6.5-7.0) or TOEFL (minimum 90-100). Some universities also accept Cambridge English qualifications, PTE Academic, or Duolingo English Test. Requirements vary by institution and program level."
      },
      {
        question: "How long does the Danish student visa process take?",
        answer: "The Danish residence permit for studies process typically takes 2-4 weeks after your university submits the application on your behalf. The university will apply for your residence permit through the Danish Immigration Service. You'll need to complete the application and provide required documents."
      },
      {
        question: "Can I work while studying in Denmark?",
        answer: "Yes, international students with a valid residence permit can work part-time during term time and full-time during vacation periods. There are no specific hour restrictions for students. After graduation, you may apply for a 6-month job search permit to look for employment."
      },
      {
        question: "What is the 6-month job search permit in Denmark?",
        answer: "The 6-month job search permit allows international graduates to stay in Denmark for up to 6 months after completing their studies to look for employment. This permit provides time to find a job that matches your qualifications and potentially transition to a work permit or residence permit."
      },
      {
        question: "How much money do I need to show for the Danish student visa?",
        answer: "You must demonstrate financial ability to cover your living expenses, typically DKK 6,397 per month (as of 2024). You can show this through a blocked account, scholarship certificate, or financial guarantee. The exact amount varies based on your program duration and location."
      },
      {
        question: "What is the academic year structure in Danish universities?",
        answer: "Danish universities typically follow a semester system with Autumn Semester (August-December) and Spring Semester (January-June). The academic year usually runs from August to June, with breaks between semesters. Some institutions offer trimester systems or flexible start dates."
      }
    ]
  },
  {
    id: "cyprus",
    name: "Cyprus",
    flag: "🇨🇾",
    region: "europe",
    whyChoose: [
      "🎓 Affordable, good-quality education with EU-recognized degrees",
      "🌍 Increasing number of English-taught programs",
      "💼 Gateway to Europe with growing opportunities in tourism, business & IT",
      "☀️ Mediterranean climate, safe & welcoming environment",
      "🤝 Budget-friendly compared to most EU destinations"
    ],
    costs: {
      tuition: "€3,000 – €8,000/year",
      livingExpenses: "€6,000 – €9,000/year",
      totalEstimated: "€9,000 – €17,000/year",
      note: "Varies by university, location & program"
    },
    faq: [
      {
        question: "What are the English language requirements for studying in Cyprus?",
        answer: "Most Cypriot universities offer programs in English and require international students to demonstrate English proficiency through tests like IELTS (minimum 6.0-6.5) or TOEFL (minimum 80-90). Some universities also accept Cambridge English qualifications, PTE Academic, or Duolingo English Test. Requirements vary by institution and program level."
      },
      {
        question: "How long does the Cypriot student visa process take?",
        answer: "The Cypriot student visa process typically takes 2-4 weeks after you receive your university admission letter. You'll need to apply at the Cypriot embassy/consulate in your country, provide financial proof, health insurance, and other required documents. Processing times can vary based on your country of residence."
      },
      {
        question: "Can I work while studying in Cyprus?",
        answer: "Yes, international students with a valid student visa can work part-time during term time and full-time during vacation periods. You need to obtain a work permit for employment. After graduation, you may apply for a temporary residence permit to look for employment."
      },
      {
        question: "What are the post-study work opportunities in Cyprus?",
        answer: "After graduation, international students can apply for a temporary residence permit to look for employment. Cyprus offers excellent career opportunities in tourism, business, IT, and other sectors with competitive salaries and career growth prospects, especially as a gateway to Europe."
      },
      {
        question: "How much money do I need to show for the Cypriot student visa?",
        answer: "You must demonstrate financial ability to cover your living expenses, typically €615 per month. You can show this through a blocked account, scholarship certificate, or financial guarantee. The exact amount varies based on your program duration and location."
      },
      {
        question: "What is the academic year structure in Cypriot universities?",
        answer: "Cypriot universities typically follow a semester system with Autumn Semester (September-January) and Spring Semester (February-June). The academic year usually runs from September to June, with breaks between semesters. Some institutions offer trimester systems or flexible start dates."
      }
    ]
  },
  {
    id: "lithuania",
    name: "Lithuania",
    flag: "🇱🇹",
    region: "europe",
    whyChoose: [
      "🎓 Affordable, high-quality universities with EU-recognized degrees",
      "🌍 Many English-taught programs in medicine, IT & engineering",
      "💼 Growing opportunities in tech & startups",
      "🏰 Culturally rich, safe, and student-friendly cities",
      "🤝 Cost-effective compared to Western Europe"
    ],
    costs: {
      tuition: "€2,000 – €6,000/year",
      livingExpenses: "€4,000 – €7,000/year",
      totalEstimated: "€6,000 – €13,000/year",
      note: "Varies by university, location & program"
    },
    faq: [
      {
        question: "What are the English language requirements for studying in Lithuania?",
        answer: "Most Lithuanian universities offer programs in English and require international students to demonstrate English proficiency through tests like IELTS (minimum 6.0-6.5) or TOEFL (minimum 80-90). Some universities also accept Cambridge English qualifications, PTE Academic, or Duolingo English Test. Requirements vary by institution and program level."
      },
      {
        question: "How long does the Lithuanian student visa process take?",
        answer: "The Lithuanian student visa process typically takes 2-4 weeks after you receive your university admission letter. You'll need to apply at the Lithuanian embassy/consulate in your country, provide financial proof, health insurance, and other required documents. Processing times can vary based on your country of residence."
      },
      {
        question: "Can I work while studying in Lithuania?",
        answer: "Yes, international students with a valid student visa can work part-time during term time and full-time during vacation periods. You need to obtain a work permit for employment. After graduation, you may apply for a temporary residence permit to look for employment."
      },
      {
        question: "What are the post-study work opportunities in Lithuania?",
        answer: "After graduation, international students can apply for a temporary residence permit to look for employment. Lithuania offers excellent career opportunities in medicine, IT, engineering, and other sectors with competitive salaries and career growth prospects, especially in tech and startups."
      },
      {
        question: "How much money do I need to show for the Lithuanian student visa?",
        answer: "You must demonstrate financial ability to cover your living expenses, typically €615 per month. You can show this through a blocked account, scholarship certificate, or financial guarantee. The exact amount varies based on your program duration and location."
      },
      {
        question: "What is the academic year structure in Lithuanian universities?",
        answer: "Lithuanian universities typically follow a semester system with Autumn Semester (September-January) and Spring Semester (February-June). The academic year usually runs from September to June, with breaks between semesters. Some institutions offer trimester systems or flexible start dates."
      }
    ]
  },
  {
    id: "bulgaria",
    name: "Bulgaria",
    flag: "🇧🇬",
    region: "europe",
    whyChoose: [
      "🎓 Affordable education with EU-recognized degrees, especially popular for medicine & engineering",
      "🌍 Increasing number of English-taught programs",
      "💼 Budget-friendly study destination in the EU",
      "🏛️ Rich history, culture & scenic landscapes",
      "🤝 Safe, welcoming environment with diverse student community"
    ],
    costs: {
      tuition: "€2,500 – €8,000/year",
      livingExpenses: "€4,000 – €7,000/year",
      totalEstimated: "€6,500 – €15,000/year",
      note: "Varies by university, location & program"
    },
    faq: [
      {
        question: "What are the English language requirements for studying in Bulgaria?",
        answer: "Most Bulgarian universities offer programs in English and require international students to demonstrate English proficiency through tests like IELTS (minimum 6.0-6.5) or TOEFL (minimum 80-90). Some universities also accept Cambridge English qualifications, PTE Academic, or Duolingo English Test. Requirements vary by institution and program level."
      },
      {
        question: "How long does the Bulgarian student visa process take?",
        answer: "The Bulgarian student visa process typically takes 2-4 weeks after you receive your university admission letter. You'll need to apply at the Bulgarian embassy/consulate in your country, provide financial proof, health insurance, and other required documents. Processing times can vary based on your country of residence."
      },
      {
        question: "Can I work while studying in Bulgaria?",
        answer: "Yes, international students with a valid student visa can work part-time during term time and full-time during vacation periods. You need to obtain a work permit for employment. After graduation, you may apply for a temporary residence permit to look for employment."
      },
      {
        question: "What are the post-study work opportunities in Bulgaria?",
        answer: "After graduation, international students can apply for a temporary residence permit to look for employment. Bulgaria offers excellent career opportunities in medicine, engineering, and other sectors with competitive salaries and career growth prospects, especially as a budget-friendly EU destination."
      },
      {
        question: "How much money do I need to show for the Bulgarian student visa?",
        answer: "You must demonstrate financial ability to cover your living expenses, typically €615 per month. You can show this through a blocked account, scholarship certificate, or financial guarantee. The exact amount varies based on your program duration and location."
      },
      {
        question: "What is the academic year structure in Bulgarian universities?",
        answer: "Bulgarian universities typically follow a semester system with Autumn Semester (September-January) and Spring Semester (February-June). The academic year usually runs from September to June, with breaks between semesters. Some institutions offer trimester systems or flexible start dates."
      }
    ]
  },
  {
    id: "france",
    name: "France",
    flag: "🇫🇷",
    region: "europe",
    whyChoose: [
      "🎓 Home to world-class universities & grandes écoles",
      "🌍 Wide range of programs in English & French",
      "💼 Strong career opportunities in fashion, business, arts, tech & research",
      "🏛️ Rich culture, history & global influence",
      "🤝 Central EU location with excellent international exposure"
    ],
    costs: {
      tuition: "€2,500 – €4,000/year (public), €8,000 – €20,000/year (private)",
      livingExpenses: "€9,000 – €13,000/year",
      totalEstimated: "€12,000 – €30,000/year",
      note: "Varies by city & lifestyle"
    },
    faq: [
      {
        question: "What are the language requirements for studying in France?",
        answer: "French universities offer programs in both French and English. For French-taught programs, you need to prove French proficiency through tests like DELF/DALF or TCF. For English-taught programs, you need English proficiency through IELTS/TOEFL. Some programs require both languages."
      },
      {
        question: "How long does the French student visa process take?",
        answer: "The French student visa process typically takes 2-4 weeks after you receive your university admission letter. You'll need to apply through Campus France and then at the French embassy/consulate in your country. Processing times can vary based on your country of residence."
      },
      {
        question: "Can I work while studying in France?",
        answer: "Yes, international students with a valid student visa can work part-time for up to 20 hours per week during term time and full-time during vacation periods. After graduation, you may apply for a temporary residence permit to look for employment."
      },
      {
        question: "What are the post-study work opportunities in France?",
        answer: "After graduation, international students can apply for a temporary residence permit to look for employment. France offers excellent career opportunities in fashion, business, arts, technology, and research sectors with competitive salaries and career growth prospects."
      },
      {
        question: "How much money do I need to show for the French student visa?",
        answer: "You must demonstrate financial ability to cover your living expenses, typically €615 per month. You can show this through a blocked account, scholarship certificate, or financial guarantee. The exact amount varies based on your program duration and location."
      },
      {
        question: "What is the academic year structure in French universities?",
        answer: "French universities typically follow a semester system with Autumn Semester (September-December) and Spring Semester (January-May). The academic year usually runs from September to May, with breaks between semesters. Some institutions offer trimester systems or flexible start dates."
      }
    ]
  },
  {
    id: "italy",
    name: "Italy",
    flag: "🇮🇹",
    region: "europe",
    whyChoose: [
      "🎓 Prestigious universities with strong programs in arts, design, engineering & medicine",
      "🌍 Wide range of English-taught programs",
      "💼 Opportunities in fashion, design, tourism, business & research",
      "🏛️ Rich cultural heritage and historic cities",
      "🤝 Central European location with strong EU recognition"
    ],
    costs: {
      tuition: "€1,500 – €5,000/year (public), €8,000 – €20,000/year (private)",
      livingExpenses: "€8,000 – €12,000/year",
      totalEstimated: "€9,500 – €32,000/year",
      note: "Varies by university, location & program"
    },
    faq: [
      {
        question: "What are the language requirements for studying in Italy?",
        answer: "Italian universities offer programs in both Italian and English. For Italian-taught programs, you need to prove Italian proficiency through tests like CILS or CELI. For English-taught programs, you need English proficiency through IELTS/TOEFL. Some programs require both languages."
      },
      {
        question: "How long does the Italian student visa process take?",
        answer: "The Italian student visa process typically takes 2-4 weeks after you receive your university admission letter. You'll need to apply at the Italian embassy/consulate in your country, provide financial proof, health insurance, and other required documents. Processing times can vary based on your country of residence."
      },
      {
        question: "Can I work while studying in Italy?",
        answer: "Yes, international students with a valid student visa can work part-time for up to 20 hours per week during term time and full-time during vacation periods. After graduation, you may apply for a temporary residence permit to look for employment."
      },
      {
        question: "What are the post-study work opportunities in Italy?",
        answer: "After graduation, international students can apply for a temporary residence permit to look for employment. Italy offers excellent career opportunities in fashion, design, tourism, business, and research sectors with competitive salaries and career growth prospects."
      },
      {
        question: "How much money do I need to show for the Italian student visa?",
        answer: "You must demonstrate financial ability to cover your living expenses, typically €615 per month. You can show this through a blocked account, scholarship certificate, or financial guarantee. The exact amount varies based on your program duration and location."
      },
      {
        question: "What is the academic year structure in Italian universities?",
        answer: "Italian universities typically follow a semester system with Autumn Semester (September-January) and Spring Semester (February-June). The academic year usually runs from September to June, with breaks between semesters. Some institutions offer trimester systems or flexible start dates."
      }
    ]
  },
  {
    id: "spain",
    name: "Spain",
    flag: "🇪🇸",
    region: "europe",
    whyChoose: [
      "🎓 High-quality universities with globally recognized degrees",
      "🌍 Wide range of English & Spanish-taught programs",
      "💼 Career opportunities in business, tourism, arts & technology",
      "🏖️ Vibrant culture, historic cities & Mediterranean lifestyle",
      "🤝 Safe, welcoming, and multicultural environment"
    ],
    costs: {
      tuition: "€1,500 – €6,000/year (public), €8,000 – €20,000/year (private)",
      livingExpenses: "€8,000 – €12,000/year",
      totalEstimated: "€9,500 – €32,000/year",
      note: "Varies by university, location & program"
    },
    faq: [
      {
        question: "What are the language requirements for studying in Spain?",
        answer: "Spanish universities offer programs in both Spanish and English. For Spanish-taught programs, you need to prove Spanish proficiency through tests like DELE or SIELE. For English-taught programs, you need English proficiency through IELTS/TOEFL. Some programs require both languages."
      },
      {
        question: "How long does the Spanish student visa process take?",
        answer: "The Spanish student visa process typically takes 2-4 weeks after you receive your university admission letter. You'll need to apply at the Spanish embassy/consulate in your country, provide financial proof, health insurance, and other required documents. Processing times can vary based on your country of residence."
      },
      {
        question: "Can I work while studying in Spain?",
        answer: "Yes, international students with a valid student visa can work part-time for up to 20 hours per week during term time and full-time during vacation periods. After graduation, you may apply for a temporary residence permit to look for employment."
      },
      {
        question: "What are the post-study work opportunities in Spain?",
        answer: "After graduation, international students can apply for a temporary residence permit to look for employment. Spain offers excellent career opportunities in business, tourism, arts, and technology sectors with competitive salaries and career growth prospects."
      },
      {
        question: "How much money do I need to show for the Spanish student visa?",
        answer: "You must demonstrate financial ability to cover your living expenses, typically €615 per month. You can show this through a blocked account, scholarship certificate, or financial guarantee. The exact amount varies based on your program duration and location."
      },
      {
        question: "What is the academic year structure in Spanish universities?",
        answer: "Spanish universities typically follow a semester system with Autumn Semester (September-January) and Spring Semester (February-June). The academic year usually runs from September to June, with breaks between semesters. Some institutions offer trimester systems or flexible start dates."
      }
    ]
  },
  {
    id: "austria",
    name: "Austria",
    flag: "🇦🇹",
    region: "europe",
    whyChoose: [
      "🎓 High-quality universities with strong programs in engineering, business & arts",
      "🌍 Many English-taught programs and EU-recognized degrees",
      "💼 Career opportunities in business, research & technology",
      "🏛️ Rich culture, history, and central European location",
      "🤝 Safe, welcoming, and student-friendly environment"
    ],
    costs: {
      tuition: "€1,500 – €3,500/year (public), €8,000 – €20,000/year (private)",
      livingExpenses: "€9,000 – €12,000/year",
      totalEstimated: "€10,500 – €32,000/year",
      note: "Varies by university, location & program"
    },
    faq: [
      {
        question: "What are the language requirements for studying in Austria?",
        answer: "Austrian universities offer programs in both German and English. For German-taught programs, you need to prove German proficiency through tests like TestDaF or Goethe. For English-taught programs, you need English proficiency through IELTS/TOEFL. Some programs require both languages."
      },
      {
        question: "How long does the Austrian student visa process take?",
        answer: "The Austrian student visa process typically takes 2-4 weeks after you receive your university admission letter. You'll need to apply at the Austrian embassy/consulate in your country, provide financial proof, health insurance, and other required documents. Processing times can vary based on your country of residence."
      },
      {
        question: "Can I work while studying in Austria?",
        answer: "Yes, international students with a valid student visa can work part-time for up to 20 hours per week during term time and full-time during vacation periods. After graduation, you may apply for a temporary residence permit to look for employment."
      },
      {
        question: "What are the post-study work opportunities in Austria?",
        answer: "After graduation, international students can apply for a temporary residence permit to look for employment. Austria offers excellent career opportunities in business, research, technology, and other sectors with competitive salaries and career growth prospects."
      },
      {
        question: "How much money do I need to show for the Austrian student visa?",
        answer: "You must demonstrate financial ability to cover your living expenses, typically €615 per month. You can show this through a blocked account, scholarship certificate, or financial guarantee. The exact amount varies based on your program duration and location."
      },
      {
        question: "What is the academic year structure in Austrian universities?",
        answer: "Austrian universities typically follow a semester system with Winter Semester (October-February) and Summer Semester (March-June). The academic year usually runs from October to June, with breaks between semesters. Some institutions offer trimester systems or flexible start dates."
      }
    ]
  },
  {
    id: "singapore",
    name: "Singapore",
    flag: "🇸🇬",
    region: "asia",
    description: "Singapore is a global hub for education and innovation, home to world-class universities like NUS, NTU, and SMU. With English as the primary language and a multicultural environment, Singapore offers excellent education and career opportunities in Asia.",
    whyChooseDescription: "Singapore provides world-class education with top-ranked universities, English-speaking environment, and excellent career opportunities. The country's status as an innovation hub in Asia, combined with modern infrastructure and multicultural environment, makes it an ideal destination for international students.",
    whyChoose: [
      "🎓 Home to top universities like NUS, NTU & SMU with global recognition",
      "🌍 English-speaking, multicultural environment with strong international exposure",
      "💼 Excellent career opportunities in finance, tech & research sectors",
      "🚀 Innovation hub in Asia with strong industry connections",
      "🤝 Safe, high-standard living with modern infrastructure"
    ],
    whyStudy: {
      title: "Why Study in Singapore?",
      description: "Singapore offers world-class education with top-ranked universities, English-speaking environment, and excellent career opportunities. From NUS and NTU to strong industry connections, Singapore provides comprehensive educational experience in Asia.",
      features: [
        {
          title: "Top Universities",
          description: "Get Admissions to best Singapore Universities & Colleges",
          image: "/singapore-uni-1.jpeg",
          points: [
            "NUS, NTU & SMU",
            "Globally Recognised Degrees",
            "Application Assistance for 30+ Universities"
          ]
        },
        {
          title: "Student Life",
          description: "Explore Multicultural Environment & get Hands-on Learning",
          image: "/singapore-uni-2.jpeg",
          points: [
            "English-speaking Environment",
            "Multicultural & International Exposure",
            "Comprehensive Support for International Students"
          ]
        },
        {
          title: "Post-Study Work Opportunities",
          description: "Learn Specialized Skills & Get Work Opportunities in Singapore",
          image: "/singapore-uni-3.jpeg",
          points: [
            "Post-Study Work Visa (up to 1 year)",
            "Innovation Hub in Asia",
            "Excellent Career Opportunities in Every Field"
          ]
        }
      ]
    },
    costs: {
      tuition: "SGD 20,000 – 45,000/year",
      livingExpenses: "SGD 10,000 – 18,000/year",
      totalEstimated: "SGD 30,000 – 63,000/year",
      note: "Varies by university, location & program"
    },
    faq: [
      {
        question: "What are the English language requirements for studying in Singapore?",
        answer: "Since English is the primary language of instruction in Singapore, international students need to demonstrate English proficiency through tests like IELTS (minimum 6.0-7.0) or TOEFL (minimum 80-100). Some universities also accept Cambridge English qualifications, PTE Academic, or Duolingo English Test. Requirements vary by institution and program level."
      },
      {
        question: "How long does the Singapore student visa process take?",
        answer: "The Singapore student visa (Student's Pass) process typically takes 2-4 weeks after your university submits the application on your behalf. The university will apply for your Student's Pass through the Immigration and Checkpoints Authority (ICA) online system. You'll need to complete the medical examination and provide required documents."
      },
      {
        question: "Can I work while studying in Singapore?",
        answer: "International students with a valid Student's Pass can work part-time for up to 16 hours per week during term time and full-time during vacation periods, but only with a valid work pass. You need to obtain a Work Pass Exemption (WPE) from the Ministry of Manpower. After graduation, you may apply for various work passes."
      },
      {
        question: "What work opportunities are available after graduation in Singapore?",
        answer: "After graduation, international students can apply for various work passes including the Employment Pass, S Pass, or Work Permit depending on their qualifications and salary. Singapore offers excellent career opportunities in finance, technology, research, and other sectors with competitive salaries and career growth prospects."
      },
      {
        question: "How much money do I need to show for the Singapore student visa?",
        answer: "You must demonstrate financial ability to cover your tuition fees and living expenses. You need to show sufficient funds to cover your course fees and living expenses (typically SGD 10,000-18,000 per year). You can show personal funds, family support, scholarships, or sponsor letters."
      },
      {
        question: "What is the academic year structure in Singapore universities?",
        answer: "Singapore universities typically follow a semester system with two main semesters: Semester 1 (August-December) and Semester 2 (January-May). Some institutions offer trimester systems or special term programs. The academic year usually runs from August to May, with breaks between semesters."
      }
    ]
  },
  {
    id: "malaysia",
    name: "Malaysia",
    flag: "🇲🇾",
    region: "asia",
    whyChoose: [
      "🎓 Affordable, quality education with internationally recognized degrees",
      "🌍 English-taught programs and multicultural environment",
      "💼 Growing career opportunities in IT, business, and engineering",
      "🌴 Safe, student-friendly, and culturally diverse",
      "🤝 Strong partnerships with global universities"
    ],
    costs: {
      tuition: "MYR 20,000 – 45,000/year",
      livingExpenses: "MYR 10,000 – 18,000/year",
      totalEstimated: "MYR 30,000 – 63,000/year",
      note: "Varies by university, location & program"
    },
    faq: [
      {
        question: "What are the English language requirements for studying in Malaysia?",
        answer: "Since English is widely used in Malaysian universities, international students need to demonstrate English proficiency through tests like IELTS (minimum 5.5-6.5) or TOEFL (minimum 70-90). Some universities also accept Cambridge English qualifications, PTE Academic, or Duolingo English Test. Requirements vary by institution and program level."
      },
      {
        question: "How long does the Malaysian student visa process take?",
        answer: "The Malaysian student visa (Student Pass) process typically takes 2-4 weeks after your university submits the application on your behalf. The university will apply for your Student Pass through the Malaysian Immigration Department. You'll need to complete the application and provide required documents."
      },
      {
        question: "Can I work while studying in Malaysia?",
        answer: "International students with a valid Student Pass can work part-time for up to 20 hours per week during term time and full-time during vacation periods, but only with a valid work permit. You need to obtain a work permit from the Immigration Department. After graduation, you may apply for various work passes."
      },
      {
        question: "What work opportunities are available after graduation in Malaysia?",
        answer: "After graduation, international students can apply for various work passes including the Employment Pass, Professional Visit Pass, or Work Permit depending on their qualifications and salary. Malaysia offers excellent career opportunities in IT, business, engineering, and other sectors with competitive salaries."
      },
      {
        question: "How much money do I need to show for the Malaysian student visa?",
        answer: "You must demonstrate financial ability to cover your tuition fees and living expenses. You need to show sufficient funds to cover your course fees and living expenses (typically MYR 10,000-18,000 per year). You can show personal funds, family support, scholarships, or sponsor letters."
      },
      {
        question: "What is the academic year structure in Malaysian universities?",
        answer: "Malaysian universities typically follow a semester system with two main semesters: Semester 1 (September-January) and Semester 2 (February-June). Some institutions offer trimester systems or special term programs. The academic year usually runs from September to June, with breaks between semesters."
      }
    ]
  },
  {
    id: "china",
    name: "China",
    flag: "🇨🇳",
    region: "asia",
    whyChoose: [
      "🎓 Home to top universities like Tsinghua & Peking University",
      "🌍 Growing number of English-taught programs and international students",
      "💼 Career opportunities in technology, business & research",
      "🏯 Rich culture, history, and rapidly growing economy",
      "🤝 Strong global recognition for STEM, business, and language studies"
    ],
    costs: {
      tuition: "¥20,000 – ¥60,000/year",
      livingExpenses: "¥10,000 – ¥20,000/year",
      totalEstimated: "¥30,000 – ¥80,000/year",
      note: "Varies by university, location & program"
    },
    faq: [
      {
        question: "What are the language requirements for studying in China?",
        answer: "Chinese universities offer programs in both Chinese and English. For Chinese-taught programs, you need to prove Chinese proficiency through tests like HSK. For English-taught programs, you need English proficiency through IELTS/TOEFL. Some programs require both languages, and many universities offer Chinese language courses for international students."
      },
      {
        question: "How long does the Chinese student visa process take?",
        answer: "The Chinese student visa (X1/X2) process typically takes 1-2 weeks after you receive your university admission letter and JW202 form. You'll need to apply at the Chinese embassy/consulate in your country, provide financial proof, health insurance, and other required documents. Processing times can vary based on your country of residence."
      },
      {
        question: "Can I work while studying in China?",
        answer: "International students with a valid student visa can work part-time during term time and full-time during vacation periods, but only with a valid work permit. You need to obtain a work permit from the local authorities. After graduation, you may apply for various work permits or residence permits."
      },
      {
        question: "What work opportunities are available after graduation in China?",
        answer: "After graduation, international students can apply for various work permits or residence permits to look for employment. China offers excellent career opportunities in technology, business, research, and other sectors with competitive salaries and career growth prospects."
      },
      {
        question: "How much money do I need to show for the Chinese student visa?",
        answer: "You must demonstrate financial ability to cover your tuition fees and living expenses. You need to show sufficient funds to cover your course fees and living expenses (typically ¥10,000-20,000 per year). You can show personal funds, family support, scholarships, or sponsor letters."
      },
      {
        question: "What is the academic year structure in Chinese universities?",
        answer: "Chinese universities typically follow a semester system with Autumn Semester (September-January) and Spring Semester (February-June). The academic year usually runs from September to June, with breaks between semesters. Some institutions offer trimester systems or flexible start dates."
      }
    ]
  },
  {
    id: "hongkong",
    name: "Hong Kong",
    flag: "🇭🇰",
    region: "asia",
    whyChoose: [
      "🎓 Home to top-ranked universities like HKU, HKUST & CUHK",
      "🌍 English-speaking environment with strong global connections",
      "💼 Career opportunities in finance, business, and technology",
      "🌆 Safe, modern city with high standard of living",
      "🤝 Gateway to Asia with strong international recognition"
    ],
    costs: {
      tuition: "HKD 120,000 – 250,000/year",
      livingExpenses: "HKD 100,000 – 150,000/year",
      totalEstimated: "HKD 220,000 – 400,000/year",
      note: "Varies by university, location & program"
    },
    faq: [
      {
        question: "What are the English language requirements for studying in Hong Kong?",
        answer: "Since English is the primary language of instruction in Hong Kong universities, international students need to demonstrate English proficiency through tests like IELTS (minimum 6.5-7.0) or TOEFL (minimum 90-100). Some universities also accept Cambridge English qualifications, PTE Academic, or Duolingo English Test. Requirements vary by institution and program level."
      },
      {
        question: "How long does the Hong Kong student visa process take?",
        answer: "The Hong Kong student visa process typically takes 4-6 weeks after your university submits the application on your behalf. The university will apply for your student visa through the Hong Kong Immigration Department. You'll need to complete the application and provide required documents."
      },
      {
        question: "Can I work while studying in Hong Kong?",
        answer: "International students with a valid student visa can work part-time for up to 20 hours per week during term time and full-time during vacation periods, but only with a valid work permit. You need to obtain a work permit from the Immigration Department. After graduation, you may apply for various work passes."
      },
      {
        question: "What work opportunities are available after graduation in Hong Kong?",
        answer: "After graduation, international students can apply for various work passes including the General Employment Policy, Admission Scheme for Mainland Talents and Professionals, or Quality Migrant Admission Scheme depending on their qualifications. Hong Kong offers excellent career opportunities in finance, business, and technology sectors."
      },
      {
        question: "How much money do I need to show for the Hong Kong student visa?",
        answer: "You must demonstrate financial ability to cover your tuition fees and living expenses. You need to show sufficient funds to cover your course fees and living expenses (typically HKD 100,000-150,000 per year). You can show personal funds, family support, scholarships, or sponsor letters."
      },
      {
        question: "What is the academic year structure in Hong Kong universities?",
        answer: "Hong Kong universities typically follow a semester system with two main semesters: Semester 1 (September-December) and Semester 2 (January-May). Some institutions offer trimester systems or special term programs. The academic year usually runs from September to May, with breaks between semesters."
      }
    ]
  },
  {
    id: "mauritius",
    name: "Mauritius",
    flag: "🇲🇺",
    region: "africa",
    whyChoose: [
      "🎓 Affordable universities with internationally recognized degrees",
      "🌍 English & French-speaking programs with multicultural environment",
      "💼 Growing career opportunities in tourism, business & IT",
      "🌴 Safe, peaceful island with high quality of life",
      "🤝 Strong partnerships with foreign universities"
    ],
    costs: {
      tuition: "MUR 200,000 – 450,000/year",
      livingExpenses: "MUR 100,000 – 200,000/year",
      totalEstimated: "MUR 300,000 – 650,000/year",
      note: "Varies by university, location & program"
    },
    faq: [
      {
        question: "What are the language requirements for studying in Mauritius?",
        answer: "Mauritian universities offer programs in both English and French. For English-taught programs, you need to demonstrate English proficiency through tests like IELTS (minimum 6.0-6.5) or TOEFL (minimum 80-90). For French-taught programs, you need French proficiency through tests like DELF/DALF. Some programs require both languages."
      },
      {
        question: "How long does the Mauritian student visa process take?",
        answer: "The Mauritian student visa process typically takes 2-4 weeks after you receive your university admission letter. You'll need to apply at the Mauritian embassy/consulate in your country, provide financial proof, health insurance, and other required documents. Processing times can vary based on your country of residence."
      },
      {
        question: "Can I work while studying in Mauritius?",
        answer: "Yes, international students with a valid student visa can work part-time during term time and full-time during vacation periods. You need to obtain a work permit for employment. After graduation, you may apply for a temporary residence permit to look for employment."
      },
      {
        question: "What are the post-study work opportunities in Mauritius?",
        answer: "After graduation, international students can apply for a temporary residence permit to look for employment. Mauritius offers excellent career opportunities in tourism, business, IT, and other sectors with competitive salaries and career growth prospects, especially as a gateway to Africa."
      },
      {
        question: "How much money do I need to show for the Mauritian student visa?",
        answer: "You must demonstrate financial ability to cover your living expenses, typically MUR 100,000-200,000 per year. You can show this through a blocked account, scholarship certificate, or financial guarantee. The exact amount varies based on your program duration and location."
      },
      {
        question: "What is the academic year structure in Mauritian universities?",
        answer: "Mauritian universities typically follow a semester system with Autumn Semester (August-December) and Spring Semester (January-May). The academic year usually runs from August to May, with breaks between semesters. Some institutions offer trimester systems or flexible start dates."
      }
    ]
  },
  {
    id: "dubai",
    name: "Dubai",
    flag: "🇦🇪",
    region: "asia",
    whyChoose: [
      "🎓 Home to top universities & global branch campuses",
      "🌍 English-taught programs with multicultural environment",
      "💼 Career opportunities in business, finance, tourism & tech",
      "🌆 Safe, modern city with high standard of living",
      "🤝 Strong industry connections and international recognition"
    ],
    costs: {
      tuition: "AED 50,000 – 120,000/year",
      livingExpenses: "AED 40,000 – 70,000/year",
      totalEstimated: "AED 90,000 – 190,000/year",
      note: "Varies by university, location & program"
    },
    faq: [
      {
        question: "What are the English language requirements for studying in Dubai?",
        answer: "Since English is the primary language of instruction in Dubai universities, international students need to demonstrate English proficiency through tests like IELTS (minimum 6.0-6.5) or TOEFL (minimum 80-90). Some universities also accept Cambridge English qualifications, PTE Academic, or Duolingo English Test. Requirements vary by institution and program level."
      },
      {
        question: "How long does the Dubai student visa process take?",
        answer: "The Dubai student visa process typically takes 2-4 weeks after your university submits the application on your behalf. The university will apply for your student visa through the Dubai Immigration Department. You'll need to complete the application and provide required documents."
      },
      {
        question: "Can I work while studying in Dubai?",
        answer: "International students with a valid student visa can work part-time during term time and full-time during vacation periods, but only with a valid work permit. You need to obtain a work permit from the Ministry of Human Resources and Emiratisation. After graduation, you may apply for various work permits."
      },
      {
        question: "What work opportunities are available after graduation in Dubai?",
        answer: "After graduation, international students can apply for various work permits including the Employment Visa, Freelance Visa, or Golden Visa depending on their qualifications and salary. Dubai offers excellent career opportunities in business, finance, tourism, and technology sectors with competitive salaries."
      },
      {
        question: "How much money do I need to show for the Dubai student visa?",
        answer: "You must demonstrate financial ability to cover your tuition fees and living expenses. You need to show sufficient funds to cover your course fees and living expenses (typically AED 40,000-70,000 per year). You can show personal funds, family support, scholarships, or sponsor letters."
      },
      {
        question: "What is the academic year structure in Dubai universities?",
        answer: "Dubai universities typically follow a semester system with two main semesters: Semester 1 (September-December) and Semester 2 (January-May). Some institutions offer trimester systems or special term programs. The academic year usually runs from September to May, with breaks between semesters."
      }
    ]
  },
  {
    id: "australia",
    name: "Australia",
    flag: "🇦🇺",
    region: "oceania",
    description: "Australia is home to world-class universities with excellent research facilities and a multicultural environment. The country offers strong post-study work opportunities, high quality of life, and excellent weather, making it an ideal destination for international students.",
    whyChooseDescription: "Australia provides world-class education with excellent research facilities, multicultural environment, and strong post-study work opportunities. The country's high quality of life and welcoming atmosphere make it an ideal destination for international students.",
    whyChoose: [
      "🎓 Home to top universities like ANU, University of Sydney & Melbourne",
      "🌍 Wide range of English-taught programs and multicultural environment",
      "💼 Strong career opportunities with post-study work visas",
      "🌏 Safe, modern cities with high quality of life",
      "🤝 Excellent research and industry connections"
    ],
    whyStudy: {
      title: "Why Study in Australia?",
      description: "Australia offers world-class education with excellent research facilities, multicultural environment, and strong post-study work opportunities. From top-ranked universities to high quality of life, Australia provides comprehensive educational experience.",
      features: [
        {
          title: "Top Universities",
          description: "Get Admissions to best Australian Universities & Colleges",
          image: "/australia-uni-1.jpeg",
          points: [
            "ANU, University of Sydney & Melbourne",
            "Globally Recognised Degrees",
            "Application Assistance for 40+ Universities"
          ]
        },
        {
          title: "Student Life",
          description: "Explore Multicultural Environment & get Hands-on Learning",
          image: "/australia-uni-2.jpeg",
          points: [
            "Wide Range of English-taught Programs",
            "Vibrant Multicultural Campus Life",
            "Comprehensive Support for International Students"
          ]
        },
        {
          title: "Post-Study Work Opportunities",
          description: "Learn Specialized Skills & Get Work Opportunities in Australia",
          image: "/australia-uni-3.jpeg",
          points: [
            "Post-Study Work Visa (up to 4 years)",
            "Pathway to Permanent Residency",
            "Excellent Career Opportunities in Every Field"
          ]
        }
      ]
    },
    costs: {
      tuition: "AUD 30,000 – 50,000/year",
      livingExpenses: "AUD 15,000 – 25,000/year",
      totalEstimated: "AUD 45,000 – 75,000/year",
      note: "Varies by university, location & program"
    },
    faq: [
      {
        question: "What are the English language requirements for studying in Australia?",
        answer: "Most Australian universities require international students to demonstrate English proficiency through tests like IELTS (minimum 6.0-7.0) or TOEFL (minimum 60-100). Some universities also accept Cambridge English qualifications, PTE Academic, or Duolingo English Test. Requirements vary by institution and program level."
      },
      {
        question: "How long does the Australian student visa process take?",
        answer: "The Australian student visa (subclass 500) process typically takes 4-8 weeks after you receive your Confirmation of Enrolment (CoE). You'll need to complete the online application, pay the application fee, and may need to attend a medical examination or provide additional documents."
      },
      {
        question: "Can I work while studying in Australia?",
        answer: "Yes, international students with a valid student visa can work up to 40 hours per fortnight (2 weeks) during the academic term and unlimited hours during scheduled breaks. After graduation, you may apply for a Temporary Graduate visa (subclass 485) to work in Australia for up to 4 years."
      },
      {
        question: "What is the Temporary Graduate visa (subclass 485)?",
        answer: "The Temporary Graduate visa allows international students to stay in Australia for up to 4 years after completing their studies to work, travel, or study further. The duration depends on your qualification level: 18 months for Bachelor's, 2 years for Master's, and up to 4 years for PhD graduates."
      },
      {
        question: "How much money do I need to show for the Australian student visa?",
        answer: "You must demonstrate financial ability to cover your tuition fees, living expenses, and travel costs. You need to show AUD 21,041 per year for living expenses plus your tuition fees. You can show personal funds, family support, scholarships, or sponsor letters."
      },
      {
        question: "What is the academic year structure in Australian universities?",
        answer: "Most Australian universities follow a semester system (February-June and July-November) or trimester system. The academic year typically runs from February to November, with summer sessions available from November to February. Some institutions offer flexible start dates."
      }
    ]
  },
  {
    id: "newzealand",
    name: "New Zealand",
    flag: "🇳🇿",
    region: "oceania",
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
      note: "Varies by university, location & program"
    },
    faq: [
      {
        question: "What are the English language requirements for studying in New Zealand?",
        answer: "Most New Zealand universities require international students to demonstrate English proficiency through tests like IELTS (minimum 6.0-7.0) or TOEFL (minimum 80-100). Some universities also accept Cambridge English qualifications, PTE Academic, or Duolingo English Test. Requirements vary by institution and program level."
      },
      {
        question: "How long does the New Zealand student visa process take?",
        answer: "The New Zealand student visa process typically takes 4-8 weeks after you receive your Confirmation of Enrolment (CoE). You'll need to complete the online application, pay the application fee, and may need to attend a medical examination or provide additional documents."
      },
      {
        question: "Can I work while studying in New Zealand?",
        answer: "Yes, international students with a valid student visa can work up to 20 hours per week during term time and full-time during scheduled breaks. After graduation, you may apply for a Post-Study Work Visa to work in New Zealand for up to 3 years depending on your qualification level."
      },
      {
        question: "What is the Post-Study Work Visa in New Zealand?",
        answer: "The Post-Study Work Visa allows international graduates to stay in New Zealand for up to 3 years after completing their studies to work, travel, or study further. The duration depends on your qualification level: 1 year for Bachelor's, 2 years for Master's, and up to 3 years for PhD graduates."
      },
      {
        question: "How much money do I need to show for the New Zealand student visa?",
        answer: "You must demonstrate financial ability to cover your tuition fees, living expenses, and travel costs. You need to show NZD 15,000 per year for living expenses plus your tuition fees. You can show personal funds, family support, scholarships, or sponsor letters."
      },
      {
        question: "What is the academic year structure in New Zealand universities?",
        answer: "New Zealand universities typically follow a semester system (February-June and July-November) or trimester system. The academic year usually runs from February to November, with summer sessions available from November to February. Some institutions offer flexible start dates."
      }
    ]
  },
  {
    id: "southafrica",
    name: "South Africa",
    flag: "🇿🇦",
    region: "africa",
    whyChoose: [
      "🎓 Affordable universities with recognized degrees in Africa",
      "🌍 English-taught programs with multicultural environment",
      "💼 Career opportunities in business, IT, mining & research",
      "🌏 Safe, vibrant cities with rich culture and wildlife",
      "🤝 Growing international recognition and partnerships"
    ],
    costs: {
      tuition: "ZAR 50,000 – 120,000/year",
      livingExpenses: "ZAR 60,000 – 100,000/year",
      totalEstimated: "ZAR 110,000 – 220,000/year",
      note: "Varies by university, location & program"
    },
    faq: [
      {
        question: "What are the English language requirements for studying in South Africa?",
        answer: "Since English is widely used in South African universities, international students need to demonstrate English proficiency through tests like IELTS (minimum 6.0-6.5) or TOEFL (minimum 80-90). Some universities also accept Cambridge English qualifications, PTE Academic, or Duolingo English Test. Requirements vary by institution and program level."
      },
      {
        question: "How long does the South African student visa process take?",
        answer: "The South African student visa process typically takes 4-8 weeks after you receive your university admission letter. You'll need to apply at the South African embassy/consulate in your country, provide financial proof, health insurance, and other required documents. Processing times can vary based on your country of residence."
      },
      {
        question: "Can I work while studying in South Africa?",
        answer: "Yes, international students with a valid student visa can work part-time during term time and full-time during vacation periods. You need to obtain a work permit for employment. After graduation, you may apply for a temporary residence permit to look for employment."
      },
      {
        question: "What are the post-study work opportunities in South Africa?",
        answer: "After graduation, international students can apply for a temporary residence permit to look for employment. South Africa offers excellent career opportunities in business, IT, mining, research, and other sectors with competitive salaries and career growth prospects, especially as a gateway to Africa."
      },
      {
        question: "How much money do I need to show for the South African student visa?",
        answer: "You must demonstrate financial ability to cover your living expenses, typically ZAR 60,000-100,000 per year. You can show this through a blocked account, scholarship certificate, or financial guarantee. The exact amount varies based on your program duration and location."
      },
      {
        question: "What is the academic year structure in South African universities?",
        answer: "South African universities typically follow a semester system with Autumn Semester (February-June) and Spring Semester (July-November). The academic year usually runs from February to November, with breaks between semesters. Some institutions offer trimester systems or flexible start dates."
      }
    ]
  }
];

export const regionsData: RegionInfo[] = [
  {
    id: "north-america",
    name: "North America",
    description: "Explore world-class education opportunities in North America, home to top-ranked universities and innovative research institutions.",
    countries: ["us", "canada"]
  },
  {
    id: "europe",
    name: "Europe",
    description: "Discover diverse educational experiences across Europe, from historic universities to cutting-edge research facilities.",
    countries: ["uk", "ireland", "netherlands", "switzerland", "sweden", "poland", "hungary", "germany", "finland", "denmark", "cyprus", "lithuania", "bulgaria", "france", "italy", "spain", "austria"]
  },
  {
    id: "asia",
    name: "Asia",
    description: "Experience dynamic education in Asia's rapidly growing economies and world-renowned institutions.",
    countries: ["singapore", "malaysia", "china", "hongkong", "dubai"]
  },
  {
    id: "oceania",
    name: "Oceania",
    description: "Study in the vibrant educational landscape of Oceania, known for high-quality universities and multicultural environments.",
    countries: ["australia", "newzealand"]
  },
  {
    id: "africa",
    name: "Africa",
    description: "Explore emerging educational opportunities in Africa's diverse and growing academic landscape.",
    countries: ["mauritius", "southafrica"]
  }
];
