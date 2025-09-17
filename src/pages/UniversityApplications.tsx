import { motion } from "framer-motion";
import { universityApplicationsData } from "@/data/university-applications-info";

export default function UniversityApplications() {

    return (
        <div className="bg-emerald-200/50 min-h-screen">
            {/* Hero Section - Updated to match wireframe */}
            <div className="relative pt-32 pb-16">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    {/* Section 1: Title at top */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-3xl md:text-5xl font-bold text-emerald-900 leading-tight">
                            {universityApplicationsData.title}
                        </h1>
                    </motion.div>

                    {/* Section 2: Heading and Subheading */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-2xl md:text-3xl font-semibold text-emerald-800 leading-tight mb-6">
                            {universityApplicationsData.heading}
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                            {universityApplicationsData.subheading}
                        </p>
                    </motion.div>

                    {/* Section 3: Centered Picture */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex justify-center"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-2xl">
                            <img
                                src={universityApplicationsData.heroImage}
                                alt="University Applications and Admission"
                                className="w-full h-80 md:h-96 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent"></div>
                        </div>
                    </motion.div>
                </div>
            </div>


            {/* End-to-End Support Section - Updated to match wireframe */}
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
                            End-to-End Support
                        </h2>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                            Application Form Filing. We Ensure every detail is handled with precision and care.
                        </p>
                    </motion.div>

                    {/* Numbered List Format - Following wireframe design */}
                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-6">
                            {universityApplicationsData.services.map((service, index) => (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-start space-x-6 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100 hover:border-emerald-200"
                                >
                                    {/* Number Circle */}
                                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                                        {service.number}
                                    </div>
                                    
                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-emerald-900 mb-2">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Additional Benefits Section */}
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
                            Why Choose Our Application Support?
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-center p-8 bg-emerald-50 rounded-2xl"
                        >
                            <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-3xl text-white mx-auto mb-6">
                                🎯
                            </div>
                            <h3 className="text-xl font-semibold text-emerald-900 mb-4">
                                Strategic Approach
                            </h3>
                            <p className="text-gray-700">
                                We strategically submit applications to maximize your chances of receiving multiple admission offers.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-center p-8 bg-emerald-50 rounded-2xl"
                        >
                            <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-3xl text-white mx-auto mb-6">
                                ⚡
                            </div>
                            <h3 className="text-xl font-semibold text-emerald-900 mb-4">
                                Time Management
                            </h3>
                            <p className="text-gray-700">
                                Our deadline tracking ensures all applications are submitted well before closing dates.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="text-center p-8 bg-emerald-50 rounded-2xl"
                        >
                            <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-3xl text-white mx-auto mb-6">
                                🤝
                            </div>
                            <h3 className="text-xl font-semibold text-emerald-900 mb-4">
                                Direct Communication
                            </h3>
                            <p className="text-gray-700">
                                We coordinate directly with university admissions teams to resolve any issues quickly.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Objective Section */}
            <div className="relative bg-emerald-50 py-20">
                <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <blockquote className="text-xl md:text-2xl text-emerald-900 font-medium leading-relaxed italic">
                            "{universityApplicationsData.objective}"
                        </blockquote>
                        
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
