import { motion } from "framer-motion";
import { counsellingData } from "@/data/counselling-info";
import { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaGlobe, FaGraduationCap, FaCheckCircle, FaSpinner } from "react-icons/fa";

export default function Counselling() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        country: '',
        studyProgram: ''
    });
    
    const [formState, setFormState] = useState('idle'); // 'idle', 'submitting', 'success', 'error'
    const [error, setError] = useState('');

    const countries = [
        'United States',
        'United Kingdom (UK)',
        'Canada',
        'Australia',
        'New Zealand',
        'Ireland',
        'Singapore',
        'Europe (general)',
        'Netherlands',
        'Switzerland',
        'Sweden',
        'Malaysia',
        'Dubai (UAE)',
        'Poland',
        'Hungary',
        'Germany',
        'Finland',
        'Denmark',
        'Hong Kong',
        'Cyprus',
        'Czech Republic',
        'Lithuania',
        'Bulgaria',
        'France',
        'Italy',
        'Spain',
        'South Africa',
        'Austria',
        'China',
        'Mauritius'
    ];

    const studyPrograms = [
        'Undergraduate',
        'Postgraduate / Masters',
        'MBA',
        'PhD / Research',
        'Diploma / Certification'
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (error) setError('');
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // Validate form
        if (!formData.fullName || !formData.email || !formData.phone || !formData.country || !formData.studyProgram) {
            setError('All fields are required');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setError('Please enter a valid email address');
            return;
        }

        setFormState('submitting');
        setError('');

        try {
            const response = await fetch('/api/send-counselling-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (result.success) {
                setFormState('success');
                // Reset form
                setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    country: '',
                    studyProgram: ''
                });
            } else {
                setFormState('error');
                setError(result.message || 'Failed to submit form. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setFormState('error');
            setError('Network error. Please check your connection and try again.');
        }
    };

    const resetForm = () => {
        setFormState('idle');
        setError('');
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
                                Your Journey Starts Here – Get Expert Counselling Online
                            </h1>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Take the first step towards your study abroad dream with a our counselling session personalized just for you.
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
                                    src={counsellingData.heroImage}
                                    alt="Counselling Services"
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
                            Our counsellors help you
                        </h2>
                    </motion.div>

                    {/* Services Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {counsellingData.services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100 hover:border-emerald-200 group"
                            >
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
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Why Book Online Session Section */}
            <div className="relative bg-emerald-50 py-20">
                <div className="max-w-6xl mx-auto px-4 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div className="flex items-center justify-center mb-6">
                            <span className="text-4xl mr-3">💡</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-emerald-900">
                                Why Book an Online Session?
                            </h2>
                        </div>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Personalized Attention",
                                description: "Discuss your academic profile, career goals, and study abroad plans with a dedicated expert."
                            },
                            {
                                title: "Country & University Shortlisting",
                                description: "Get tailored recommendations based on your interests, budget, and eligibility."
                            },
                            {
                                title: "Scholarship & Loan Guidance",
                                description: "Learn about available funding options, including our Ron Destino education loan service."
                            },
                            {
                                title: "Step-by-Step Roadmap",
                                description: "Understand application timelines, test requirements, and next steps clearly."
                            },
                            {
                                title: "Convenient & Free",
                                description: "No travel required join from anywhere."
                            }
                        ].map((benefit, index) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100 hover:border-emerald-200 group"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-2xl group-hover:bg-emerald-200 transition-colors duration-300">
                                            <span className="text-emerald-600 font-bold">•</span>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-emerald-900 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Counselling Form Section */}
            <div className="relative bg-emerald-50 py-20">
                <div className="max-w-4xl mx-auto px-4 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-6">
                            Book Your Free Counselling Session
                        </h2>
                        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                            Fill out the form below and our expert counsellors will reach out to you within 24 hours to discuss your study abroad journey.
                        </p>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
                    >
                        {formState === 'success' ? (
                            <div className="text-center py-12">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6"
                                >
                                    <FaCheckCircle className="w-10 h-10 text-emerald-600" />
                                </motion.div>
                                <h3 className="text-2xl font-bold text-emerald-900 mb-4">
                                    Thank You!
                                </h3>
                                <p className="text-lg text-gray-700 mb-8">
                                    We will reach out to you within 24 hours to discuss your study abroad journey.
                                </p>
                                <button
                                    onClick={resetForm}
                                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-300"
                                >
                                    Submit Another Form
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Full Name */}
                                <div>
                                    <label htmlFor="fullName" className="block text-sm font-semibold text-emerald-900 mb-2">
                                        <FaUser className="inline w-4 h-4 mr-2" />
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-300"
                                        placeholder="Enter your full name"
                                        required
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-emerald-900 mb-2">
                                        <FaEnvelope className="inline w-4 h-4 mr-2" />
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-300"
                                        placeholder="Enter your email address"
                                        required
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-semibold text-emerald-900 mb-2">
                                        <FaPhone className="inline w-4 h-4 mr-2" />
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-300"
                                        placeholder="Enter your phone number"
                                        required
                                    />
                                </div>

                                {/* Country Dropdown */}
                                <div>
                                    <label htmlFor="country" className="block text-sm font-semibold text-emerald-900 mb-2">
                                        <FaGlobe className="inline w-4 h-4 mr-2" />
                                        Country of Interest *
                                    </label>
                                    <select
                                        id="country"
                                        name="country"
                                        value={formData.country}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-300"
                                        required
                                    >
                                        <option value="">Select a country</option>
                                        {countries.map((country) => (
                                            <option key={country} value={country}>
                                                {country}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Study Program Dropdown */}
                                <div>
                                    <label htmlFor="studyProgram" className="block text-sm font-semibold text-emerald-900 mb-2">
                                        <FaGraduationCap className="inline w-4 h-4 mr-2" />
                                        Preferred Study Program *
                                    </label>
                                    <select
                                        id="studyProgram"
                                        name="studyProgram"
                                        value={formData.studyProgram}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-300"
                                        required
                                    >
                                        <option value="">Select a study program</option>
                                        {studyPrograms.map((program) => (
                                            <option key={program} value={program}>
                                                {program}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Error Message */}
                                {error && (
                                    <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                                        <p className="text-red-700 text-sm">{error}</p>
                                    </div>
                                )}

                                {/* Submit Button */}
                                <div className="pt-4">
                                    <motion.button
                                        type="submit"
                                        disabled={formState === 'submitting'}
                                        whileHover={formState !== 'submitting' ? { scale: 1.02 } : {}}
                                        whileTap={formState !== 'submitting' ? { scale: 0.98 } : {}}
                                        className={`w-full py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 ${
                                            formState === 'submitting'
                                                ? 'bg-gray-400 cursor-not-allowed'
                                                : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl'
                                        }`}
                                    >
                                        {formState === 'submitting' ? (
                                            <div className="flex items-center justify-center space-x-2">
                                                <FaSpinner className="w-5 h-5 animate-spin" />
                                                <span>Submitting...</span>
                                            </div>
                                        ) : (
                                            'Submit Form'
                                        )}
                                    </motion.button>
                                </div>
                            </form>
                        )}
                    </motion.div>
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
                            "{counsellingData.objective}"
                        </blockquote>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
