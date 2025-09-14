export type TravelPreparationService = {
  title: string;
  description: string;
  icon?: string;
  image?: string;
};

export type TravelPreparationData = {
  title: string;
  heading: string;
  subheading: string;
  description: string;
  heroImage?: string;
  services: TravelPreparationService[];
  objective: string;
  ctaButton: {
    text: string;
    link: string;
  };
};

export const travelPreparationData: TravelPreparationData = {
  title: "Travel Preparation",
  heading: "Your Study Abroad Journey Continues",
  subheading: "End-to-end travel preparation support so that you can focus on your excitement, not logistics.",
  description: "Your study abroad journey doesn't end with getting your visa, you still need to plan for a smooth and stress-free transition. At Clover Overseas Education, we provide end-to-end travel preparation support so that you can focus on your excitement, not logistics.",
  heroImage: "/uni-stud-hero.jpeg", // Using existing hero image
  services: [
    {
      title: "Flight Booking Assistance",
      description: "Helping you choose cost-effective, convenient flight options and advising on student-friendly airlines.",
      icon: "✈️",
      image: "/usa-uni-1.jpeg"
    },
    {
      title: "Forex & Currency Guidance",
      description: "Assistance in obtaining foreign exchange, prepaid travel cards, and budgeting for initial expenses.",
      icon: "💱",
      image: "/usa-uni-2.jpeg"
    },
    {
      title: "Health & Travel Insurance",
      description: "Recommendations for reliable insurance providers that meet visa and university requirements.",
      icon: "🏥",
      image: "/usa-uni-3.jpeg"
    },
    {
      title: "Packing & Documentation Checklist",
      description: "Detailed guidance on what to pack, documents to carry, and country-specific essentials.",
      icon: "🎒",
      image: "/uni-stud-2hero.jpeg"
    },
    {
      title: "Pre-Departure Orientation",
      description: "A session covering cultural insights, safety tips, airport navigation, immigration processes, and do's & don'ts abroad.",
      icon: "🎓",
      image: "/uni-stud-3hero.jpeg"
    },
    {
      title: "Networking Opportunities",
      description: "Connecting you with other students traveling to the same country or university, so you don't feel alone.",
      icon: "🤝",
      image: "/uni-stud-hero.jpeg"
    }
  ],
  objective: "We make sure you're fully prepared and confident before boarding your flight.",
  ctaButton: {
    text: "Start Travel Preparation",
    link: "/travel-preparation/start"
  }
};
