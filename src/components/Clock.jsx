import { useEffect, useState } from "react";

export const Clock = () => {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  useEffect(() => {
    const countDown = () => {
      const destination = new Date("Apr 20, 2024");
      const interval = setInterval(() => {
        const now = new Date().getTime();
        const different = destination - now;

        const days = Math.floor(different / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (different % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (different % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((different % (1000 * 60)) / 1000);

        if (different < 0) {
          clearInterval(interval.current);
        } else {
          setDays(days);
          setHours(hours);
          setMinutes(minutes);
          setSeconds(seconds);
        }
      }, 1000);
    };

    countDown();
  }, []);

  return (
    <div className="flex items-center gap-5">
      <div className="text-center">
        <h1 className="text-4xl font-bold">{days}</h1>
        <p className="text-xl">Days</p>
      </div>
      <div>
        <span className="text-4xl">:</span>
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold">{hours}</h1>
        <p className="text-xl">Hours</p>
      </div>
      <div>
        <span className="text-4xl">:</span>
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold">{minutes}</h1>
        <p className="text-xl">Minutes</p>
      </div>
      <div>
        <span className="text-4xl">:</span>
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold">{seconds}</h1>
        <p className="text-xl">Seconds</p>
      </div>
    </div>
  );
};
