import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CheckIcon from '../components/CheckIcon';

const FriendPage = ({ userName = 'Caroline' }) => {
  const [isFriended, setIsFriended] = useState(false);

  const handleYes = () => {
    setIsFriended(true);
  };

  const handleDismiss = () => {
    // Just for UX, could navigate away or show a message
    alert('Dismissed');
  };

  return (
    <div className="relative w-full max-w-[402px] h-[874px] bg-white overflow-y-auto">
      <AnimatePresence mode="wait">
        {!isFriended ? (
          <motion.div
            key="ask-friend"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center justify-center h-full"
          >
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-[36px] leading-[50px] font-bold italic tracking-tight text-black"
            >
              Paw Detected
            </motion.h1>

            {/* Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, type: 'spring' }}
              className="mt-[37px]"
            >
              <img
                src="/images/avatar-default.png"
                alt={userName}
                className="w-[120px] h-[120px] object-cover rounded-full border border-black"
              />
            </motion.div>

            {/* Question */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-[35px] text-[24px] leading-[50px] font-bold tracking-tight text-black text-center px-12"
            >
              Add {userName} into friend list?
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-row gap-[25px] mt-[34px]"
            >
              {/* Yes Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleYes}
                className="w-[130px] h-[44px] rounded-[15px] flex items-center justify-center"
                style={{ backgroundColor: '#000000', color: '#FFFFFF', border: 'none', outline: 'none' }}
              >
                <span className="font-extrabold text-[16px] leading-[20px] tracking-tight">
                  Yes
                </span>
              </motion.button>

              {/* Dismiss Button */}
              <motion.button
                disabled
                className="w-[130px] h-[44px] bg-[#D9D9D9] rounded-[15px] flex items-center justify-center opacity-50 cursor-not-allowed"
              >
                <span className="text-white font-extrabold text-[16px] leading-[20px] tracking-tight">
                  Dismiss
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="friended-success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center h-full"
          >
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-[36px] leading-[50px] font-bold italic tracking-tight text-black"
            >
              Paw Detected
            </motion.h1>

            {/* Two Avatars Side by Side */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, type: 'spring' }}
              className="flex flex-row mt-[37px]"
            >
              <motion.img
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                src="/images/avatar-default.png"
                alt={userName}
                className="w-[120px] h-[120px] object-cover rounded-full border border-black z-10"
              />
              <motion.img
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                src="/images/image 71.png"
                alt="You"
                className="w-[120px] h-[120px] object-cover rounded-full border border-black -ml-[20px] z-0"
              />
            </motion.div>

            {/* Success Message */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-[35px] text-[20px] leading-[50px] font-bold tracking-tight text-black"
            >
              Friended Successfully!
            </motion.p>

            {/* Check Icon */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-[2px]"
            >
              <CheckIcon size={95} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FriendPage;
