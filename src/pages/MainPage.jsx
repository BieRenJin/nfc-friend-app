import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import CheckInPage from './CheckInPage';
import FriendPage from './FriendPage';
import { motion, AnimatePresence } from 'framer-motion';

const MainPage = () => {
  const [searchParams] = useSearchParams();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('Caroline');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get name from URL parameter if present
    const nameParam = searchParams.get('name');
    if (nameParam) {
      localStorage.setItem('userName', nameParam);
      setUserName(nameParam);
    } else {
      // Otherwise, get from localStorage
      const storedName = localStorage.getItem('userName');
      if (storedName) {
        setUserName(storedName);
      }
    }

    // Check login status
    const loginStatus = localStorage.getItem('login');
    setIsLoggedIn(loginStatus === 'true');

    // Simulate a brief loading time for smooth transition
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, [searchParams]);

  if (isLoading) {
    return (
      <div className="relative w-full max-w-[402px] h-[874px] bg-white flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="w-12 h-12 border-4 border-gray-200 border-t-black rounded-full"
        />
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      {isLoggedIn ? (
        <motion.div
          key="checkin"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.4 }}
        >
          <CheckInPage userName={userName} />
        </motion.div>
      ) : (
        <motion.div
          key="friend"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
        >
          <FriendPage userName={userName} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MainPage;
