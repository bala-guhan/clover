import { motion } from "framer-motion";
import { postLandingData } from "@/data/post-landing-info";

export default function PostLanding() {

    return (
        <div className="bg-emerald-200/50 min-h-screen">
            {/* Section 1: Hero Section - Heading and Picture side by side */}
            <div className="relative pt-32 pb-16">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        {/* Heading */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            <h1 className="text-3xl md:text-5xl font-bold text-emerald-900 leading-tight">
                                {postLandingData.title}
                            </h1>
                            <h2 className="text-2xl md:text-3xl font-semibold text-emerald-800 leading-tight">
                                {postLandingData.heading}
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                {postLandingData.description}
                            </p>
                        </motion.div>

                        {/* Picture */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src={postLandingData.heroImage}
                                    alt="Post-Landing Support Services"
                                    className="w-full h-80 md:h-96 object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Image Gallery Section */}
            <div className="relative bg-white py-20">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-6">
                            Your New Home Awaits
                        </h2>
                    </motion.div>

                    {/* Image Gallery - Following wireframe design with 4 images */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            "/smiling-young-male-university-student-standing-isolate-on-transparency-background-png.webp",
                            "/university-student-holding-notebooks-wearing-bag-smiling-transparent-background-png.webp", 
                            "/student-celebrates-academic-achievement-with-books-cut-out-transparent-png.webp",
                            "/college-students.webp"
                        ].map((image, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <img
                                    src={image}
                                    alt={`Post-arrival support ${index + 1}`}
                                    className="w-full h-48 md:h-56 object-cover hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent"></div>
                            </motion.div>
                        ))}
                    </div>
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
                            Our Post-Arrival Support Includes
                        </h2>
                    </motion.div>

                    {/* Numbered List Format - Following wireframe design with vertical line */}
                    <div className="max-w-4xl mx-auto">
                        <div className="relative">
                            {/* Vertical Line */}
                            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-emerald-300"></div>
                            
                            <div className="space-y-8">
                                {postLandingData.services.map((service, index) => (
                                    <motion.div
                                        key={service.title}
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-start space-x-6 relative"
                                    >
                                        {/* Number Circle */}
                                        <div className="flex-shrink-0 w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg relative z-10">
                                            {service.number}
                                        </div>
                                        
                                        {/* Content */}
                                        <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100 hover:border-emerald-200">
                                            <h3 className="text-xl font-semibold text-emerald-900 mb-3">
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
            </div>

            {/* Additional Support Section */}
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
                            Why Post-Arrival Support Matters
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
                                🏠
                            </div>
                            <h3 className="text-xl font-semibold text-emerald-900 mb-4">
                                Smooth Transition
                            </h3>
                            <p className="text-gray-700">
                                We help you settle into your new environment quickly and comfortably, reducing stress and anxiety.
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
                                🤝
                            </div>
                            <h3 className="text-xl font-semibold text-emerald-900 mb-4">
                                Community Building
                            </h3>
                            <p className="text-gray-700">
                                Connect with local student communities and alumni networks to build your support system from day one.
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
                                📞
                            </div>
                            <h3 className="text-xl font-semibold text-emerald-900 mb-4">
                                Ongoing Support
                            </h3>
                            <p className="text-gray-700">
                                We remain available for your questions and concerns even after you've settled, ensuring continuous assistance.
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
                            "{postLandingData.objective}"
                        </blockquote>
                        
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
