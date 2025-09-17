import { motion } from "framer-motion";
import { documentationData } from "@/data/documentation-info";

export default function Documentation() {

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
                                    {documentationData.title}
                                </h1>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    {documentationData.description}
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
                                    src={documentationData.heroImage}
                                    alt="Documentation Services"
                                    className="w-full h-80 md:h-96 object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Services Section */}
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
                            Our Services Include
                        </h2>
                    </motion.div>

                    {/* Services Grid - Following wireframe design with numbered items */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {documentationData.services.map((service, index) => (
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

            {/* Additional Content Section */}
            <div className="relative bg-emerald-50 py-20">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-6">
                                Why Professional Documentation Matters
                            </h2>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-gray-700">
                                        <strong>First Impression:</strong> Your documents are the first thing admissions committees see, making them crucial for creating a positive initial impact.
                                    </p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-gray-700">
                                        <strong>Competitive Edge:</strong> Well-crafted documents help you stand out among thousands of applicants with similar academic backgrounds.
                                    </p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-gray-700">
                                        <strong>Error-Free Submission:</strong> Professional proofreading ensures your application isn't rejected due to avoidable mistakes.
                                    </p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-gray-700">
                                        <strong>University-Specific Requirements:</strong> Each institution has unique preferences that we help you meet precisely.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="/uni-stud-2hero.jpeg"
                                    alt="Professional Documentation"
                                    className="w-full h-80 object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent"></div>
                            </div>
                        </motion.div>
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
                            "{documentationData.objective}"
                        </blockquote>
                        
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
