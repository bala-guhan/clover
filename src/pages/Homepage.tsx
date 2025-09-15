import { motion, AnimatePresence } from "framer-motion";
import { NumberTicker } from "../components/magicui/number-ticker";
import { FaGraduationCap, FaGlobe, FaBook, FaBriefcase, FaFileAlt, FaClipboardList, FaPassport, FaPlane, FaHome, FaAward, FaDollarSign, FaQuestionCircle, FaArrowRight, FaChevronDown, FaChevronUp, FaQuoteLeft } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { serviceImages } from "../data/image-mappings";

// Auto-scrolling Testimonial Component
const AutoScrollTestimonials = ({ testimonials }: { testimonials: { quote: string; author: string; program: string; location: string; }[] }) => {
    const [isHovered, setIsHovered] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const scroll = () => {
            if (!isHovered) {
                container.scrollLeft += 1;
                if (container.scrollLeft >= container.scrollWidth / 2) {
                    container.scrollLeft = 0;
                }
            }
        };

        const interval = setInterval(scroll, 20); // Smooth 20ms interval
        return () => clearInterval(interval);
    }, [isHovered]);

    // Duplicate testimonials for seamless loop
    const duplicatedTestimonials = [...testimonials, ...testimonials];

    return (
        <div 
            ref={containerRef}
            className="flex overflow-x-hidden gap-6 py-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
            {duplicatedTestimonials.map((testimonial, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 shadow-lg border border-emerald-100 hover:shadow-xl transition-shadow duration-300"
                >
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <FaQuoteLeft className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div className="flex-1">
                            <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                                "{testimonial.quote}"
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                                    {testimonial.author.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-semibold text-emerald-900 text-sm">
                                        {testimonial.author}
                                    </div>
                                    <div className="text-xs text-gray-500">
                                        {testimonial.program} • {testimonial.location}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default function HomePage() {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const handleBookCounselling = () => {
        window.location.href = '/counselling';
    };

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const services = [
        {
            name: "Counselling",
            icon: FaGraduationCap,
            description: "Personalized guidance for your study abroad journey",
            link: "/counselling",
            image: serviceImages['Counselling'] || "/uni-stud-hero.jpeg"
        },
        {
            name: "University Selection",
            icon: FaGlobe,
            description: "AI-powered matching with top global universities",
            link: "/university-selection",
            image: serviceImages['University Selection'] || "/uni-stud-2hero.jpeg"
        },
        {
            name: "Test Preparation",
            icon: FaBook,
            description: "Comprehensive coaching for all standardized tests",
            link: "/test-preparation",
            image: serviceImages['Test Preparation'] || "/uni-stud-3hero.jpeg"
        },
        {
            name: "Internships",
            icon: FaBriefcase,
            description: "Profile-enhancing internship opportunities",
            link: "/internship",
            image: serviceImages['Internships'] || "/uni-stud-hero.jpeg"
        },
        {
            name: "Documentation",
            icon: FaFileAlt,
            description: "Professional SOPs, LORs, and resume building",
            link: "/documentation",
            image: serviceImages['Documentation'] || "/uni-stud-2hero.jpeg"
        },
        {
            name: "University Application & Admission",
            icon: FaClipboardList,
            description: "End-to-end application support and guidance",
            link: "/university-applications-and-admission",
            image: serviceImages['University Application & Admission'] || "/uni-stud-3hero.jpeg"
        },
        {
            name: "Visa",
            icon: FaPassport,
            description: "Expert visa assistance with 96% success rate",
            link: "/visa",
            image: serviceImages['Visa'] || "/uni-stud-hero.jpeg"
        },
        {
            name: "Travel Preparation",
            icon: FaPlane,
            description: "Complete travel and forex assistance",
            link: "/travel-preparation",
            image: serviceImages['Travel Preparation'] || "/uni-stud-2hero.jpeg"
        },
        {
            name: "Post Landing",
            icon: FaHome,
            description: "Settlement support after arrival",
            link: "/post-landing",
            image: serviceImages['Post Landing'] || "/uni-stud-3hero.jpeg"
        },
        {
            name: "Scholarship",
            icon: FaAward,
            description: "Scholarship and financial aid assistance",
            link: "/scholarships",
            image: serviceImages['Scholarship'] || "/uni-stud-hero.jpeg"
        }
    ];

    const highlights = [
        { 
            value: 1200, 
            label: "Students Placed", 
            suffix: "+",
            heading: "Successful Placements",
            subtext: "Students successfully placed in top universities worldwide"
        },
        { 
            value: 31, 
            label: "Countries", 
            suffix: "",
            heading: "Global Reach",
            subtext: "Countries where we have successfully placed students"
        },
        { 
            value: 85, 
            label: "Courses", 
            suffix: "K",
            heading: "Course Options",
            subtext: "Wide range of courses available across all disciplines"
        },
        { 
            value: 800, 
            label: "Universities", 
            suffix: "+",
            heading: "Partner Universities",
            subtext: "Top-ranked universities in our global network"
        },
        { 
            value: 96, 
            label: "Visa Success", 
            suffix: "%",
            heading: "Visa Success Rate",
            subtext: "Proven track record of visa approvals"
        },
        { 
            value: 20, 
            label: "Banks & NBFCs", 
            suffix: "+",
            heading: "Financial Partners",
            subtext: "Trusted banking partners for education loans"
        }
    ];

    const testimonials = [
        {
            quote: "Clover Overseas Education made my dream come true! From shortlisting the right universities to guiding me through SOPs and visa interviews, their team was there at every step. Today, I am studying at my dream university in Canada.",
            author: "Ananya R.",
            program: "Master's in Data Science",
            location: "Canada"
        },
        {
            quote: "The counselling was so personalized and stress-free. They helped me choose the perfect course in the UK, arranged mock visa interviews, and even guided me on accommodation. I felt fully supported throughout the process.",
            author: "Rahul S.",
            program: "MBA",
            location: "United Kingdom"
        },
        {
            quote: "Thanks to Clover, I got a scholarship! The team not only helped with my admission to an Australian university but also assisted me in applying for scholarships and securing a student loan at a low interest rate.",
            author: "Sneha M.",
            program: "Master's in Engineering",
            location: "Australia"
        },
        {
            quote: "Best consultancy for students aiming abroad. Their AI-driven university selection and internship opportunities made my profile stronger. The entire process was smooth and professional.",
            author: "Karan P.",
            program: "Bachelor's in Computer Science",
            location: "USA"
        }
    ];

    const faqs = [
        {
            question: "How long does the application process take?",
            answer: "The complete application process typically takes 6-12 months, depending on the country and university. We provide a detailed timeline during your initial counselling session."
        },
        {
            question: "Do you help with visa applications?",
            answer: "Yes, we provide comprehensive visa assistance with a 96% success rate. Our experts guide you through the entire process, from document preparation to interview coaching."
        },
        {
            question: "What countries do you cover?",
            answer: "We cover 31+ countries including USA, UK, Canada, Australia, Germany, Ireland, Netherlands, and many more. Our global network ensures you have access to the best options worldwide."
        },
        {
            question: "Do you provide financial aid assistance?",
            answer: "Absolutely! We help students secure scholarships, grants, and education loans. We've successfully facilitated over $1.7M in scholarships and loans for our students."
        },
        {
            question: "Is counselling free?",
            answer: "Yes, we offer free initial counselling sessions to help you understand your options and create a personalized study abroad plan."
        },
        {
            question: "What makes Clover different from other consultancies?",
            answer: "We provide end-to-end support, from profile enhancement through internships to post-landing assistance. Our AI-driven university selection and 96% visa success rate set us apart."
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section - Reverted to Original */}
        <div 
            className="flex flex-col justify-center min-h-screen w-full px-4 md:px-24 bg-cover bg-center bg-no-repeat relative"
            style={{
                backgroundImage: "url('/uni-stud-2hero.jpeg')"
            }}
        >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            
            {/* Content */}
            <div className="relative z-10 max-w-4xl text-center md:text-left">
                <h1 className="text-2xl md:text-5xl text-white font-semibold mb-4 md:mb-6 leading-tight font-serif">
                    Your Journey to Global Education Starts Here
                </h1>
                <p className="text-base md:text-lg text-gray-200 mb-6 md:mb-8 max-w-2xl md:mx-0 font-serif">
                    Your dream university made closer with the right plan, right guidance, and right support
                </p>
                
                    {/* CTA Button */}
                    <button
                        onClick={handleBookCounselling}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                    >
                        Book Counselling
                    </button>
                </div>
            </div>

            {/* Our Highlights Section - Redesigned */}
            <div className="py-20 bg-emerald-50">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">
                            Our Highlights
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Trusted by thousands of students worldwide with proven results
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {highlights.map((highlight, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100 hover:border-emerald-200"
                            >
                                <div className="text-center">
                                    <h3 className="text-lg font-semibold text-emerald-900 mb-2">
                                        {highlight.heading}
                                    </h3>
                                    <div className="text-4xl md:text-5xl font-bold text-emerald-600 mb-3">
                                        <span>
                                            <NumberTicker value={highlight.value} />
                                            {highlight.suffix}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {highlight.subtext}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* About Clover Section */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-6">
                            About Clover
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Clover Overseas Education helps students achieve their dream of studying abroad with 
                            expert counselling, transparent processes, and proven results. We have helped hundreds of 
                            students reach top universities across the USA, UK, Canada, Australia, and beyond.
                        </p>
                        <motion.button
                            onClick={() => window.location.href = '/about'}
                            className="mt-8 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Learn More About Us
                        </motion.button>
                    </motion.div>
                </div>
            </div>

            {/* Services We Provide Section - Bento Grid */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">
                            Services We Provide
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Comprehensive support for every step of your study abroad journey
                        </p>
                    </motion.div>

                    {/* Bento Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[200px]">
                        {services.map((service, index) => {
                            const IconComponent = service.icon;
                            
                            // Define different sizes for bento grid
                            const getGridClasses = (index: number) => {
                                switch (index) {
                                    case 0: return "md:col-span-1 md:row-span-1"; // Small - Counselling (changed from 2x2 to 1x1)
                                    case 1: return "md:col-span-2 md:row-span-1"; // Wide - University Selection (changed from 1x1 to 2x1)
                                    case 2: return "md:col-span-1 md:row-span-1"; // Small - Test Preparation (changed from 1x2 to 1x1)
                                    case 3: return "md:col-span-2 md:row-span-1"; // Wide - Internships
                                    case 4: return "md:col-span-1 md:row-span-1"; // Small - Documentation
                                    case 5: return "md:col-span-1 md:row-span-1"; // Small - University Applications
                                    case 6: return "md:col-span-2 md:row-span-2"; // Large - Visa
                                    case 7: return "md:col-span-1 md:row-span-1"; // Small - Travel Preparation
                                    case 8: return "md:col-span-1 md:row-span-1"; // Small - Post Landing
                                    case 9: return "md:col-span-2 md:row-span-1"; // Wide - Scholarship
                                    default: return "md:col-span-1 md:row-span-1";
                                }
                            };

                            return (
                                <motion.a
                                    key={index}
                                    href={service.link}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className={`group relative overflow-hidden rounded-2xl ${getGridClasses(index)} cursor-pointer`}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    {/* Background Image */}
                                    <div 
                                        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
                                        style={{ backgroundImage: `url(${service.image})` }}
                                    />
                                    
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-emerald-800/40 to-emerald-700/20" />
                                    
                                    {/* Content */}
                                    <div className="relative z-10 h-full flex flex-col justify-end p-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                                <IconComponent className="w-5 h-5 text-white" />
                                            </div>
                                            <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-emerald-100 transition-colors">
                                                {service.name}
                                            </h3>
                                        </div>
                                        
                                        <p className="text-white/90 text-sm md:text-base mb-4 leading-relaxed line-clamp-3">
                                            {service.description}
                                        </p>
                                        
                                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 w-fit">
                                            Learn More
                                            <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </motion.a>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Loans Section */}
            <div className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <FaDollarSign className="w-12 h-12 text-white" />
                            <h2 className="text-3xl md:text-4xl font-bold text-white">
                                Ron Destino Loans
                            </h2>
                        </div>
                        <p className="text-xl text-emerald-100 max-w-4xl mx-auto leading-relaxed">
                            Finance Your Destiny, Shape Your Future - Your gateway to global education with hassle-free loans that travel with you.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
                        >
                            <div className="text-3xl font-bold text-white mb-2">96%</div>
                            <div className="text-emerald-100">Loan Approval Rate</div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
                        >
                            <div className="text-3xl font-bold text-white mb-2">$1.7M+</div>
                            <div className="text-emerald-100">Scholarships & Loans Facilitated</div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
                        >
                            <div className="text-3xl font-bold text-white mb-2">20+</div>
                            <div className="text-emerald-100">Leading Financial Institutions</div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <a 
                            href="/loans"
                            className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-2xl"
                        >
                            Explore Loan Options
                            <FaArrowRight className="w-4 h-4" />
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="py-20 bg-emerald-50">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">
                            What Our Students Say
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Real stories from students who achieved their dreams with Clover Overseas Education
                        </p>
                    </motion.div>

                    <AutoScrollTestimonials testimonials={testimonials} />
                </div>
            </div>

            {/* FAQ Section */}
            <div className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <FaQuestionCircle className="w-10 h-10 text-emerald-600" />
                            <h2 className="text-3xl md:text-4xl font-bold text-emerald-900">
                                Frequently Asked Questions
                            </h2>
                        </div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Get answers to the most common questions about studying abroad
                        </p>
                    </motion.div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl border border-emerald-100 overflow-hidden hover:border-emerald-200 transition-colors"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-emerald-50 transition-colors"
                                >
                                    <h3 className="text-lg font-semibold text-emerald-900 pr-4">
                                        {faq.question}
                                    </h3>
                                    <motion.div
                                        animate={{ rotate: openFAQ === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex-shrink-0"
                                    >
                                        {openFAQ === index ? (
                                            <FaChevronUp className="w-5 h-5 text-emerald-600" />
                                        ) : (
                                            <FaChevronDown className="w-5 h-5 text-emerald-600" />
                                        )}
                                    </motion.div>
                                </button>
                                
                                <AnimatePresence>
                                    {openFAQ === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-4">
                                                <p className="text-gray-600 leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>


            {/* Final CTA Section */}
            <div className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700">
                <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Ready to Start Your Global Education Journey?
                        </h2>
                        <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">
                            Join thousands of successful students who have achieved their dreams with Clover Overseas Education
                        </p>
                        <motion.button
                            onClick={handleBookCounselling}
                            className="bg-white text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-2xl"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Book Your Free Counselling Session
                        </motion.button>
                    </motion.div>
                </div>
            </div>

            {/* Logo & Contact Section - Right Above Footer */}
            <div className="h-[33vh] my-20 bg-white flex items-center justify-center">
                <div className="max-w-6xl mx-auto px-4 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center justify-center w-full"
                    >
                        {/* Logo Section */}
                        <motion.div
                            whileHover={{ 
                                scale: 1.05,
                            }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ duration: 0.3 }}
                            className="cursor-pointer"
                        >
                            <img 
                                src="/Copy of clover_logo_1.jpg" 
                                alt="Clover Overseas Education" 
                                className="h-32 w-auto md:h-48 w-auto transition-all duration-300"
                            />
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </div>
    )
}