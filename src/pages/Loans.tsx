import { motion } from "framer-motion";
import { loansData } from "@/data/loans-info";
import { NumberTicker } from "@/components/magicui/number-ticker";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import PopperButton from '../components/popper-button';

export default function Loans() {
    const handleApplyLoan = () => {
        console.log('Apply for Education Loan clicked!');
        // Redirect to counselling page and scroll to form section
        window.location.href = '/counselling#counselling-form';
    };

    return (
        <div className="bg-emerald-200/50 min-h-screen">
            {/* Hero Section */}
            <div className="relative pt-32 pb-16">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-12">
                        {/* Tab */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-block bg-emerald-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6"
                        >
                            {loansData.tab}
                        </motion.div>

                        {/* Logo */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mb-8"
                        >
                            <img 
                                src={loansData.logo} 
                                alt="Clover Logo" 
                                className="h-16 w-16 mx-auto mb-4"
                            />
                            <h1 className="text-4xl md:text-6xl font-bold text-emerald-900 mb-4">
                                {loansData.loanName}
                            </h1>
                        </motion.div>

                        {/* Heading */}
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-2xl md:text-4xl font-bold text-emerald-800 mb-6"
                        >
                            {loansData.heading}
                        </motion.h2>

                        {/* Subheading */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto"
                        >
                            {loansData.subheading}
                        </motion.p>

                        {/* Ticker Value */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="bg-emerald-600 text-white px-8 py-4 rounded-2xl inline-block"
                        >
                            <span className="text-2xl md:text-3xl font-bold">💰</span>
                            <span className="text-lg md:text-xl font-semibold ml-3">
                                {loansData.tickerValue}
                            </span>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div className="relative bg-white py-20">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-8">
                            Ron Destino: An Exclusive Overseas Education Loan Division
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                            {loansData.description}
                        </p>
                    </motion.div>

                    {/* Ron Destino Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex justify-center mb-16"
                    >
                        <div className="relative">
                            <img 
                                src="/ron-bosto-loan.jpg" 
                                alt="Ron Destino Education Loans" 
                                className="rounded-2xl shadow-2xl max-w-4xl w-full h-auto"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent rounded-2xl"></div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Features Section */}
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
                            Financing your global study dreams
                        </h2>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                            With our leading partnered nationalized banks, private banks, NBFCs and international lenders and a team of loan experts, we are empowering the global study dreams of thousands of students like you.
                        </p>
                    </motion.div>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {loansData.features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100 hover:border-emerald-200 group"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-2xl group-hover:bg-emerald-200 transition-colors duration-300">
                                            {feature.icon}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-emerald-900 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Process Section */}
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
                            Ron Destino: Education Loan Process
                        </h2>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                            Easy, Quick & Hassle-free process to get your customized education loan.
                        </p>
                    </motion.div>

                    {/* Process Steps */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {loansData.processSteps.map((step, index) => (
                            <motion.div
                                key={step.step}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="relative">
                                    {/* Step Number */}
                                    <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                                        {step.step}
                                    </div>
                                    
                                    {/* Connecting Line */}
                                    {index < loansData.processSteps.length - 1 && (
                                        <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-emerald-300 transform translate-x-8"></div>
                                    )}
                                </div>
                                
                                <h3 className="text-xl font-semibold text-emerald-900 mb-4">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Ancillary Services Section */}
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
                            Ancillary Services
                        </h2>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                            Our loan experts also offer assistance on the ancillary services of
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {loansData.ancillaryServices.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100 hover:border-emerald-200 text-center group"
                            >
                                <div className="text-3xl mb-4">{service.icon}</div>
                                <h3 className="text-sm font-semibold text-emerald-900 group-hover:text-emerald-700 transition-colors duration-300">
                                    {service.title}
                                </h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Ticker Section */}
            <div className="relative bg-white py-20">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        {loansData.tickerData.map((ticker, index) => (
                            <motion.div
                                key={ticker.label}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center bg-emerald-50 rounded-3xl p-12"
                            >
                                <div className="text-6xl md:text-8xl font-bold text-emerald-600 mb-4">
                                    <NumberTicker value={parseFloat(ticker.value)} />
                                    {ticker.suffix}
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-emerald-900">
                                    {ticker.label}
                                </h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <TestimonialCarousel 
                testimonials={loansData.testimonials}
                title="What Our Students Say"
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
                            Ready to Finance Your Global Education?
                        </h2>
                        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                            Get started with your education loan application today and take the first step towards your international education dreams.
                        </p>
                        
                        <div className="pt-8">
                            <PopperButton
                                text={loansData.ctaButton.text}
                                onClick={handleApplyLoan}
                                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
