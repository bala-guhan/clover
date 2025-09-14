import { motion } from "framer-motion";
import { DollarSign, Home, Plane, FileText } from "lucide-react";
import { NumberTicker } from "@/components/magicui/number-ticker";
import type { CountryInfo } from "@/data/countries-info";

interface CostOfStudyingProps {
  countryData: CountryInfo;
}

const costItems = [
  { key: 'tuition', label: 'Tuition Fees (Annual)', icon: DollarSign, color: 'emerald', values: { min: 20000, max: 50000 } },
  { key: 'livingExpenses', label: 'Living & Accommodation', icon: Home, color: 'emerald', values: { min: 10000, max: 18000 } },
];

const additionalCosts = [
  { label: 'Airfare from India', amount: '$1,000', icon: Plane, value: 1000 },
  { label: 'Visa Fees (Visa & SEVIS)', amount: '$535', icon: FileText, value: 535 },
];

export function CostOfStudying({ countryData }: CostOfStudyingProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
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
      y: -5,
      scale: 1.02,
    },
  };

  return (
    <div className="bg-emerald-50 py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">
            Cost of Studying in the {countryData.name}
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Understanding the financial investment required for your education journey
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Costs Section */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            variants={cardVariants}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h4 className="text-xl font-semibold text-emerald-900 mb-6 text-center">
              Annual Expenses
            </h4>
            
            <div className="space-y-4">
              {costItems.map((item) => {
                const IconComponent = item.icon;
                
                return (
                  <motion.div
                    key={item.key}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors duration-300"
                    variants={hoverVariants}
                    transition={{ duration: 0.2, ease: [0.42, 0, 0.58, 1] }}
                    whileHover="hover"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        item.color === 'emerald' ? 'bg-emerald-100' : 'bg-blue-100'
                      }`}>
                        <IconComponent className={`w-5 h-5 ${
                          item.color === 'emerald' ? 'text-emerald-600' : 'text-blue-600'
                        }`} />
                      </div>
                      <span className="font-medium text-gray-800">{item.label}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-lg text-emerald-700">
                        $<NumberTicker value={item.values.min} className="text-emerald-700" /> - $<NumberTicker value={item.values.max} className="text-emerald-700" />
                      </div>
                      <div className="text-sm text-gray-500">per year</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Total Section */}
            <motion.div
              className="mt-6 p-4 bg-emerald-100 rounded-xl border-2 border-emerald-200"
                variants={hoverVariants}
                transition={{ duration: 0.2, ease: [0.42, 0, 0.58, 1] }}
                whileHover="hover"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-lg text-emerald-800">Total Annual Expenses</span>
                <div className="text-right">
                  <div className="font-bold text-xl text-emerald-800">
                    $<NumberTicker value={30000} className="text-emerald-800" /> - $<NumberTicker value={65000} className="text-emerald-800" />
                  </div>
                  <div className="text-sm text-emerald-700">per year</div>
                </div>
              </div>
            </motion.div>

            {/* Note */}
            <p className="text-sm text-gray-600 mt-4 text-center italic">
              {countryData.costs.note}
            </p>
          </motion.div>

          {/* Additional Costs Section */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            variants={cardVariants}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h4 className="text-xl font-semibold text-emerald-900 mb-6 text-center">
              Additional One-Time Costs
            </h4>
            
            <div className="space-y-4">
              {additionalCosts.map((cost, index) => {
                const IconComponent = cost.icon;
                
                return (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors duration-300"
                    variants={hoverVariants}
                    transition={{ duration: 0.2, ease: [0.42, 0, 0.58, 1] }}
                    whileHover="hover"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-orange-600" />
                      </div>
                      <span className="font-medium text-gray-800">{cost.label}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-lg text-emerald-700">
                        $<NumberTicker value={cost.value} className="text-emerald-700" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Summary Box */}
            <motion.div
              className="mt-6 p-4 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-xl border border-emerald-200"
                variants={hoverVariants}
                transition={{ duration: 0.2, ease: [0.42, 0, 0.58, 1] }}
                whileHover="hover"
            >
              <div className="text-center">
                <p className="text-sm text-gray-700 mb-2">
                  First Year Total (Including Additional Costs)
                </p>
                <div className="text-2xl font-bold text-emerald-900">
                  ~$<NumberTicker value={42000} className="text-emerald-900" /> - $<NumberTicker value={66000} className="text-emerald-900" />
                </div>
                <p className="text-xs text-gray-600 mt-1">
                  *Varies by university, location & lifestyle
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
