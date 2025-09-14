import { motion } from "framer-motion"
import { TriPhotoHolder } from "@/components/countries-page/tri-photo-holder"
import { WhyChooseCards } from "@/components/countries-page/why-choose-cards"
import { WhyStudySection } from "@/components/countries-page/why-study-section"
import { CostOfStudying } from "@/components/countries-page/cost-of-studying"
import { FAQSection } from "@/components/countries-page/faq-section"
import { countriesData } from "@/data/countries-info"
import { useParams } from "react-router-dom"

interface CountriesProps {
  countryId?: string;
}

export default function Countries({ countryId }: CountriesProps) {
    // Get country ID from URL params or props
    const params = useParams();
    const currentCountryId = countryId || params.countryId || "us";
    
    const countryData = countriesData.find(country => country.id === currentCountryId);

    // If country not found, show 404 or default to US
    if (!countryData) {
        return (
            <div className="bg-emerald-50 min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-emerald-900 mb-4">Country Not Found</h1>
                    <p className="text-gray-600">The requested country information is not available.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-emerald-200/50">
            <div className="flex flex-col items-center justify-center pt-32">
                <p>Study in {countryData.name}</p>
                <h2 className="text-4xl font-semibold text-black">{countryData.name}</h2>
                <TriPhotoHolder />
            </div>
            
            <div className="flex flex-col text-center items-center mx-auto pb-16">
                <p className="text-center text-xl text-gray-700 max-w-2xl">
                    {countryData.description || `The ${countryData.name} has been a global leader in the field of education and boasts of top-ranked universities according to all major international rankings. Few countries offer as many high-ranked universities and excellent academia as ${countryData.name} does.`}
                </p>
            </div>

            {/* Why Choose This Country Section */}
            {countryData && (
                <div className="relative bg-white py-20 overflow-hidden">
                    {/* Animated Background Elements */}
                    <motion.div
                        className="absolute inset-0 pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                    >
                        <motion.div
                            className="absolute -left-8 top-60 transform -translate-y-1/2"
                            initial={{ 
                                x: -100, 
                                opacity: 0,
                                scale: 0.8,
                                rotate: 5
                            }}
                            animate={{ 
                                x: 0, 
                                opacity: 0.5,
                                scale: 1,
                                rotate: 0
                            }}
                            transition={{ 
                                duration: 3,
                                ease: [0.25, 0.46, 0.45, 0.94],
                                delay: 0.5
                            }}
                        >
                            <div 
                                className="w-96 h-auto text-6xl opacity-30"
                                style={{ filter: 'sepia(1) hue-rotate(120deg) saturate(0.3)' }}
                            >
                                {countryData.flag}
                            </div>
                        </motion.div>
                        
                        {/* Floating particles effect */}
                        <motion.div
                            className="absolute top-20 left-20 w-2 h-2 bg-emerald-300 rounded-full opacity-60"
                            animate={{
                                y: [-20, 20, -20],
                                x: [-10, 10, -10],
                                opacity: [0.6, 0.2, 0.6],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        <motion.div
                            className="absolute top-40 right-40 w-1 h-1 bg-blue-300 rounded-full opacity-40"
                            animate={{
                                y: [15, -15, 15],
                                x: [8, -8, 8],
                                opacity: [0.4, 0.1, 0.4],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1
                            }}
                        />
                        <motion.div
                            className="absolute bottom-32 left-32 w-1.5 h-1.5 bg-emerald-200 rounded-full opacity-50"
                            animate={{
                                y: [-12, 12, -12],
                                x: [-6, 6, -6],
                                opacity: [0.5, 0.2, 0.5],
                            }}
                            transition={{
                                duration: 3.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 2
                            }}
                        />
                    </motion.div>

                    <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
                        <div className="grid md:grid-cols-2 gap-12 items-start">
                            {/* Left Section - Text Content */}
                            <motion.div 
                                className="space-y-6"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                <h3 className="text-3xl md:text-4xl font-bold text-emerald-900">
                                    Why Choose This Country
                                </h3>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    {countryData.whyChooseDescription || `The ${countryData.name} offers unparalleled opportunities for international students seeking world-class education and career advancement. With its diverse academic landscape and strong industry connections, the ${countryData.name} provides an ideal environment for personal and professional growth.`}
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    From cutting-edge research facilities to flexible academic programs, students benefit from a comprehensive educational experience that prepares them for global success.
                                </p>
                            </motion.div>

                            {/* Right Section - Animated Cards */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                            >
                                <WhyChooseCards countryData={countryData} />
                            </motion.div>
                        </div>
                    </div>
                </div>
            )}

            {/* Why Study Section */}
            {countryData?.whyStudy && (
                <WhyStudySection data={countryData.whyStudy} />
            )}

            {/* Cost of Studying Section */}
            {countryData && (
                <CostOfStudying countryData={countryData} />
            )}

            {/* FAQ Section */}
            {countryData && (
                <FAQSection countryData={countryData} />
            )}
        </div>
    )
}
