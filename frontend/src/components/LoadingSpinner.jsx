import { motion } from "motion/react";

const LoadingSpinner = () => {
    return (
        <div className="absolute inset-0 z-500 flex items-center justify-center bg-transparent">
            <motion.div
                animate={{ rotate: 360 }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="w-12 h-12 border-4 border-gray-600 border-t-black rounded-full"
            ></motion.div>
        </div>
    );
};

export default LoadingSpinner;
