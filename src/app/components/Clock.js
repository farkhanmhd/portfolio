'use client';

import { useState, useEffect } from 'react';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  let hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const amOrPm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12 || 12;

  return (
    <div className="flex w-[100px] items-center justify-center bg-white px-3 py-2 ">
      <span className="text-[14px] text-black ">{`${hours}:${minutes.toString().padStart(2, '0')} ${amOrPm}`}</span>
    </div>
  );
};

export default Clock;
