import React from 'react';
import { motion } from 'framer-motion';

const CheckIcon = ({ size = 134 }) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay: 0.2
      }}
      className="flex items-center justify-center"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 134 134"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="67"
          cy="67"
          r="67"
          fill="#3CCB29"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.path
          d="M40 67L58 85L94 49"
          stroke="white"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.3,
            ease: 'easeInOut'
          }}
        />
      </svg>
    </motion.div>
  );
};

export default CheckIcon;
