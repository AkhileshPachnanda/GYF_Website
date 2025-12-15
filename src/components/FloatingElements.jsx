import { motion } from 'framer-motion';

export const Squiggle = ({ className }) => (
    <motion.svg
        viewBox="0 0 100 20"
        className={`absolute -z-10 ${className}`}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
    >
        <path
            d="M0 10 Q25 0 50 10 T100 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
        />
    </motion.svg>
);

export const Star = ({ className, delay = 0 }) => (
    <motion.svg
        viewBox="0 0 24 24"
        className={`absolute -z-10 ${className}`}
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: 180 }}
        transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay
        }}
    >
        <path
            d="M12 0 L15 9 L24 12 L15 15 L12 24 L9 15 L0 12 L9 9 Z"
            fill="currentColor"
        />
    </motion.svg>
);

export const Ribbon = ({ className }) => (
    <motion.svg
        viewBox="0 0 200 100"
        className={`absolute -z-10 ${className}`}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
    >
        <path
            d="M0 40 C50 40 50 10 100 10 C150 10 150 60 200 60"
            fill="none"
            stroke="currentColor"
            strokeWidth="20"
            strokeLinecap="round"
            className="opacity-20"
        />
    </motion.svg>
);

export const Circle = ({ className }) => (
    <motion.div
        className={`absolute rounded-full border-4 border-black -z-10 ${className}`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", bounce: 0.5 }}
    />
);
