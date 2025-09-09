import { motion } from 'framer-motion';

interface PopperButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export default function PopperButton({ 
  text, 
  onClick, 
  className = "", 
  disabled = false 
}: PopperButtonProps) {
  return (
    <motion.button
      className={`px-8 py-2 text-lg font-normal bg-emerald-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 ${className}`}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ 
        y: -2,
        scale: 1.05,
        transition: { type: "spring", damping: 10, stiffness: 300 }
      }}
      whileTap={{ 
        scale: 0.95,
        transition: { type: "spring", damping: 15, stiffness: 400 }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", damping: 12, stiffness: 200 }}
    >
      {text}
    </motion.button>
  );
}
