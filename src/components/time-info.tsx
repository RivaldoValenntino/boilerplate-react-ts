import React from "react";
import IcTimer from "../assets/ic_timer.svg";

interface TimeInfoProps {
  nextTime: string; // format: "12:00"
  countdown: string; // format: "00:59"
  label?: string;
  className?: string;
}

const TimeInfo: React.FC<TimeInfoProps> = ({
  nextTime,
  countdown,
  label = "Sisa waktu menuju jam berikutnya",
  className = "",
}) => {
  return (
    <div
      className={`rounded-xl border bg-white shadow-none px-4 py-3 mb-4 ${className}`}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center justify-center gap-2">
          <img src={IcTimer} alt="Timer Icon" className="w-14 h-14" />
          <span className="font-bold text-gray-800  text-md md:text-base">
            {label}
          </span>
        </div>
        <div className="text-center">
          <div className="px-2 py-1 font-semibold text-white rounded-md text-md bg-orangeCust md:text-base">
            {nextTime}
          </div>
          <div className="my-1 text-lg font-bold leading-tight text-gray-800">
            {countdown}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeInfo;
