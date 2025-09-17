export type ImpactTicker = {
  value: string;
  label: string;
  suffix?: string;
  icon: string;
  subtext: string;
};

export type WhyChooseUsFeature = {
  number: number;
  title: string;
  description: string;
  icon?: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  program: string;
  location: string;
};

export type AboutData = {
  title: string;
  whoWeAre: {
    heading: string;
    description: string;
  };
  impactTickers: ImpactTicker[];
  vision: {
    heading: string;
    description: string;
  };
  mission: {
    heading: string;
    description: string;
  };
  whyChooseUs: {
    heading: string;
    features: WhyChooseUsFeature[];
  };
  testimonials: {
    heading: string;
    testimonials: Testimonial[];
  };
  ctaButton: {
    text: string;
    link: string;
  };
};

export const aboutData: AboutData = {
  title: "ABOUT US",
  whoWeAre: {
    heading: "Who We Are",
    description: "At Clover Overseas Education, we specialize in guiding students through every step of their study abroad journey, from the very first counselling session to settling into their new country. Our mission is to connect aspiring students with world-class education opportunities across the globe. With 31+ countries and 800+ top global universities in our network, we offer personalized counselling to match your academic goals and interests with the right country, university, and course. Our global reach includes strong partnerships with top institutions in the USA, UK, Canada, Australia, New Zealand, Europe, and beyond making sure students have access to the best options worldwide. Our team ensures application excellence, handling everything from SOPs and documentation to deadlines and follow-ups with precision. We provide visa and interview preparation with proven strategies that increase approval chances and boost student confidence. Beyond admissions, we support students with pre-departure sessions, accommodation assistance, travel guidance, and continuous support until they are fully settled abroad. Most importantly, we do admissions everywhere, whether you want to study in a top-ranking global university, a specialized college, or a niche program in a specific country, Clover Overseas Education ensures that no destination is out of reach."
  },
  impactTickers: [
    {
      value: "1200",
      label: "Students Placed",
      suffix: "+",
      icon: "🎓",
      subtext: "Successfully guided to their dream universities worldwide"
    },
    {
      value: "31",
      label: "Countries",
      suffix: "",
      icon: "🌍",
      subtext: "Global presence across major study destinations"
    },
    {
      value: "85",
      label: "Courses",
      suffix: "K",
      icon: "📚",
      subtext: "Wide range of academic programs and specializations"
    },
    {
      value: "800",
      label: "Universities",
      suffix: "+",
      icon: "🏛️",
      subtext: "Partner institutions including top-ranked universities"
    },
    {
      value: "96",
      label: "Visa Success",
      suffix: "%",
      icon: "✅",
      subtext: "Proven track record in visa approvals and processing"
    },
    {
      value: "20",
      label: "Banks & NBFCs",
      suffix: "+",
      icon: "🏦",
      subtext: "Financial partners for education loans and funding"
    }
  ],
  vision: {
    heading: "Our Vision",
    description: "To be the most innovative and trusted global education partner, helping students from all walks of life secure admissions at top institutions worldwide. We envision a future where every deserving student has access to quality education, international exposure, and the confidence to pursue their dreams without limitations."
  },
  mission: {
    heading: "Our Mission",
    description: "To empower students with opportunities that go beyond academics, by offering personalized counselling, university selection, profile-enhancing internships, and end-to-end admission support. We aim to create global-ready graduates who stand out in competitive admissions and are prepared to succeed in education, career, and life abroad."
  },
  whyChooseUs: {
    heading: "Why Choose Us?",
    features: [
      {
        number: 1,
        title: "Profile Enhancing Beyond Academics",
        description: "Through our internships and innovative Patentable projects, we make sure that the student stands out in competitive admissions with enhanced eligibility",
        icon: "🎯"
      },
      {
        number: 2,
        title: "Student Centric Approach",
        description: "We focus on mentoring the student in the right direction and career path and help them apply to tie up and non-tie up universities of their choice",
        icon: "👨‍🎓"
      },
      {
        number: 3,
        title: "End-to-End Admission Support",
        description: "We support students from career choice to campus abroad, including counselling, test prep, admissions, visas, travel, and scholarships",
        icon: "🔄"
      },
      {
        number: 4,
        title: "AI Driven University Selection",
        description: "With our unique advanced AI course finder, we can select your universities tailored to your specific profile and needs for improvement of acceptance rate",
        icon: "🤖"
      },
      {
        number: 5,
        title: "Dedicated Business Intelligence Team",
        description: "Our BI team analyzes industry trends and future career prospects, which empowers the students make the right decision",
        icon: "📊"
      },
      {
        number: 6,
        title: "Placement Support",
        description: "With our connections and tie ups across the globe, we help students to get Job in their respective field after completion of their education",
        icon: "💼"
      }
    ]
  },
  testimonials: {
    heading: "What Our Students Say",
    testimonials: [
      {
        quote: "Clover Overseas Education made my dream come true! From shortlisting the right universities to guiding me through SOPs and visa interviews, their team was there at every step. Today, I am studying at my dream university in Canada.",
        author: "Ananya R.",
        program: "Master's in Data Science",
        location: "Canada"
      },
      {
        quote: "The counselling was so personalized and stress-free. They helped me choose the perfect course in the UK, arranged mock visa interviews, and even guided me on accommodation. I felt fully supported throughout the process.",
        author: "Rahul S.",
        program: "MBA",
        location: "United Kingdom"
      },
      {
        quote: "Thanks to Clover, I got a scholarship! The team not only helped with my admission to an Australian university but also assisted me in applying for scholarships and securing a student loan at a low interest rate.",
        author: "Sneha M.",
        program: "Master's in Engineering",
        location: "Australia"
      },
      {
        quote: "Best consultancy for students aiming abroad. Their AI-driven university selection and internship opportunities made my profile stronger. The entire process was smooth and professional.",
        author: "Karan P.",
        program: "Bachelor's in Computer Science",
        location: "USA"
      }
    ]
  },
  ctaButton: {
    text: "Start Your Journey",
    link: "/counselling"
  }
};
