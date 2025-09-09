import PopperButton from '../components/popper-button';

export default function HomePage() {
    const handleGetStarted = () => {
        console.log('Get Started clicked!');
        // Add your navigation logic here
    };

    const handleLearnMore = () => {
        console.log('Learn More clicked!');
        // Add your navigation logic here
    };

    return (
        <div 
            className="flex flex-col justify-center min-h-screen w-full px-4 sm:px-8 md:px-16 lg:px-24 pt-16 md:pt-0 bg-cover bg-center bg-no-repeat relative"
            style={{
                backgroundImage: "url('/uni-stud-2hero.jpeg')"
            }}
        >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            
            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto text-center md:text-left">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-semibold mb-4 md:mb-6 leading-tight">
                    Your Journey to Global Education Starts Here
                </h1>
                <p className="text-base sm:text-lg text-gray-200 mb-6 md:mb-8 max-w-2xl mx-auto md:mx-0">
                    Your dream university made closer with the right plan, right guidance, and right support
                </p>
                
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                    <PopperButton 
                        text="Get Started" 
                        onClick={handleGetStarted}
                        className="bg-emerald-600 hover:bg-emerald-700 w-full sm:w-auto"
                    />
                    <PopperButton 
                        text="Learn More" 
                        onClick={handleLearnMore}
                        className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-emerald-600 w-full sm:w-auto"
                    />
                </div>
            </div>
        </div>
    )
}