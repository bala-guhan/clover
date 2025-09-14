export type LoanFeature = {
  title: string;
  description: string;
  icon?: string;
};

export type LoanProcessStep = {
  step: number;
  title: string;
  description: string;
};

export type AncillaryService = {
  title: string;
  icon?: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  program: string;
  location: string;
};

export type TickerData = {
  value: string;
  label: string;
  suffix?: string;
};

export type LoansData = {
  tab: string;
  logo: string;
  loanName: string;
  heading: string;
  subheading: string;
  tickerValue: string;
  description: string;
  features: LoanFeature[];
  processSteps: LoanProcessStep[];
  ancillaryServices: AncillaryService[];
  tickerData: TickerData[];
  testimonials: Testimonial[];
  ctaButton: {
    text: string;
    link: string;
  };
};

export const loansData: LoansData = {
  tab: "LOANS",
  logo: "/clover-logo-icon.svg",
  loanName: "Ron Destino",
  heading: "Ron Destino – Finance Your Destiny, Shape Your Future",
  subheading: "Your gateway to global education — hassle-free loans that travel with you.",
  tickerValue: "$1.7M+ scholarships and loans already facilitated for students worldwide.",
  description: "Ron Destino was founded by our team of visionaries with extensive experience in finance and global education. We envisioned a platform that delivers a seamless and simplified loan experience for students aspiring to study abroad, eliminating the complexities of traditional loan procedures. Thus, we pioneered Ron Destino, the loan solutions division of Clover Overseas Education. Since its inception, Ron Destino has partnered with leading financial institutions across India and has assisted countless students in enrolling at hundreds of universities worldwide, providing affordable, hassle-free, and student-friendly loan options.",
  features: [
    {
      title: "Study Loans through 20+ Leading Financial Institutions",
      description: "Access to a wide network of trusted banks and financial institutions for the best loan options.",
      icon: "🏦"
    },
    {
      title: "Secured and Unsecured Loans",
      description: "Flexible loan options to suit different financial situations and requirements.",
      icon: "🔒"
    },
    {
      title: "Pre-visa Disbursal of Loans",
      description: "Get your loan approved and disbursed before your visa application for a smooth process.",
      icon: "✈️"
    },
    {
      title: "Hassle Free Documentation",
      description: "Simplified documentation process with expert guidance at every step.",
      icon: "📄"
    },
    {
      title: "Quick Sanction of loans",
      description: "Fast approval process to ensure you don't miss important deadlines.",
      icon: "⚡"
    },
    {
      title: "Zero Service Charges",
      description: "No hidden fees or service charges - what you see is what you pay.",
      icon: "💰"
    }
  ],
  processSteps: [
    {
      step: 1,
      title: "Approach us in Person",
      description: "Visit our office or schedule a consultation to discuss your loan requirements and eligibility."
    },
    {
      step: 2,
      title: "Create your Profile and know your Eligibility",
      description: "We'll help you create a comprehensive profile and determine your loan eligibility across different institutions."
    },
    {
      step: 3,
      title: "Proceed with Documentation & Application process",
      description: "Our experts will guide you through the documentation process and help submit your loan application."
    },
    {
      step: 4,
      title: "Get your loan Sanctioned",
      description: "Receive quick approval and disbursement of your education loan to fund your global education dreams."
    }
  ],
  ancillaryServices: [
    {
      title: "Government Scholarships",
      icon: "🎓"
    },
    {
      title: "Foreign Exchange",
      icon: "💱"
    },
    {
      title: "Global Forex Card",
      icon: "💳"
    },
    {
      title: "International Sim Card",
      icon: "📱"
    },
    {
      title: "Overseas Travel Insurance",
      icon: "🛡️"
    }
  ],
  tickerData: [
    {
      value: "96",
      label: "Loan Approval Rate",
      suffix: "%"
    },
    {
      value: "1.7",
      label: "in Scholarships & Loans Facilitated",
      suffix: "M+"
    }
  ],
  testimonials: [
    {
      quote: "The documentation checklist was so clear, and the team even helped me get a better interest rate. Ron Destino really simplified everything for me.",
      author: "Karan S.",
      program: "MBA",
      location: "UK"
    },
    {
      quote: "Clover coordinated with the bank, university, and even helped with the disbursement schedule. I didn't have to stress about anything.",
      author: "Rahul D.",
      program: "Bachelor's in Computer Science",
      location: "USA"
    },
    {
      quote: "Clover explained financial planning, cost of living, and even gave us tips to manage expenses abroad. Their guidance was invaluable.",
      author: "Parents of Dev M.",
      program: "Master's in Economics",
      location: "Netherlands"
    }
  ],
  ctaButton: {
    text: "Apply for Education Loan",
    link: "/loans/apply"
  }
};
