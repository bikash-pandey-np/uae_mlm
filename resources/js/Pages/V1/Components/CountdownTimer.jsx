import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ ends_at }) => {
  const [remainingSeconds, setRemainingSeconds] = useState(0);

  useEffect(() => {
    const endDate = new Date(ends_at).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate - now;

      const seconds = Math.floor(distance / 1000);

      setRemainingSeconds(seconds);

      if (distance < 0) {
        clearInterval(interval);
        setRemainingSeconds(0);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [ends_at]);

  // Function to format remaining seconds into MM:SS format
  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec < 10 ? '0' + sec : sec}`;
  };

  return (
    <div>
      {remainingSeconds <= 0 ? (
        <p>Ended</p>
      ) : (
        <p>Remaining time: {formatTime(remainingSeconds)}</p>
      )}
    </div>
  );
};

export default CountdownTimer;
