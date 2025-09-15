import { motion } from "framer-motion";
import { travelPreparationData } from "@/data/travel-preparation-info";
import PopperButton from '../components/popper-button';

export default function TravelPreparation() {
    const handleStartPreparation = () => {
        console.log('Start Travel Preparation clicked!');
        // Add navigation logic here
    };

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
                            {travelPreparationData.title}
                        </h1>
                    </motion.div>
                </div>
            </div>

            {/* Section 2: Heading and Subheading */}
            <div className="relative pb-16">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-center"
                    >
                        <h2 className="text-2xl md:text-3xl font-semibold text-emerald-800 leading-tight mb-6">
                            {travelPreparationData.heading}
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                            {travelPreparationData.subheading}
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Section 3: Image Gallery - 4 images in a row */}
            <div className="relative bg-emerald-50 py-20">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    {/* Image Gallery - Following wireframe design */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                        {[
                            "/a-happy-smiling-young-college-student-with-a-book-in-hand-isolated-on-a-transparent-background-generative-ai-free-png.webp",
                            "/a-smiling-young-man-holding-books-free-png.webp", 
                            "/ai-generated-female-university-student-smiling-happily-on-transparent-background-png.webp",
                            "/smiling-student-girl-holding-book-and-backpack-isolated-on-transparent-background-png.webp"
                        ].map((image, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
                                    index === 0 ? 'h-48' : 'h-40'
                                }`}
                            >
                                <img
                                    src={image}
                                    alt={`Travel preparation ${index + 1}`}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent"></div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Content below images */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h3 className="text-xl md:text-2xl font-semibold text-emerald-900 mb-4">
                            Your study abroad journey
                        </h3>
                        <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                            {travelPreparationData.description}
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Section 4: Travel Support - Flow Diagram Layout */}
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
                            Travel Support
                        </h2>
                    </motion.div>

                    {/* Flow Diagram Layout - Following wireframe design */}
                    <div className="max-w-6xl mx-auto">
                        <div className="space-y-16">
                            {travelPreparationData.services.map((service, index) => (
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
                                    {index < travelPreparationData.services.length - 1 && (
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

            {/* Additional Support Section */}
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
                            Why Choose Our Travel Support?
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-center p-8 bg-white rounded-2xl shadow-lg"
                        >
                            <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-3xl text-white mx-auto mb-6">
                                🎯
                            </div>
                            <h3 className="text-xl font-semibold text-emerald-900 mb-4">
                                Comprehensive Planning
                            </h3>
                            <p className="text-gray-700">
                                We cover every aspect of your travel preparation, from flights to insurance, ensuring nothing is overlooked.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-center p-8 bg-white rounded-2xl shadow-lg"
                        >
                            <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-3xl text-white mx-auto mb-6">
                                💰
                            </div>
                            <h3 className="text-xl font-semibold text-emerald-900 mb-4">
                                Cost-Effective Solutions
                            </h3>
                            <p className="text-gray-700">
                                We help you find the best deals on flights, forex, and insurance while meeting all requirements.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="text-center p-8 bg-white rounded-2xl shadow-lg"
                        >
                            <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-3xl text-white mx-auto mb-6">
                                🤝
                            </div>
                            <h3 className="text-xl font-semibold text-emerald-900 mb-4">
                                Community Building
                            </h3>
                            <p className="text-gray-700">
                                Connect with fellow students traveling to the same destination, building your support network before arrival.
                            </p>
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
                            "{travelPreparationData.objective}"
                        </blockquote>
                        
                        <div className="pt-8">
                            <PopperButton
                                text={travelPreparationData.ctaButton.text}
                                onClick={handleStartPreparation}
                                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
