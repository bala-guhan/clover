export type PostLandingService = {
  title: string;
  description: string;
  icon?: string;
  number: string;
};

export type PostLandingData = {
  title: string;
  heading: string;
  description: string;
  heroImage?: string;
  services: PostLandingService[];
  objective: string;
  ctaButton: {
    text: string;
    link: string;
  };
};

export const postLandingData: PostLandingData = {
  title: "Post-Landing Support",
  heading: "Your Journey Truly Begins After Arrival",
  description: "At Clover, we believe your journey truly begins after arrival, which is why we provide continuous support to help you adapt smoothly.",
  heroImage: "/uni-stud-hero.jpeg", // Using existing hero image
  services: [
    {
      number: "①",
      title: "Accommodation Assistance",
      description: "We guide you in finding safe, affordable housing — whether on-campus or off-campus.",
      icon: "🏠"
    },
    {
      number: "②",
      title: "Airport Pickup Guidance",
      description: "Clover helps you arrange reliable airport pickup so your arrival is worry-free.",
      icon: "✈️"
    },
    {
      number: "③",
      title: "Local Registration Support",
      description: "We guide you through essential local formalities like university enrollment, residence permits, and police registration (if needed).",
      icon: "📋"
    },
    {
      number: "④",
      title: "Banking & SIM Card Help",
      description: "We assist you in opening a local bank account and getting a SIM card so you can stay connected from day one.",
      icon: "💳"
    },
    {
      number: "⑤",
      title: "Community & Networking",
      description: "Clover introduces you to local student communities and alumni networks for easier adaptation.",
      icon: "🤝"
    },
    {
      number: "⑥",
      title: "Ongoing Assistance",
      description: "We stay available for your questions even after you've settled, because Clover is committed to your success beyond admissions.",
      icon: "📞"
    }
  ],
  objective: "At Clover, we don't just send you abroad, we make sure you feel at home there.",
  ctaButton: {
    text: "Get Post-Arrival Support",
    link: "/post-landing/support"
  }
};
