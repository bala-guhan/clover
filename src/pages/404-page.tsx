import { motion } from 'framer-motion';
import PopperButton from '../components/popper-button';

export default function NotFoundPage() {
    const handleGoHome = () => {
        window.location.href = '/';
    };

    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center px-4 pt-16 md:pt-0">
            <div className="text-center max-w-2xl mx-auto">
                {/* 404 Number */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-8"
                >
                    <h1 className="text-6xl md:text-9xl font-bold text-emerald-600 font-playfair">
                        404
                    </h1>
                </motion.div>

                {/* Error Message */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-8"
                >
                    <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-4">
                        Oops! Page Not Found
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 mb-2">
                        The page you're looking for seems to have wandered off into the digital void.
                    </p>
                    <p className="text-sm md:text-base text-gray-500">
                        Don't worry, even the best students sometimes take a wrong turn!
                    </p>
                </motion.div>

                {/* Clover Icon Animation */}
                <motion.div
                    initial={{ opacity: 0, rotate: -180 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mb-8"
                >
                    <img 
                        src="/clover-logo-icon.svg" 
                        alt="Clover Icon" 
                        className="h-12 w-12 md:h-16 md:w-16 mx-auto opacity-90"
                    />
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col md:flex-row gap-4 justify-center items-center"
                >
                    <PopperButton 
                        text="Go Home" 
                        onClick={handleGoHome}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white"
                    />
                    <PopperButton 
                        text="Go Back" 
                        onClick={handleGoBack}
                        className="bg-emerald-600 border-2 border-emerald-600 text-emerald-900 hover:bg-emerald-700"
                    />
                </motion.div>

                {/* Helpful Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }} 
                    className="mt-12"
                >
                    <p className="text-sm text-gray-500 mb-4">Or try these popular pages:</p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm">
                        <a href="/" className="text-emerald-600 hover:text-emerald-700 hover:underline transition-colors">
                            Home
                        </a>
                        <a href="/about" className="text-emerald-600 hover:text-emerald-700 hover:underline transition-colors">
                            About Us
                        </a>
                        <a href="/services" className="text-emerald-600 hover:text-emerald-700 hover:underline transition-colors">
                            Services
                        </a>
                        <a href="/counselling" className="text-emerald-600 hover:text-emerald-700 hover:underline transition-colors">
                            Counselling
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
