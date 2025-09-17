import { motion } from "framer-motion";
import { aboutData } from "@/data/about-info";
import { NumberTicker } from "@/components/magicui/number-ticker";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import PopperButton from '../components/popper-button';

export default function AboutUs() {
    const handleStartJourney = () => {
        window.location.href = '/counselling';
    };

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
                            {aboutData.title}
                        </h1>
                    </motion.div>
                </div>
            </div>

            {/* Who We Are Section */}
            <div className="relative bg-white py-20">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-8">
                            {aboutData.whoWeAre.heading}
                        </h2>
                        <div className="max-w-5xl mx-auto">
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                {aboutData.whoWeAre.description}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Our Impact Ticker Section */}
            <div className="relative bg-emerald-50 py-20 overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-100 rounded-full opacity-20 animate-pulse"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
                
                <div className="relative max-w-7xl mx-auto px-4 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-6">
                            Our Impact
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Transforming dreams into reality through our comprehensive education services and global partnerships
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {aboutData.impactTickers.map((ticker, index) => (
                            <motion.div
                                key={ticker.label}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100 hover:border-emerald-200 group"
                            >
                                {/* Icon */}
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {ticker.icon}
                                </div>
                                
                                {/* Number */}
                                <div className="text-4xl md:text-5xl font-bold text-emerald-600 mb-3">
                                    <NumberTicker value={parseFloat(ticker.value)} />
                                    {ticker.suffix}
                                </div>
                                
                                {/* Label */}
                                <h3 className="text-lg md:text-xl font-semibold text-emerald-900 mb-3">
                                    {ticker.label}
                                </h3>
                                
                                {/* Subtext */}
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {ticker.subtext}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Vision & Mission Section */}
            <div className="relative bg-white py-20 overflow-hidden">
                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-20 left-20 w-32 h-32 bg-emerald-200 rounded-full"></div>
                    <div className="absolute bottom-20 right-20 w-24 h-24 bg-emerald-300 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-emerald-100 rounded-full"></div>
                </div>
                
                <div className="relative max-w-7xl mx-auto px-4 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-6">
                            Our Vision & Mission
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Guiding principles that drive our commitment to student success and global education excellence
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Vision Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-200 group"
                        >
                            <div className="flex items-center mb-6">
                                <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center text-white text-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                                    👁️
                                </div>
                                <h3 className="text-2xl font-bold text-emerald-900">
                                    {aboutData.vision.heading}
                                </h3>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                {aboutData.vision.description}
                            </p>
                            <div className="mt-6 flex items-center text-emerald-600">
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm font-medium">Our Future Goal</span>
                            </div>
                        </motion.div>

                        {/* Mission Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-200 group"
                        >
                            <div className="flex items-center mb-6">
                                <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center text-white text-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                                    🎯
                                </div>
                                <h3 className="text-2xl font-bold text-emerald-900">
                                    {aboutData.mission.heading}
                                </h3>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                {aboutData.mission.description}
                            </p>
                            <div className="mt-6 flex items-center text-emerald-600">
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm font-medium">Our Daily Commitment</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="relative bg-white py-20 overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-100 rounded-full opacity-20 animate-pulse"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-6">
                            {aboutData.whyChooseUs.heading}
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {aboutData.whyChooseUs.features.map((feature, index) => {
                            const isPlacementSupport = feature.title === "Placement Support";
                            
                            return (
                                <motion.div
                                    key={feature.number}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className={`rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border group relative ${
                                        isPlacementSupport 
                                            ? 'bg-gradient-to-br from-emerald-600 to-emerald-700 text-white border-emerald-500 hover:border-emerald-400 transform hover:scale-105' 
                                            : 'bg-white border-emerald-100 hover:border-emerald-200'
                                    }`}
                                >
                                    {/* Number Badge */}
                                    <div className={`absolute -top-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-lg ${
                                        isPlacementSupport 
                                            ? 'bg-white text-emerald-600' 
                                            : 'bg-emerald-600 text-white'
                                    }`}>
                                        {feature.number}
                                    </div>

                                    {/* Special highlight badge for Placement Support */}
                                    {isPlacementSupport && (
                                        <div className="absolute -top-2 -right-2 bg-yellow-400 text-emerald-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                                            ⭐ FEATURED
                                        </div>
                                    )}

                                    <div className="pt-4">
                                        <div className="flex items-start space-x-4">
                                            <div className="flex-shrink-0">
                                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-colors duration-300 ${
                                                    isPlacementSupport 
                                                        ? 'bg-white/20 group-hover:bg-white/30' 
                                                        : 'bg-emerald-100 group-hover:bg-emerald-200'
                                                }`}>
                                                    {feature.icon}
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
                                                    isPlacementSupport 
                                                        ? 'text-white group-hover:text-emerald-100' 
                                                        : 'text-emerald-900 group-hover:text-emerald-700'
                                                }`}>
                                                    {feature.title}
                                                </h3>
                                                <p className={`leading-relaxed ${
                                                    isPlacementSupport 
                                                        ? 'text-emerald-100' 
                                                        : 'text-gray-600'
                                                }`}>
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <TestimonialCarousel 
                testimonials={aboutData.testimonials.testimonials}
                title={aboutData.testimonials.heading}
            />

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
                            Ready to Start Your Global Education Journey?
                        </h2>
                        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                            Join thousands of students who have successfully achieved their study abroad dreams with Clover Overseas Education.
                        </p>
                        
                        <div className="pt-8">
                            <PopperButton
                                text={aboutData.ctaButton.text}
                                onClick={handleStartJourney}
                                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
