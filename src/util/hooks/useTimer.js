import { useEffect, useState } from 'react';
import { formatTimer } from '../formatters';

const useTimer = (initialDates) => {
  const [dates, setDates] = useState(initialDates);
  const [active, setActive] = useState(false);
  const [seconds, setSeconds] = useState(null);

  useEffect(() => {
    if (dates) {
      const totalMilliseconds = new Date(dates.ends) - new Date(dates.started);
      const totalSeconds = totalMilliseconds / 1000;

      setActive(true);
      setSeconds(totalSeconds);
    }
  }, [dates]);

  useEffect(() => {
    let ticker;

    if (active) {
      if (seconds > 0) {
        ticker = setTimeout(() => setSeconds((s) => s - 1), 1000);
      } else if (seconds !== null && seconds === 0) {
        setActive(false);
      }
    }

    return () => clearTimeout(ticker);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds]);

  const minutes = Math.floor(seconds / 60);
  const formattedTimer = formatTimer(minutes, seconds);

  return [formattedTimer, setDates, setActive];
};

export default useTimer;
