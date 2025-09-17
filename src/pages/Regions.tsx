import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { regionsData } from '../data/regions-info';
import { RippleButton } from '../components/magicui/ripple-button';
import { FaDollarSign, FaQuestionCircle, FaCheckCircle } from 'react-icons/fa';

const Regions: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get the region ID from the current pathname
  const regionId = location.pathname.substring(1); // Remove the leading slash

  // Find the region data
  const region = regionsData.find(r => r.id === regionId);

  if (!region) {
    return (
      <div className="min-h-screen bg-emerald-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-emerald-900 mb-4">Region Not Found</h1>
          <p className="text-gray-600 mb-8">The region you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/')}
            className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-emerald-200/50 min-h-screen">
      {/* Hero Section */}
      <div className="relative pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-emerald-900 mb-8">
              {region.name}
            </h1>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              {region.description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Hero Image Section */}
      <div className="relative bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-12">
              <img
                src={region.heroImage}
                alt={`Study in ${region.name}`}
                className="w-full h-96 md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                  Discover {region.name}
                </h2>
                <p className="text-lg opacity-90">
                  Your gateway to world-class education
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>


      {/* Countries Section with Alternating Layout */}
      <div className="relative bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-6">
              Countries in {region.name}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore the diverse educational opportunities across {region.name}
            </p>
          </motion.div>

          <div className="space-y-20">
            {region.countries.map((country, index) => (
              <motion.div
                key={country.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
              >
                {/* Image Section */}
                <div className="flex-1">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={country.image}
                      alt={`Study in ${country.name}`}
                      className="w-full h-80 md:h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-3xl">{country.flag}</span>
                        <h3 className="text-2xl md:text-3xl font-bold">{country.name}</h3>
                      </div>
                      <p className="text-sm opacity-90">{country.shortDescription}</p>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 space-y-8">
                  {/* Country Description */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-4">
                      Why Choose {country.name}?
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg mb-6">
                      {country.description}
                    </p>
                  </div>

                  {/* Why Choose Points */}
                  <div className="space-y-4">
                    {country.whyChoose.map((reason, reasonIndex) => (
                      <div key={reasonIndex} className="flex items-start space-x-3">
                        <FaCheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                        <p className="text-gray-700 leading-relaxed">{reason}</p>
                      </div>
                    ))}
                  </div>

                  {/* Cost Information */}
                  <div className="bg-emerald-50 rounded-2xl p-6">
                    <div className="flex items-center mb-4">
                      <FaDollarSign className="w-6 h-6 text-emerald-600 mr-3" />
                      <h4 className="text-xl font-bold text-emerald-900">Estimated Costs</h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-sm text-gray-600 mb-1">Tuition</div>
                        <div className="font-semibold text-emerald-700">{country.costs.tuition}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-gray-600 mb-1">Living</div>
                        <div className="font-semibold text-emerald-700">{country.costs.livingExpenses}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-gray-600 mb-1">Total</div>
                        <div className="font-bold text-emerald-800 text-lg">{country.costs.totalEstimated}</div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-3 text-center">{country.costs.note}</p>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Combined FAQ Section */}
      <div className="relative bg-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Common questions about studying in {region.name}
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {region.combinedFaq.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-emerald-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                      <FaQuestionCircle className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-emerald-900 mb-3">
                        {faq.question}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-6">
              Ready to Start Your Journey in {region.name}?
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Let us help you find the perfect university and program in {region.name}. 
              Our expert counsellors are here to guide you through every step of your application process.
            </p>
            
            <div className="pt-8">
              <RippleButton
                onClick={() => navigate('/counselling')}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Free Counselling
              </RippleButton>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Regions;