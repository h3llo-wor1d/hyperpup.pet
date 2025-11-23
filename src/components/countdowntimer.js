import React, { useRef, useState, useEffect } from 'react';

const CountdownTimer = ({ targetTimestampMs }) => {
    const calculateTimeLeft = () => {
      const targetTimeMs = String(targetTimestampMs).length === 10 
        ? targetTimestampMs * 1000 
        : targetTimestampMs;
        
      const difference = targetTimeMs - Date.now();
      
      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0, isComplete: true };
      }
  
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
  
      return { days, hours, minutes, seconds, isComplete: false };
    };
  
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    useEffect(() => {
      const intervalId = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
      return () => clearInterval(intervalId);
    }, [targetTimestampMs]);
  
    if (timeLeft.isComplete) {
      return <div>Countdown Complete!</div>;
    }
  
    return (
      <div>
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
      </div>
    );
  };

export default CountdownTimer;