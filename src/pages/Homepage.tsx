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
            className="flex flex-col justify-center h-screen w-full px-24 bg-cover bg-center bg-no-repeat relative"
            style={{
                backgroundImage: "url('/uni-stud-2hero.jpeg')"
            }}
        >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            
            {/* Content */}
            <div className="relative z-10 max-w-4xl">
                <h1 className="text-3xl md:text-5xl text-white font-semibold mb-6">Your Journey to Global Education Starts Here</h1>
                <p className="text-lg text-gray-200 mb-4">Your dream university made closer with the right plan, right guidance, and right support</p>
                
                {/* Buttons */}
                <div className="flex gap-4">
                    <PopperButton 
                        text="Get Started" 
                        onClick={handleGetStarted}
                        className="bg-emerald-600 hover:bg-emerald-700"
                    />
                    <PopperButton 
                        text="Learn More" 
                        onClick={handleLearnMore}
                        className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-emerald-600"
                    />
                </div>
            </div>
        </div>
    )
}