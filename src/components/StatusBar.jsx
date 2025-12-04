import React, { useState, useEffect } from 'react';

const StatusBar = () => {
  const [time, setTime] = useState('9:41');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setTime(`${hours}:${minutes}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-0 left-0 right-0 h-[51px] bg-white z-50">
      <div className="flex flex-col items-start pt-[21px]">
        <div className="flex flex-row justify-between items-center w-full px-4">
          {/* Time */}
          <div className="flex flex-row justify-center items-center flex-1">
            <span className="text-[17px] font-semibold text-black text-center">
              {time}
            </span>
          </div>

          {/* Dynamic Island Spacer */}
          <div className="w-[124px] h-[10px]" />

          {/* Levels (Battery, Wifi, Cellular) */}
          <div className="flex flex-row justify-center items-center gap-[7px] flex-1">
            {/* Cellular Connection */}
            <div className="w-[19.2px] h-[12.23px] relative">
              <svg width="19" height="13" viewBox="0 0 19 13" fill="none">
                <rect x="0" y="7" width="3" height="5" rx="1" fill="black"/>
                <rect x="4.5" y="4.5" width="3" height="7.5" rx="1" fill="black"/>
                <rect x="9" y="2" width="3" height="10" rx="1" fill="black"/>
                <rect x="13.5" y="0" width="3" height="12" rx="1" fill="black"/>
              </svg>
            </div>

            {/* Wifi */}
            <div className="w-[17.14px] h-[12.33px] relative">
              <svg width="18" height="13" viewBox="0 0 18 13" fill="none">
                <path d="M9 12C9.55228 12 10 11.5523 10 11C10 10.4477 9.55228 10 9 10C8.44772 10 8 10.4477 8 11C8 11.5523 8.44772 12 9 12Z" fill="black"/>
                <path d="M6.5 8.5C7.5 7.5 8.5 7 9 7C9.5 7 10.5 7.5 11.5 8.5" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M4 5.5C5.5 4 7.5 3 9 3C10.5 3 12.5 4 14 5.5" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M1.5 2.5C4 0.5 7 0 9 0C11 0 14 0.5 16.5 2.5" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>

            {/* Battery */}
            <div className="w-[27.33px] h-[13px] relative">
              <svg width="28" height="13" viewBox="0 0 28 13" fill="none">
                {/* Border */}
                <rect x="1" y="0.5" width="23" height="12" rx="3.8" stroke="black" strokeOpacity="0.35" strokeWidth="1"/>
                {/* Cap */}
                <rect x="25.5" y="4" width="1.33" height="5" rx="0.5" fill="black" fillOpacity="0.4"/>
                {/* Capacity */}
                <rect x="2" y="2" width="21" height="9" rx="2.5" fill="black"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
