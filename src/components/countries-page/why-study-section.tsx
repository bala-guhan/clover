import { motion } from "framer-motion";

interface WhyStudyData {
  title: string;
  description: string;
  features: {
    title: string;
    description: string;
    image: string;
    points: string[];
  }[];
}

interface WhyStudySectionProps {
  data: WhyStudyData;
}

export function WhyStudySection({ data }: WhyStudySectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
    },
  };

  const hoverVariants = {
    hover: {
      y: -8,
    },
  };

  return (
    <motion.div
      className="relative bg-gradient-to-br from-gray-50 to-white py-20 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          variants={headerVariants}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6">
            {data.title}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
            {data.description}
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {data.features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              variants={cardVariants}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover="hover"
            >
              <motion.div 
                variants={hoverVariants}
                transition={{ duration: 0.3, ease: [0.42, 0, 0.58, 1] }}
              >
                {/* Image */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-emerald-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Bullet Points */}
                  <ul className="space-y-2">
                    {feature.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start">
                        <span className="text-emerald-600 mr-2 mt-1">•</span>
                        <span className="text-gray-700 text-sm leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
