import React, { useRef } from 'react';
import styled from 'styled-components';

export default function Player({ src }) {
  const audioRef = useRef(null);

  const PlayerRef = styled.div `
  &:hover {
    opacity: .75;
  }
  `
  const handleInteraction = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.error("Audio playback failed:", error);
      });
    }
  };

  return (
    <PlayerRef onClick={handleInteraction} style={{ cursor: 'pointer'}}>
      {/* The <audio> element is hidden and configured to loop */}
      <audio
        ref={audioRef}
        src={src}
        loop // This attribute makes the audio loop eternally
        // controls attribute is omitted to hide default controls
        style={{ display: 'none' }} // Hides the element visually
      />
      1/1/26
      {/* User interaction element */}
    </PlayerRef>
  );
};