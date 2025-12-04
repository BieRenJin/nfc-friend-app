import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const SetLoginPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // Get name from URL parameter
    const nameParam = searchParams.get('name');
    if (nameParam) {
      localStorage.setItem('userName', nameParam);
    }
  }, [searchParams]);

  const handleConfirm = () => {
    // Set login to true
    localStorage.setItem('login', 'true');

    // Navigate back to home
    navigate('/');
  };

  return (
    <div className="relative w-full max-w-[402px] h-[874px] bg-white flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-8"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-[36px] font-bold text-black text-center"
        >
          Ready to Check In?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-[18px] text-gray-600 text-center px-8"
        >
          Click confirm to enable check-in mode
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5, type: 'spring' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleConfirm}
          className="px-16 py-4 bg-black text-white font-bold text-[18px] rounded-[20px] shadow-lg"
        >
          Confirm
        </motion.button>
      </motion.div>
    </div>
  );
};

export default SetLoginPage;
