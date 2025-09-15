import { motion } from "framer-motion";
import { visaData } from "@/data/visa-info";

export default function Visa() {

    return (
        <div className="bg-emerald-200/50 min-h-screen">
            {/* Section 1: Title at top */}
            <div className="relative pt-32 pb-8">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <h1 className="text-3xl md:text-5xl font-bold text-emerald-900 leading-tight">
                            {visaData.title}
                        </h1>
                    </motion.div>
                </div>
            </div>

            {/* Section 2: Hero Section - Image and Text side by side */}
            <div className="relative pb-16">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src={visaData.heroImage}
                                    alt="Visa Services"
                                    className="w-full h-80 md:h-96 object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent"></div>
                            </div>
                        </motion.div>

                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="space-y-6"
                        >
                            <h2 className="text-2xl md:text-3xl font-semibold text-emerald-800 leading-tight">
                                Expert Visa Assistance
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                {visaData.description}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Visa Assistance Section */}
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
                            Visa Assistance
                        </h2>
                        <div className="max-w-4xl mx-auto space-y-4">
                            <p className="text-lg text-gray-700">
                                Our comprehensive visa support covers every aspect of your application process, from initial documentation to final approval.
                            </p>
                            <p className="text-lg text-gray-700">
                                With our 96% success rate, we ensure your visa journey is smooth and stress-free.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Services Section */}
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
                            Our Visa Support Includes
                        </h2>
                    </motion.div>

                    {/* Alternating Image-Content Layout - Following wireframe design */}
                    <div className="max-w-6xl mx-auto">
                        <div className="space-y-16">
                            {visaData.services.map((service, index) => (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className={`flex flex-col md:flex-row gap-8 items-center ${
                                        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                                >
                                    {/* Image */}
                                    <div className="flex-shrink-0">
                                        <div className="relative rounded-xl overflow-hidden shadow-lg w-80 h-60">
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent"></div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 space-y-4">
                                        <h3 className="text-2xl font-semibold text-emerald-900">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed text-lg">
                                            {service.description}
                                        </p>
                                    </div>

                                    {/* Connecting Arrow (except for last item) */}
                                    {index < visaData.services.length - 1 && (
                                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 mt-32">
                                            <div className="w-8 h-8 border-r-2 border-b-2 border-emerald-400 transform rotate-45"></div>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Success Rate Section */}
            <div className="relative bg-white py-20">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <div className="bg-emerald-50 rounded-3xl p-12">
                            <div className="text-6xl md:text-8xl font-bold text-emerald-600 mb-4">
                                96%
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-4">
                                Visa Success Rate
                            </h3>
                            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                                Our expert team's proven track record ensures your visa application has the highest chance of approval.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Country-Specific Section */}
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
                            Country-Specific Visa Expertise
                        </h2>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                            We provide specialized guidance for different countries' visa requirements and processes.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { country: "USA", visa: "F-1 Student Visa", flag: "🇺🇸" },
                            { country: "Canada", visa: "Study Permit", flag: "🇨🇦" },
                            { country: "UK", visa: "Tier 4 Student Visa", flag: "🇬🇧" },
                            { country: "Australia", visa: "Student Visa", flag: "🇦🇺" },
                            { country: "Germany", visa: "Student Visa", flag: "🇩🇪" },
                            { country: "France", visa: "Student Visa", flag: "🇫🇷" },
                            { country: "Netherlands", visa: "Student Visa", flag: "🇳🇱" },
                            { country: "Ireland", visa: "Student Visa", flag: "🇮🇪" }
                        ].map((country, index) => (
                            <motion.div
                                key={country.country}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100 hover:border-emerald-200 text-center"
                            >
                                <div className="text-4xl mb-4">{country.flag}</div>
                                <h3 className="text-xl font-semibold text-emerald-900 mb-2">
                                    {country.country}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    {country.visa}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Objective Section */}
            <div className="relative bg-white py-20">
                <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <blockquote className="text-xl md:text-2xl text-emerald-900 font-medium leading-relaxed italic">
                            "{visaData.objective}"
                        </blockquote>
                        
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
