export type TestPreparationService = {
  title: string;
  description: string;
  icon?: string;
};

export type TestType = {
  name: string;
  fullName: string;
  description: string;
  image?: string;
  features?: string[];
};

export type TestPreparationData = {
  title: string;
  heading: string;
  description: string;
  heroImage?: string;
  services: TestPreparationService[];
  objective: string;
  pathwayTitle: string;
  testTypes: TestType[];
  ctaButton: {
    text: string;
    link: string;
  };
};

export const testPreparationData: TestPreparationData = {
  title: "Test Preparation",
  heading: "One Stop Solution For All Standardized Tests",
  description: "Our test preparation programs are designed to help students achieve competitive scores that strengthen their university applications.",
  heroImage: "/uni-stud-2hero.jpeg", // Using existing hero image
  services: [
    {
      title: "Comprehensive Coaching",
      description: "Training for IELTS, TOEFL, PTE, Duolingo, GRE, GMAT, SAT, and country-specific language courses such as German and Japanese.",
      icon: "📚"
    },
    {
      title: "Personalized Learning Plans",
      description: "Each student's strengths and weaknesses are assessed to design a focused study plan that maximizes improvement.",
      icon: "🎯"
    },
    {
      title: "Expert Faculty & Mentorship",
      description: "Experienced trainers provide proven strategies, tips, and techniques to help students excel in each test section.",
      icon: "👨‍🏫"
    },
    {
      title: "Practice Material & Mock Tests",
      description: "Access to high-quality study resources, question banks, and full-length mock tests to simulate real exam conditions.",
      icon: "📝"
    },
    {
      title: "Performance Tracking",
      description: "Regular progress reviews highlight areas that need attention, ensuring consistent improvement.",
      icon: "📊"
    },
    {
      title: "Flexible Schedules",
      description: "Both online and offline options are available, making it easy to balance test prep with other commitments.",
      icon: "⏰"
    }
  ],
  objective: "Clover's goal is to turn test anxiety into test confidence, helping students achieve scores that strengthen their applications.",
  pathwayTitle: "Your Pathway to Exam Excellence",
  testTypes: [
    {
      name: "TOEFL",
      fullName: "Test of English as a Foreign Language",
      description: "TOEFL - Test of English as a Foreign Language is a standardized English proficiency test that assesses English Language skills in the areas of Listening, Reading, Writing and Speaking. Candidates desirous of pursuing further studies at undergraduate or graduate levels are required to take TOEFL to demonstrate their English proficiency. This test is offered 30-40 times a year, and is accepted by all Institutions in the USA as well as by some Institutions in UK and Canada.",
      image: "/usa-uni-1.jpeg"
    },
    {
      name: "IELTS",
      fullName: "International English Language Testing System",
      description: "IELTS (International English Language Testing System) is a globally recognized English language proficiency test that assesses an individual's communication skills. With a legacy of more than 30 years, today over 12,000 organizations and people around the world rely on IELTS for professional, personal and academic purposes.",
      image: "/usa-uni-2.jpeg"
    },
    {
      name: "PTE",
      fullName: "Pearson Test of English",
      description: "PTE (Pearson Test of English) is a globally recognized and standardised English language proficiency test that assesses an individual's communication skills. It is a computer delivered exam. Over 35,000+ universities and educational institutes across the globe rely on PTE scores for providing admissions in various degree courses. The PTE exam is accepted for study applications, work visas, immigration in US, UK, New Zealand, Australia, Canada, UAE, Singapore, etc.",
      image: "/usa-uni-3.jpeg"
    },
    {
      name: "Duolingo",
      fullName: "Duolingo English Test",
      description: "The Duolingo English Test is a computer-based proficiency test that evaluates a test taker's Listening, Reading, Writing, and Speaking skills. Using computer adaptive technology, the Duolingo exam adjusts the difficulty of questions for each individual. Additionally, the test includes a video interview and a writing sample, which, while not graded, are submitted to the institution along with your proficiency score when you report your results.",
      image: "/uni-stud-hero.jpeg"
    },
    {
      name: "SAT",
      fullName: "Scholastic Aptitude Test",
      description: "The Scholastic Aptitude Test is a multiple-choice, computer-based test created and administered by the College Board. The purpose of the SAT is to measure a high school student's readiness for college, and provide colleges with one common data point that can be used to compare all applicants.",
      image: "/uni-stud-2hero.jpeg"
    },
    {
      name: "GRE",
      fullName: "Graduate Record Examination",
      description: "GRE or the Graduate Record Examination is a world-renowned admission test. The GRE exam preparation is undertaken by those candidates who wish to seek admission to graduate programs primarily in the areas of Engineering and Sciences, primarily in the USA. Sometimes used as a substitute for GMAT. GRE exam scores are used by more than 3,000 graduate programs throughout the world. It assesses test takers verbal reasoning, numeric reasoning, critical thinking, and analytical writing abilities, which have been built over time and are unrelated to a specific subject of study but are relevant for everyone.",
      image: "/uni-stud-3hero.jpeg"
    },
    {
      name: "GMAT",
      fullName: "Graduate Management Admission Test",
      description: "GMAT (Graduate Management Admission Test) is a globally recognized business school exam to get into business school for pursuing postgraduate degrees. The GMAT exam assesses an individual's business skills as well as other in-demand business world relevant skills such as data-analytics. Over 7,700 business schools programs throughout the world rely on GMAT scores for enrolling students in Master of Business Administration (MBA), MS in Management and other post-graduate business degree courses.",
      image: "/uni-stud-hero.jpeg"
    },
    {
      name: "German Language",
      fullName: "German Language Certification",
      description: "Learn to read, write, and speak German with confidence. Our structured program prepares you for exams like Goethe-Zertifikat and TestDaF, helping you meet university admission and visa requirements for Germany.",
      image: "/uni-stud-2hero.jpeg"
    },
    {
      name: "Japanese Language",
      fullName: "Japanese Language Proficiency Test",
      description: "Master Japanese through comprehensive lessons in grammar, reading, writing, and conversation. Our training also prepares you for the JLPT (Japanese-Language Proficiency Test), which is essential for education and employment opportunities in Japan. At Clover, we combine language learning with cultural orientation to help you integrate seamlessly into Japanese academic and professional life.",
      image: "/uni-stud-3hero.jpeg"
    }
  ],
  ctaButton: {
    text: "Start Test Preparation",
    link: "/test-preparation/start"
  }
};
