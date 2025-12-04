import React from 'react';
import { motion } from 'framer-motion';
import CheckIcon from '../components/CheckIcon';

const CheckInPage = ({ userName = 'Caroline' }) => {
  return (
    <div className="relative w-full max-w-[402px] h-[874px] bg-white overflow-y-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center h-full"
      >
        {/* Welcome Text */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-[40px] leading-[50px] font-light italic tracking-tight text-[#999999]"
          style={{ fontWeight: 112 }}
        >
          Welcome
        </motion.h2>

        {/* User Name */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-[48px] leading-[50px] font-black italic tracking-tight text-black mt-0"
          style={{ fontWeight: 858 }}
        >
          {userName}
        </motion.h1>

        {/* Avatar Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, type: 'spring' }}
          className="mt-[51px]"
        >
          <img
            src="/images/avatar-default.png"
            alt={userName}
            className="w-[120px] h-[120px] object-cover rounded-full border border-black"
          />
        </motion.div>

        {/* Check Icon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-[25px]"
        >
          <CheckIcon size={80} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CheckInPage;
