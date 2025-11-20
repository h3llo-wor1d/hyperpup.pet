import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

const CountdownTimer = ({ targetTimestampMs }) => {
  // Calculate initial time left when the component mounts or timestamp changes
  const calculateTimeLeft = () => {
    // Ensure the timestamp is in milliseconds if it's in seconds
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
    // Update the countdown every second
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts or dependencies change
    return () => clearInterval(intervalId);
  }, [targetTimestampMs]); // Re-run effect if the target timestamp changes

  if (timeLeft.isComplete) {
    return <div>Countdown Complete!</div>;
  }

  return (
    <div>
      {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
    </div>
  );
};

export default function Player({ src }) {
  const [active, setActive] = useState(false);
  const audioRef = useRef(null);

  const PlayerRef = styled.div `
  &:hover {
    opacity: .75;
  }
  `
  const handleInteraction = () => {
    if (!active) setActive(true);
    document.title = "1.1.26";
  };

  return (
    <div>
      {/* The <audio> element is hidden and configured to loop */}
      {active ?
      <div>
          <audio
          ref={audioRef}
          src={src}
          loop // This attribute makes the audio loop eternally
          // controls attribute is omitted to hide default controls
          style={{ display: 'none' }} // Hides the element visually
          autoPlay
        />
        <CountdownTimer targetTimestampMs={1767243600} />
      </div>
         :
      <PlayerRef onClick={handleInteraction} style={{ cursor: 'pointer'}}>
        &gt;&gt; when am i? &lt;&lt;
      </PlayerRef>
      }
      {/* User interaction element */}
    </div>
  );
};