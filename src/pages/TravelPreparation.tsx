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
                                    {travelPreparationData.title}
                                </h1>
                                <h2 className="text-2xl md:text-3xl font-semibold text-emerald-800 leading-tight">
                                    {travelPreparationData.heading}
                                </h2>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    {travelPreparationData.subheading}
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
                                    src={travelPreparationData.heroImage}
                                    alt="Travel Preparation Services"
                                    className="w-full h-80 md:h-96 object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
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
                            Your Study Abroad Journey
                        </h2>
                        <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                            {travelPreparationData.description}
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Image Gallery Section */}
            <div className="relative bg-emerald-50 py-20">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-6">
                            Travel Essentials
                        </h2>
                    </motion.div>

                    {/* Image Gallery */}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
                        {[
                            "/usa-uni-1.jpeg",
                            "/usa-uni-2.jpeg", 
                            "/usa-uni-3.jpeg",
                            "/uni-stud-2hero.jpeg",
                            "/uni-stud-3hero.jpeg"
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
                                    alt={`Travel preparation ${index + 1}`}
                                    className="w-full h-32 md:h-40 object-cover hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent"></div>
                            </motion.div>
                        ))}
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
                            Travel Support
                        </h2>
                    </motion.div>

                    {/* Services Grid - Following wireframe design with interconnected flow */}
                    <div className="space-y-12">
                        {travelPreparationData.services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`flex flex-col md:flex ${
                                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                } gap-8 items-center`}
                            >
                                {/* Image */}
                                <div className="flex-shrink-0">
                                    <div className="relative rounded-xl overflow-hidden shadow-lg w-64 h-48">
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
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-2xl text-white">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-2xl font-semibold text-emerald-900">
                                            {service.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
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
