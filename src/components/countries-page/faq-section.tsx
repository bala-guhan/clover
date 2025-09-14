import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";
import type { CountryInfo } from "@/data/countries-info";

interface FAQSectionProps {
  countryData: CountryInfo;
}

export function FAQSection({ countryData }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Don't render if no FAQ data
  if (!countryData.faq || countryData.faq.length === 0) {
    return null;
  }

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

  const answerVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      paddingTop: 0,
      paddingBottom: 0,
      marginTop: 0,
    },
    visible: {
      opacity: 1,
      height: "auto",
      paddingTop: "1rem",
      paddingBottom: "1rem",
      marginTop: "1rem",
    },
    exit: {
      opacity: 0,
      height: 0,
      paddingTop: 0,
      paddingBottom: 0,
      marginTop: 0,
    },
  };

  const chevronVariants = {
    closed: { rotate: 0 },
    open: { rotate: 180 },
  };

  return (
    <div className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="w-8 h-8 text-emerald-600 mr-3" />
            <h3 className="text-3xl md:text-4xl font-bold text-emerald-900">
              Frequently Asked Questions
            </h3>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Common questions about studying in the {countryData.name}
          </p>
        </motion.div>

        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {countryData.faq.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
              variants={cardVariants}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ scale: 1.01 }}
            >
              <motion.button
                className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50"
                onClick={() => toggleFAQ(index)}
                whileTap={{ scale: 0.98 }}
              >
                <h4 className="text-lg font-semibold text-gray-900 pr-4 leading-relaxed">
                  {faq.question}
                </h4>
                <motion.div
                  variants={chevronVariants}
                  animate={openIndex === index ? "open" : "closed"}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-emerald-600" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    className="border-t border-gray-200 bg-white"
                    variants={answerVariants}
                    transition={{ duration: 0.3, ease: [0.42, 0, 0.58, 1] }}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Help Section */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-8 border border-emerald-200">
            <h4 className="text-xl font-semibold text-gray-900 mb-3">
              Still have questions?
            </h4>
            <p className="text-gray-600 mb-4">
              Our education consultants are here to help you with personalized guidance
            </p>
            <motion.button
              className="bg-emerald-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Our Experts
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
