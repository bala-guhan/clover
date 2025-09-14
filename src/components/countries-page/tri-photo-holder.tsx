import { motion } from "motion/react";



export function TriPhotoHolder() {
  return (
    <div className="relative flex items-center justify-center w-full h-96 md:h-[28rem] overflow-hidden">
      {/* Left Image (Image 2) */}
      <motion.div
        className="absolute left-0 z-10 w-48 h-72 md:w-[42rem] md:h-80 rounded-xl shadow-lg"
        initial={{ x: 400, opacity: 0 }}
        animate={{ x: 200, opacity: 1 }}
        transition={{ 
          duration: 0.8, 
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.6
        }}
        style={{
          backgroundImage: `url(/public/usa-uni-3.jpeg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Center Image (Image 1) - Main prominent image */}
      <motion.div
        className="relative z-20 w-80 h-80 md:w-[42rem] md:h-96 rounded-xl shadow-xl"
        initial={{ scale: 0.8, opacity: 0.5 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          duration: 0.6, 
          ease: [0.25, 0.46, 0.45, 0.94] 
        }}
        style={{
          backgroundImage: `url(/public/usa-uni-1.jpeg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Right Image (Image 3) */}
      <motion.div
        className="absolute right-0 z-10 w-48 h-72 md:w-[42rem] md:h-80 rounded-xl shadow-lg"
        initial={{ x: -400, opacity: 0 }}
        animate={{ x: -200, opacity: 1 }}
        transition={{ 
          duration: 0.8, 
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.6
        }}
        style={{
          backgroundImage: `url(/public/usa-uni-2.jpeg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
    </div>
  );
}