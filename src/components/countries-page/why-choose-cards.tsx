import { motion } from "framer-motion";
import { Globe, BookOpen, Users, Briefcase, Rocket } from "lucide-react";
import type { CountryInfo } from "@/data/countries-info";

interface WhyChooseCardsProps {
  countryData: CountryInfo;
}

const iconMap = {
  "🌎": Globe,
  "📚": BookOpen,
  "🤝": Users,
  "💼": Briefcase,
  "🚀": Rocket,
};

export function WhyChooseCards({ countryData }: WhyChooseCardsProps) {
  const getIcon = (emoji: string) => {
    return iconMap[emoji as keyof typeof iconMap] || Globe;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
    },
  };

  const hoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
    },
  };

  return (
    <motion.div
      className="grid gap-6 md:grid-cols-2 lg:grid-cols-1"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {countryData.whyChoose.map((reason, index) => {
        const emoji = reason.substring(0, 2);
        const text = reason.substring(2).trim();
        const IconComponent = getIcon(emoji);

        return (
          <motion.div
            key={index}
            className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            variants={cardVariants}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover="hover"
          >
            <motion.div
              className="flex items-center space-x-4"
              variants={hoverVariants}
              transition={{ duration: 0.2, ease: [0.42, 0, 0.58, 1] }}
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <IconComponent className="w-6 h-6 text-emerald-600" />
                </div>
              </div>
              <div className="flex-1">
                <p className="flex text-gray-700 leading-relaxed font-medium">
                  {text}
                </p>
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
