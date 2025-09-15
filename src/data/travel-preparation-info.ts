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
  heroImage: "/colleagues-discussing-at-desk-in-creative-office.webp",
  services: [
    {
      title: "Flight Booking Assistance",
      description: "Helping you choose cost-effective, convenient flight options and advising on student-friendly airlines.",
      icon: "✈️",
      image: "/group-of-women-discussing-in-a-co-working-office.webp"
    },
    {
      title: "Forex & Currency Guidance",
      description: "Assistance in obtaining foreign exchange, prepaid travel cards, and budgeting for initial expenses.",
      icon: "💱",
      image: "/group-of-young-people-discussing-in-the-co-working-office.webp"
    },
    {
      title: "Health & Travel Insurance",
      description: "Recommendations for reliable insurance providers that meet visa and university requirements.",
      icon: "🏥",
      image: "/global-indian-business-office-lifestyle.webp"
    },
    {
      title: "Packing & Documentation Checklist",
      description: "Detailed guidance on what to pack, documents to carry, and country-specific essentials.",
      icon: "🎒",
      image: "/colleagues-discussing-at-desk-in-creative-office (1).webp"
    },
    {
      title: "Pre-Departure Orientation",
      description: "A session covering cultural insights, safety tips, airport navigation, immigration processes, and do's & don'ts abroad.",
      icon: "🎓",
      image: "/business-colleagues-discussing-architecture-project-in-office-picture-id1210334439.webp"
    },
    {
      title: "Networking Opportunities",
      description: "Connecting you with other students traveling to the same country or university, so you don't feel alone.",
      icon: "🤝",
      image: "/group-of-coworkers-in-discussion-in-office.webp"
    }
  ],
  objective: "We make sure you're fully prepared and confident before boarding your flight.",
  ctaButton: {
    text: "Start Travel Preparation",
    link: "/travel-preparation/start"
  }
};
