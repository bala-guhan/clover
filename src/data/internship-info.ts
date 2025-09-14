export type InternshipService = {
  title: string;
  description: string;
  icon?: string;
};

export type TimelineStep = {
  step: number;
  title: string;
  description: string;
  duration: string;
};

export type InternshipData = {
  title: string;
  heading: string;
  description: string;
  heroImage?: string;
  services: InternshipService[];
  objective: string;
  timeline: TimelineStep[];
  ctaButton: {
    text: string;
    link: string;
  };
};

export const internshipData: InternshipData = {
  title: "Internship",
  heading: "Your Launchpad to Global Opportunities",
  description: "We are India's only consultancy that goes beyond admissions by helping students build strong, competitive profiles and give Internship in our own organizations.",
  heroImage: "/uni-stud-hero.jpeg", // Using existing hero image
  services: [
    {
      title: "Internship Opportunities in Our Organization",
      description: "Gain hands-on experience working on real projects within our organization, building practical skills that enhance your academic profile.",
      icon: "🏢"
    },
    {
      title: "Research & Innovation Projects",
      description: "Work on cutting-edge research projects and innovative solutions that can be showcased in your applications and future career.",
      icon: "🔬"
    },
    {
      title: "Patent-Worthy Ideas Development",
      description: "Collaborate on developing ideas with patent potential, giving you a unique edge in competitive admissions and scholarship applications.",
      icon: "💡"
    },
    {
      title: "SOP & Resume Enhancement",
      description: "Get expert guidance on crafting compelling Statements of Purpose and resumes that effectively showcase your achievements and potential.",
      icon: "📝"
    }
  ],
  objective: "The goal is to transform a good profile into a standout one, making students more competitive for admissions, scholarships, and future career opportunities.",
  timeline: [
    {
      step: 1,
      title: "Profile Assessment",
      description: "We evaluate your current academic profile, skills, and career aspirations to identify areas for enhancement.",
      duration: "Week 1-2"
    },
    {
      step: 2,
      title: "Internship Placement",
      description: "Based on your profile and interests, we place you in relevant internship opportunities within our organization.",
      duration: "Week 3-4"
    },
    {
      step: 3,
      title: "Project Assignment",
      description: "You'll be assigned to meaningful projects that align with your academic goals and provide valuable experience.",
      duration: "Week 5-8"
    },
    {
      step: 4,
      title: "Skill Development",
      description: "Work on research, innovation, and practical projects while receiving mentorship and guidance from our experts.",
      duration: "Week 9-16"
    },
    {
      step: 5,
      title: "Achievement Documentation",
      description: "We help you document your achievements and create compelling narratives for your applications and resumes.",
      duration: "Week 17-20"
    },
    {
      step: 6,
      title: "Profile Enhancement",
      description: "Your enhanced profile is now ready to make you stand out in university applications, scholarships, and career opportunities.",
      duration: "Week 21-24"
    }
  ],
  ctaButton: {
    text: "Start Your Internship Journey",
    link: "/internship/apply"
  }
};
