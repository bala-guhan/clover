import { motion } from "framer-motion";
import { scholarshipData } from "@/data/scholarship-info";

export default function Scholarship() {

    return (
        <div className="bg-emerald-200/50 min-h-screen">
            {/* Hero Section */}
            <div className="relative pt-32 pb-16">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            <div className="space-y-4">
                                <h1 className="text-3xl md:text-5xl font-bold text-emerald-900 leading-tight">
                                    {scholarshipData.title}
                                </h1>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    {scholarshipData.description}
                                </p>
                            </div>
                        </motion.div>

                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src={scholarshipData.heroImage}
                                    alt="Scholarship Services"
                                    className="w-full h-80 md:h-96 object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Success Statistics Section */}
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
                                $1.7M+
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-4">
                                Scholarships Secured
                            </h3>
                            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                                We have successfully helped students secure over $1,700,000 in scholarships worldwide, giving them access to world-class universities with reduced financial burden.
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
                            Clover Scholarship & Financial Support
                        </h2>
                    </motion.div>

                    {/* Services Grid - Following wireframe design with numbered items */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {scholarshipData.services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100 hover:border-emerald-200 group relative"
                            >
                                {/* Number Badge */}
                                <div className="absolute -top-4 -left-4 w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                                    {service.number}
                                </div>

                                <div className="pt-4">
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-2xl group-hover:bg-emerald-200 transition-colors duration-300">
                                                {service.icon}
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold text-emerald-900 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                                                {service.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scholarship Types Section */}
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
                            Types of Scholarships We Help With
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
                                🎓
                            </div>
                            <h3 className="text-xl font-semibold text-emerald-900 mb-4">
                                Merit-Based Scholarships
                            </h3>
                            <p className="text-gray-700">
                                Based on academic excellence, test scores, and achievements. We help you showcase your strengths effectively.
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
                                💰
                            </div>
                            <h3 className="text-xl font-semibold text-emerald-900 mb-4">
                                Need-Based Scholarships
                            </h3>
                            <p className="text-gray-700">
                                For students with financial constraints. We help you demonstrate need while highlighting your potential.
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
                                🌍
                            </div>
                            <h3 className="text-xl font-semibold text-emerald-900 mb-4">
                                Country-Specific Programs
                            </h3>
                            <p className="text-gray-700">
                                Government scholarships like Chevening, Fulbright, DAAD, and Erasmus+ for specific countries and regions.
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
                            "{scholarshipData.objective}"
                        </blockquote>
                        
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
